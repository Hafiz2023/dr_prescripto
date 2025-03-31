import { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';
import formidable from 'formidable';
import fs from 'fs';

// Disable body parser for handling file uploads using formidable
export const config = {
  api: {
    bodyParser: false, // Disable the default body parser to handle file uploads manually
  },
};

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const form = new formidable.IncomingForm({
      uploadDir: './public/uploads', // Directory to store the uploaded files temporarily
      keepExtensions: true, // Keep file extensions (e.g. .pdf, .docx)
      maxFileSize: 10 * 1024 * 1024, // Limit file size to 10MB
    });

    // Parse the form data
    form.parse(req, async (err, fields, files) => {
      if (err) {
        console.error('Error parsing form data:', err);
        return res.status(500).json({ message: 'Error parsing form data' });
      }

      // Extract data from the parsed form fields
      const { name, email, phone, message } = fields;
      const resume = files.resume?.[0]; // File object for resume (if exists)

      // Check if all required fields are present
      if (!name || !email || !phone || !message) {
        return res.status(400).json({ message: 'Missing required fields'
        });
        }
        // Create a nodemailer transporter
        const transporter = nodemailer.createTransport({
          service: 'Gmail',
          auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS,
          },
        });
        // Set up email data
        const mailOptions: nodemailer.SendMailOptions = {   
          from: String(email),
          to: process.env.EMAIL_USER,
          subject: 'New Resume Submission',
          text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nMessage: ${message}`,
        };
        if (resume) {
          // Attach the resume file to the email
          mailOptions.attachments = [
            {
              filename: resume.originalFilename || 'unknown_filename',
              path: resume.filepath,
            },
          ];
        }
        // Send the email
        try {
            await transporter.sendMail(mailOptions);
            // If a resume was uploaded, delete the temporary file
            if (resume) {
                fs.unlinkSync(resume.filepath); // Delete the file after sending the email
            }
            return res.status(200).json({ message: 'Email sent successfully' });
            }
            catch (error) {
                console.error('Error sending email:', error);
                return res.status(500).json({ message: 'Error sending email' });
            }
        }); 
    } else {
        // Handle unsupported request methods
        res.setHeader('Allow', ['POST']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}
