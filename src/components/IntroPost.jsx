import React from 'react';
import { Link } from 'react-router-dom';
import blogData from './Blog.json';
import blog101 from '../assets/blog-101.jpg';
import blog102 from '../assets/blog-102.jpg';
import blog103 from '../assets/blog-103.jpg';
import blog104 from '../assets/blog-104.jpg';
import blog105 from '../assets/blog-105.jpg';
import blog106 from '../assets/blog-106.jpg';
import blog107 from '../assets/blog-107.jpg';

const blogImages = {
    '101': blog101,
    '102': blog102,
    '103': blog103,
    '104': blog104,
    '105': blog105,
    '106': blog106,
    '107': blog107,
};

const truncateDescription = (description, wordLimit) => {
    const words = description.split(' ');
    return words.length > wordLimit ? words.slice(0, wordLimit).join(' ') + '...' : description;
};

const IntroPost = ({ selectedTag, onMainBlogId }) => {
    const filteredBlogs = selectedTag === 'All' ? blogData.blogs : blogData.blogs.filter(b => b.name === selectedTag);
    
    const mainBlogPost = filteredBlogs.sort((a, b) => parseInt(a['blog-id']) - parseInt(b['blog-id']))[0];

    if (mainBlogPost) {
        onMainBlogId(mainBlogPost['blog-id']);
    }

    if (!mainBlogPost) {
        return <p className='text-center mt-10'>Topic coming soon.</p>;
    }

    return (
        <div className="flex justify-center items-center">
            <div className="bg-white p-4 rounded shadow-lg w-[90%] md:w-[60%] mt-4" style={{ boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)' }}>
                <h2 className="text-xl font-semibold mb-2 text-center">{mainBlogPost.title}</h2>
                <img
                    src={blogImages[mainBlogPost['blog-id']]}
                    alt={mainBlogPost.title}
                    className="aspect-square w-full h-[200px] md:h-[450px] rounded mt-4 mb-4"
                />
                <p>{truncateDescription(mainBlogPost.description, 55)}</p>
                {/* Modify the Link component to navigate to the individual blog post */}
                <Link to={`/blog/${mainBlogPost['blog-id']}`} className="text-blue-600 mt-2 inline-block">
                    Read More
                </Link>
            </div>
        </div>
    );
};

export default IntroPost;
