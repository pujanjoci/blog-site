// RelatedContents.jsx
import { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import data from '../components/Blog.json'; // Import your JSON data

// Statically import blog images
import blog101 from '../assets/blog-101.jpg';
import blog102 from '../assets/blog-102.jpg';
import blog103 from '../assets/blog-103.jpg';
import blog104 from '../assets/blog-104.jpg';
import blog105 from '../assets/blog-105.jpg';
import blog106 from '../assets/blog-106.jpg';
import blog107 from '../assets/blog-107.jpg';
import blog108 from '../assets/blog-108.jpg';
import blog109 from '../assets/blog-109.jpg';

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

const RelatedContents = () => {
  const { blogId } = useParams(); // Get the blog ID from the URL
  const navigate = useNavigate(); // Replaces useHistory

  // Find the current blog based on the blogId from the URL
  const currentBlog = data.blogs.find((blog) => blog['blog-id'] === blogId);
  const currentBlogName = currentBlog?.name; // Get the tag 'name' of the current blog

  // Function to truncate title to 8 words
  const truncateTitle = (title) => {
    const words = title.split(' ');
    return words.length <= 8 ? title : words.slice(0, 8).join(' ') + '...';
  };

  // Scroll to top on component mount
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth' // Smooth scrolling effect
    });
  }, [blogId]); // Depend on blogId to run effect when it changes

  // Early return if there's no current blog or related blogs
  if (!currentBlog || !currentBlogName) {
    return <p>No related content available.</p>;
  }

  // Find related blogs by matching the name (tag) and excluding the current blog
  const relatedBlogs = data.blogs.filter(
    (blog) => blog.name === currentBlogName && blog['blog-id'] !== blogId
  );

  return (
    <div>
      <h2 className="text-center font-bold text-lg mb-4">Related Contents</h2>
      <ul className="space-y-8">
        {relatedBlogs.length === 0 ? (
          <li>No related content available.</li>
        ) : (
          relatedBlogs.map((blog) => (
            <li key={blog['blog-id']} className="text-center">
              <div
                onClick={() => {
                  navigate(`/blog/${blog['blog-id']}`);
                  window.scrollTo({
                    top: 0,
                    behavior: 'smooth' // Smooth scrolling effect
                  });
                }}
                className="block cursor-pointer"
              >
                <img
                  src={blogImages[blog['blog-id']]}
                  alt={blog.title}
                  className="w-full h-30 object-cover rounded-md mb-2"
                />
                <span className="text-blue-500 hover:underline">
                  {truncateTitle(blog.title)}
                </span>
              </div>
            </li>
          ))
        )}
      </ul>
    </div>
  );
};

export default RelatedContents;
