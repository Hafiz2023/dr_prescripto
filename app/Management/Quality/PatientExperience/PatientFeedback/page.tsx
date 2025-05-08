"use client";
import { useState, useEffect } from "react";
import Head from "next/head";

type Feedback = {
  id: number;
  name: string;
  email: string;
  rating: number;
  comment: string;
  date: string;
};

export default function PatientFeedback() {
  const [feedbacks, setFeedbacks] = useState<Feedback[]>([]);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    // Initialize with sample data only on client side
    setFeedbacks([
      {
        id: 1,
        name: "John Smith",
        email: "john@example.com",
        rating: 5,
        comment: "The doctor provided excellent care. I was very satisfied with my treatment.",
        date: new Date("2023-05-15").toLocaleDateString(),
      },
      {
        id: 2,
        name: "Sarah Johnson",
        email: "sarah@example.com",
        rating: 4,
        comment: "Good service overall, but the waiting time could be improved.",
        date: new Date("2023-05-10").toLocaleDateString(),
      },
    ]);
  }, []);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    rating: 0,
    comment: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleRatingChange = (value: number) => {
    setFormData((prev) => ({ ...prev, rating: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formData.name || !formData.rating) return;

    const newFeedback: Feedback = {
      id: feedbacks.length + 1,
      name: formData.name,
      email: formData.email,
      rating: formData.rating,
      comment: formData.comment,
      date: new Date().toLocaleDateString(),
    };

    setFeedbacks([newFeedback, ...feedbacks]);
    setFormData({ name: "", email: "", rating: 0, comment: "" });
    setSubmitted(true);

    setTimeout(() => setSubmitted(false), 3000);
  };

  const renderStars = (rating: number) => {
    return (
      <div className="flex">
        {[...Array(5)].map((_, i) => (
          <span
            key={i}
            className={i < rating ? "text-yellow-400" : "text-gray-300"}
          >
            {i < rating ? "★" : "☆"}
          </span>
        ))}
      </div>
    );
  };

  if (!isMounted) {
    // Return a simple loading state or null during SSR
    return null;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Head>
        <title>Patient Feedback | Hospital Name</title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=5.0"
        />
      </Head>

      <main className="container mx-auto px-4 py-8">
        {/* Header */}
        <header className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-blue-800 mb-2">
            Patient Feedback
          </h1>
          <p className="text-lg text-blue-600">Your experience matters to us</p>
        </header>

        {/* Feedback Form */}
        <section className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 mb-12">
          <h2 className="text-2xl font-semibold text-blue-700 mb-6">
            Share Your Feedback
          </h2>

          {submitted && (
            <div className="bg-blue-100 border border-blue-400 text-blue-700 px-4 py-3 rounded mb-4">
              Thank you for your feedback! We appreciate your comments.
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="form-group">
              <label htmlFor="name" className="block text-gray-700 mb-2">
                Name *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-2 border border-blue-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div className="form-group">
              <label htmlFor="email" className="block text-blue-700 mb-2">
                Email (optional)
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border border-blue-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div className="form-group">
              <label className="block text-blue-700 mb-2">
                Service Quality *
              </label>
              <div className="rating flex space-x-2">
                {[5, 4, 3, 2, 1].map((value) => (
                  <label key={value} className="cursor-pointer">
                    <input
                      type="radio"
                      name="rating"
                      value={value}
                      checked={formData.rating === value}
                      onChange={() => handleRatingChange(value)}
                      className="hidden"
                      required
                    />
                    <span
                      className={`text-2xl ${
                        formData.rating >= value
                          ? "text-yellow-400"
                          : "text-gray-300"
                      } hover:text-yellow-500 transition-colors`}
                    >
                      ★
                    </span>
                  </label>
                ))}
                <span className="ml-2 text-gray-600">
                  {formData.rating === 5 && "(Excellent)"}
                  {formData.rating === 4 && "(Good)"}
                  {formData.rating === 3 && "(Average)"}
                  {formData.rating === 2 && "(Poor)"}
                  {formData.rating === 1 && "(Very Poor)"}
                </span>
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="comment" className="block text-blue-700 mb-2">
                Comments (optional)
              </label>
              <textarea
                id="comment"
                name="comment"
                rows={4}
                value={formData.comment}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border border-blue-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-md transition-colors duration-300"
            >
              Submit Feedback
            </button>
          </form>
        </section>

        {/* Feedback Table */}
        <section>
          <h2 className="text-2xl font-semibold text-blue-700 mb-6">
            Patient Feedback Records
          </h2>

          {feedbacks.length === 0 ? (
            <p className="text-blue-500 text-center py-8">
              No feedback received yet.
            </p>
          ) : (
            <div className="overflow-x-auto">
              <table className="min-w-full bg-white rounded-lg overflow-hidden shadow-md">
                <thead className="bg-blue-700 text-white">
                  <tr>
                    <th className="py-3 px-4 text-left">Name</th>
                    <th className="py-3 px-4 text-left">Email</th>
                    <th className="py-3 px-4 text-center">Rating</th>
                    <th className="py-3 px-4 text-left">Date</th>
                    <th className="py-3 px-4 text-left">Comments</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {feedbacks.map((feedback) => (
                    <tr
                      key={feedback.id}
                      className="hover:bg-blue-50 transition-colors"
                    >
                      <td className="py-3 px-4">{feedback.name}</td>
                      <td className="py-3 px-4">{feedback.email || "-"}</td>
                      <td className="py-3 px-4">
                        <div className="flex justify-center">
                          {renderStars(feedback.rating)}
                        </div>
                      </td>
                      <td className="py-3 px-4">{feedback.date}</td>
                      <td className="py-3 px-4 text-blue-600">
                        {feedback.comment || "-"}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </section>
      </main>
    </div>
  );
}