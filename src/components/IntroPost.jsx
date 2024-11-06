import { useEffect, useMemo } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import blogData from './Blog.json';
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

const truncateTitle = (title, wordLimit) => {
    const words = title.split(' ');
    return words.length > wordLimit ? words.slice(0, wordLimit).join(' ') + '...' : title;
};

const IntroPost = ({ selectedTag, onMainBlogIds }) => {
    const filteredBlogs = useMemo(() => {
        return selectedTag === 'All' ? blogData.blogs : blogData.blogs.filter(b => b.name === selectedTag);
    }, [selectedTag]);

    const mainBlogPosts = useMemo(() => {
        return filteredBlogs.sort((a, b) => parseInt(b['blog-id']) - parseInt(a['blog-id'])).slice(0, 3);
    }, [filteredBlogs]);

    const mainBlogIds = useMemo(() => mainBlogPosts.map(blog => blog['blog-id']), [mainBlogPosts]);

    useEffect(() => {
        onMainBlogIds(mainBlogIds);
    }, [mainBlogIds, onMainBlogIds]);

    if (mainBlogPosts.length === 0) {
        return <p className='text-center mt-10'>Topic coming soon.</p>;
    }

    return (
        <div className="flex justify-center items-center mt-2">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-2 mb-2 gap-4 md:gap-8 px-5 md:px-24">
                {mainBlogPosts.map(blog => (
                    <div key={blog['blog-id']} className="bg-white p-4 rounded shadow-lg" style={{ boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)' }}>
                        <img
                            src={blogImages[blog['blog-id']]}
                            alt={blog.title}
                            className="aspect-square w-full h-[200px] rounded mb-2"
                        />
                        <Link to={`/blog/${blog['blog-id']}`} >
                        <h2 className="text-xl font-semibold mb-2 text-start">{truncateTitle(blog.title, 8)}</h2>
                        </Link>
                        <Link to={`/blog/${blog['blog-id']}`} className="text-blue-600 inline-block">
                            Read More...
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
};

IntroPost.propTypes = {
    selectedTag: PropTypes.string.isRequired,
    onMainBlogIds: PropTypes.func.isRequired,
};

export default IntroPost;
