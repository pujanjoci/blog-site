import { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import 'tailwindcss/tailwind.css';
import { FaQuoteLeft, FaQuoteRight } from 'react-icons/fa';

import data from '../components/Blog.json';
import Related from '../components/Related_Contents';
import Footer from '../components/Footer';

import blog101 from '../assets/blog-101.jpg';
import blog102 from '../assets/blog-102.jpg';
import blog103 from '../assets/blog-103.jpg';
import blog104 from '../assets/blog-104.jpg';
import blog105 from '../assets/blog-105.jpg';
import blog106 from '../assets/blog-106.jpg';
import blog107 from '../assets/blog-107.jpg';
import blog108 from '../assets/blog-108.jpg';
import blog109 from '../assets/blog-109.jpg';

import authorImage from '../assets/Pujan Joshi.jpg';
import logo from '../assets/logo.png';

const blogImages = {
  '101': blog101,
  '102': blog102,
  '103': blog103,
  '104': blog104,
  '105': blog105,
  '106': blog106,
  '107': blog107,
  '108': blog108,
  '109': blog109,
};

const Blog = () => {
  const { blogId } = useParams();
  const navigate = useNavigate(); // Hook for navigation

  const blogPost = data.blogs.find((blog) => blog['blog-id'] === blogId);

  const transformDescription = (description) => {
    description = description.replace(/\*i\*(.*?)\*i\*/g, '<em>$1</em>');
    description = description.replace(/\*\*\*(.*?)\*\*\*/g, '<strong>$1</strong>');
    description = description.replace(/\*u\*(.*?)\*u\*/g, '<u>$1</u>');
    description = description.replace(/\*c\*(.*?)\*c\*/g, '<div style="text-align: center;">$1</div>');
    return description;
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Define handleNavigation to navigate to the homepage
  const handleNavigation = (path) => {
    navigate(path);
  };

  if (!blogPost) {
    return <p className="text-red-500 text-center mt-8">Blog post not found. Please go to home and check the blogs</p>;
  }

  return (
    <div>
      <div className="flex items-center justify-start mt-4 ml-6 pb-4">
        <a className='hover:cursor-pointer' onClick={() => handleNavigation('/')}>
          <img src={logo} alt="Logo" className="w-8 h-8" style={{ zIndex: 50 }} />
        </a>
      </div>

      <div className="blog-container max-w-7xl mb-8 mx-auto pb-4 px-6 bg-white shadow-lg rounded-sm">
        <h2 className="text-4xl font-bold mb-4 text-gray-900 text-start">{blogPost.title}</h2>
        <div className="flex items-center mb-6">
          <img
            src={authorImage}
            alt={blogPost.author}
            className="rounded-full w-10 h-10 mr-2"
          />
          <p className="text-gray-600">
            By <span className="font-semibold text-gray-800">{blogPost.author}</span> - {new Date(blogPost.date).toLocaleDateString()}
          </p>
        </div>

        <div className="text-center mb-8">
          <img
            className="mx-auto w-[70%] h-auto shadow-md"
            src={blogImages[blogPost['blog-id']]}
            alt={blogPost.title}
          />
          {blogPost['sub-title'] && (
            <div>
              <p className="hidden md:flex mt-8 text-gray-600 text-xl font-semibold italic justify-center items-center">
                <FaQuoteLeft className="text-gray-400" />
                <span className="mx-4">{blogPost['sub-title']}</span>
                <FaQuoteRight className="text-gray-400" />
              </p>

              <p className="flex md:hidden mt-8 text-gray-600 text-xl font-semibold italic justify-center items-center">
                "{blogPost['sub-title']}"
              </p>
            </div>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-[80%_20%] gap-8 md:gap-4">
          <div>
            <p
              className="md:text-lg text-xl text-gray-900 mb-8 leading-relaxed"
              style={{ whiteSpace: 'pre-wrap' }}
              dangerouslySetInnerHTML={{ __html: transformDescription(blogPost.description) }}
            />
            <div className="text-md text-gray-800 leading-relaxed space-y-4">
              {/* Render the rest of your blog post content */}
            </div>
          </div>
          <Related />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Blog;
