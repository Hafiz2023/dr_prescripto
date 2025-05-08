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

const PatientFeedback = () => {
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
        date: new Date("2023-05-15").toLocaleDateString('en-US', { 
          year: 'numeric', 
          month: 'short', 
          day: 'numeric' 
        }),
      },
      {
        id: 2,
        name: "Sarah Johnson",
        email: "sarah@example.com",
        rating: 4,
        comment: "Good service overall, but the waiting time could be improved.",
        date: new Date("2023-05-10").toLocaleDateString('en-US', { 
          year: 'numeric', 
          month: 'short', 
          day: 'numeric' 
        }),
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
      date: new Date().toLocaleDateString('en-US', { 
        year: 'numeric', 
        month: 'short', 
        day: 'numeric' 
      }),
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
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-50">
        <div className="animate-pulse text-blue-600">Loading...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-gray-50">
      <Head>
        <title>Patient Feedback | Hospital Name</title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=5.0"
        />
      </Head>

      <main className="container mx-auto px-4 py-8 max-w-4xl">
        {/* Header */}
        <header className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-blue-800 mb-3">
            Patient Feedback
          </h1>
          <p className="text-lg text-blue-600">
            Your experience helps us improve our services
          </p>
        </header>

        {/* Feedback Form - Top Section */}
        <section className="mb-12">
          <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-blue-100">
            <h2 className="text-2xl font-semibold text-blue-700 mb-6">
              Share Your Feedback
            </h2>

            {submitted && (
              <div className="bg-blue-100 border-l-4 border-blue-500 text-blue-700 p-4 rounded mb-6">
                <div className="flex items-center">
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Thank you for your feedback! We appreciate your comments.</span>
                </div>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="form-group">
                  <label htmlFor="name" className="block text-gray-700 mb-2 font-medium">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-blue-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    placeholder="Enter your name"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email" className="block text-gray-700 mb-2 font-medium">
                    Email (optional)
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-blue-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div className="form-group">
                <label className="block text-gray-700 mb-2 font-medium">
                  Service Quality *
                </label>
                <div className="flex items-center space-x-4">
                  <div className="rating flex space-x-1">
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
                          className={`text-3xl ${
                            formData.rating >= value
                              ? "text-yellow-400"
                              : "text-gray-300"
                          } hover:text-yellow-500 transition-colors`}
                        >
                          ★
                        </span>
                      </label>
                    ))}
                  </div>
                  <span className="text-gray-600 text-sm">
                    {formData.rating === 5 && "Excellent"}
                    {formData.rating === 4 && "Good"}
                    {formData.rating === 3 && "Average"}
                    {formData.rating === 2 && "Poor"}
                    {formData.rating === 1 && "Very Poor"}
                  </span>
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="comment" className="block text-gray-700 mb-2 font-medium">
                  Comments (optional)
                </label>
                <textarea
                  id="comment"
                  name="comment"
                  rows={4}
                  value={formData.comment}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-blue-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  placeholder="Share your experience..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-lg transition-all duration-300 transform hover:scale-[1.01] shadow-md hover:shadow-lg flex items-center justify-center"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                </svg>
                Submit Feedback
              </button>
            </form>
          </div>
        </section>

        {/* Feedback Table - Bottom Section */}
        <section>
          <div className="bg-white p-6 rounded-xl shadow-lg border border-blue-100">
            <h2 className="text-2xl font-semibold text-blue-700 mb-6">
              Patient Feedback Records
            </h2>

            {feedbacks.length === 0 ? (
              <div className="text-center py-12">
                <svg className="w-16 h-16 mx-auto text-blue-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                </svg>
                <p className="mt-4 text-blue-500 text-lg">
                  No feedback received yet.
                </p>
                <p className="text-gray-500">Be the first to share your experience!</p>
              </div>
            ) : (
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-blue-50">
                    <tr>
                      <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-blue-700 uppercase tracking-wider">
                        Patient
                      </th>
                      <th scope="col" className="px-4 py-3 text-center text-xs font-medium text-blue-700 uppercase tracking-wider">
                        Rating
                      </th>
                      <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-blue-700 uppercase tracking-wider">
                        Date
                      </th>
                      <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-blue-700 uppercase tracking-wider">
                        Comments
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {feedbacks.map((feedback) => (
                      <tr
                        key={feedback.id}
                        className="hover:bg-blue-50 transition-colors"
                      >
                        <td className="px-4 py-4 whitespace-nowrap">
                          <div className="flex items-center">
                            <div className="flex-shrink-0 h-10 w-10 bg-blue-100 rounded-full flex items-center justify-center">
                              <span className="text-blue-600 font-medium">
                                {feedback.name.charAt(0).toUpperCase()}
                              </span>
                            </div>
                            <div className="ml-4">
                              <div className="text-sm font-medium text-gray-900">
                                {feedback.name}
                              </div>
                              <div className="text-sm text-gray-500">
                                {feedback.email || "No email"}
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="px-4 py-4 whitespace-nowrap">
                          <div className="flex justify-center">
                            {renderStars(feedback.rating)}
                          </div>
                        </td>
                        <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500">
                          {feedback.date}
                        </td>
                        <td className="px-4 py-4 text-sm text-gray-500">
                          {feedback.comment || "-"}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        </section>
      </main>

   
    </div>
  );
};

export default PatientFeedback;