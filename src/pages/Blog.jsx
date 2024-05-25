import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import 'tailwindcss/tailwind.css';
import data from '../components/Blog.json'; // Import your JSON data
import blog101 from '../assets/blog-101.jpg'; // Import blog images statically
import blog102 from '../assets/blog-102.jpg';
import blog103 from '../assets/blog-103.jpg';
import blog104 from '../assets/blog-104.jpg';
import blog105 from '../assets/blog-105.jpg';
import blog106 from '../assets/blog-106.jpg';
import blog107 from '../assets/blog-107.jpg';
// Import other blog images similarly for all blog posts

const blogImages = {
  '101': blog101,
  '102': blog102,
  '103': blog103,
  '104': blog104,
  '105': blog105,
  '106': blog106,
  '107': blog107,
  // Add other blog images here similarly
};

const Blog = () => {
  const { blogId } = useParams();

  // Access the "blogs" property of your data object
  const blogPost = data.blogs.find((blog) => blog['blog-id'] === blogId); // Use "blog-id" property to match blogId

  // If the blog post is not found, return an error message
  if (!blogPost) return <p className="text-gray-500">Blog post not found.</p>;

  // Function to transform the blog description using regular expressions
  const transformDescription = (description) => {
    description = description.replace(/\*i\*(.*?)\*i\*/g, '<em>$1</em>');
    description = description.replace(/\*\*\*(.*?)\*\*\*/g, '<strong>$1</strong>');
    description = description.replace(/\*u\*(.*?)\*u\*/g, '<u>$1</u>');
    description = description.replace(/\*c\*(.*?)\*c\*/g, '<div style="text-align: center;">$1</div>');
    return description;
  };

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top when component mounts
  }, []); // Empty dependency array ensures this effect runs only once

  return (
    <div className="blog-container max-w-3xl mx-auto py-10 px-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-4xl font-bold mb-8 text-gray-800 text-center">{blogPost.title}</h2>
      <p className="text-gray-500 mb-5">By {blogPost.author} on {new Date(blogPost.date).toLocaleDateString()}</p>
      <img
        className="w-full h-auto mb-6 rounded-lg shadow-md"
        src={blogImages[blogPost['blog-id']]}
        alt={blogPost.title}
      />
      <p
        className="text-xl text-gray-700 mb-8 leading-relaxed"
        style={{ whiteSpace: "pre-wrap" }}
        dangerouslySetInnerHTML={{ __html: transformDescription(blogPost.description) }}
      />
      <div className="text-lg text-gray-800 leading-relaxed space-y-4">
        {/* Render the rest of your blog post content */}
      </div>
    </div>
  );
};

export default Blog;
