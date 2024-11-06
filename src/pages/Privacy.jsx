import React from 'react';
import { FaShieldAlt, FaEnvelope } from 'react-icons/fa';

import Footer from '../components/Footer';

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-10">
      <div className="max-w-3xl mx-auto bg-white p-8 shadow-lg rounded-lg">
        <h1 className="text-4xl font-extrabold text-center text-gray-800 mb-6">Privacy Policy</h1>

        <div className="space-y-8 text-gray-700 pb-6">
          {/* Introduction Section */}
          <section>
            <h2 className="text-2xl font-semibold flex items-center">
              <FaShieldAlt className="mr-2 text-blue-500" /> Introduction
            </h2>
            <p className="leading-relaxed">
              Welcome to my personal blog! This Privacy Policy explains how I handle any information you may share with me while using my blog. Your privacy is important, and I am committed to protecting it.
            </p>
          </section>

          {/* Information Collection Section */}
          <section>
            <h2 className="text-2xl font-semibold flex items-center">
              <FaShieldAlt className="mr-2 text-blue-500" /> Information Collection
            </h2>
            <p className="leading-relaxed">
              I do not collect personal information from visitors to this blog. You can browse and read content without having to share any personal details.
            </p>
          </section>

          {/* Cookies Section */}
          <section>
            <h2 className="text-2xl font-semibold flex items-center">
              <FaShieldAlt className="mr-2 text-blue-500" /> Cookies
            </h2>
            <p className="leading-relaxed">
              This site does not use cookies to collect personal data. If I decide to use cookies in the future for functionality or analytics, I will update this policy accordingly.
            </p>
          </section>

          {/* Third-Party Services Section */}
          <section>
            <h2 className="text-2xl font-semibold flex items-center">
              <FaShieldAlt className="mr-2 text-blue-500" /> Third-Party Services
            </h2>
            <p className="leading-relaxed">
              This blog does not share your information with third-party services. I do not use any tracking or analytics tools that would collect personal information about you.
            </p>
          </section>

          {/* Changes Section */}
          <section>
            <h2 className="text-2xl font-semibold flex items-center">
              <FaShieldAlt className="mr-2 text-blue-500" /> Changes to This Privacy Policy
            </h2>
            <p className="leading-relaxed">
              I may update this Privacy Policy from time to time. Any changes will be posted on this page, and the "effective date" at the bottom of the page will be updated accordingly.
            </p>
          </section>

          {/* Contact Information Section */}
          <section>
            <h2 className="text-2xl font-semibold flex items-center">
              <FaEnvelope className="mr-2 text-blue-500" /> Contact Information
            </h2>
            <p className="leading-relaxed">
              If you have any questions or concerns about this Privacy Policy, feel free to contact me at:
            </p>
            <p>
              Email: <a href="mailto:support@yourwebsite.com" className="text-blue-500 hover:underline">support@yourwebsite.com</a>
            </p>
          </section>

          {/* Attribution Section */}
          <section>
            <h2 className="text-2xl font-semibold flex items-center">
              <FaShieldAlt className="mr-2 text-blue-500" /> Attribution
            </h2>
            <p className="leading-relaxed">
              This blog template is open-source and can be used freely. If you choose to use this template or any part of the code in your own projects, please provide proper attribution by crediting <strong>Pujan Joshi</strong> as the original creator. A link to my GitHub repository or portfolio is appreciated but not required.
            </p>
            <p>
              You can find the repository and more information on my portfolio website: <a href="https://pujan-joshi.com.np" className="text-blue-500 hover:underline">Pujan-Joshi Website</a>
            </p>
          </section>
        </div>
      </div>

      {/* Footer Section */}
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
