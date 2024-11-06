import { useState } from 'react';
import { useForm, ValidationError } from '@formspree/react';
import 'animate.css'; // Import animate.css

import Footer from '../components/Footer';

const ContactForm = () => {
  const [state, handleSubmit] = useForm("mkndyoow");
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [showThankYouMessage, setShowThankYouMessage] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const resetForm = () => {
    setFormData({ name: '', email: '', message: '' });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    await handleSubmit(e);

    if (state.succeeded) {
      resetForm();
      setShowThankYouMessage(true);
      setTimeout(() => {
        setShowThankYouMessage(false);
      }, 1500);
    }
  };

  return (
    <form
      onSubmit={onSubmit}
      className="md:w-[50%] max-w-[500px] mx-auto p-5 bg-white shadow-md rounded-lg"
    >
      <h1 className="text-2xl font-semibold text-center mb-4">Contact Form</h1>

      <div className="mb-4">
        <label htmlFor="name" className="block text-gray-700">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Enter your name"
          required
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200 focus:border-blue-400"
        />
        <ValidationError prefix="Name" field="name" errors={state.errors} />
      </div>

      <div className="mb-4">
        <label htmlFor="email" className="block text-gray-700">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Enter your email"
          required
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200 focus:border-blue-400"
        />
        <ValidationError prefix="Email" field="email" errors={state.errors} />
      </div>

      <div className="mb-4">
        <label htmlFor="message" className="block text-gray-700">Message:</label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Enter your message"
          required
          rows={4}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200 focus:border-blue-400"
        />
        <ValidationError prefix="Message" field="message" errors={state.errors} />
      </div>

      <button
        type="submit"
        disabled={state.submitting}
        className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 disabled:bg-gray-300 disabled:cursor-not-allowed"
      >
        Submit
      </button>

      {showThankYouMessage && (
        <p className="mt-4 text-green-600 animate__hinge">Thanks for your message!</p>
      )}
    </form>
  );
};

const Contact = () => {
  return (
    <div className="flex flex-col justify-between h-screen">
      <div className="flex-grow flex justify-center items-center px-4">
        {/* Form will remain centered with max width */}
        <div className="w-full">
          <ContactForm />
        </div>
      </div>
      {/* Footer added here */}
      <Footer />
    </div>
  );
};

export default Contact;
