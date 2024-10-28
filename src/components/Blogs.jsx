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

const Blogs = ({ selectedTag = 'All', excludeBlogIds = [] }) => {
    const filteredBlogs = blogData.blogs.filter(blog => {
        const matchesTag = selectedTag === 'All' || blog.name === selectedTag;
        const isNotExcluded = !excludeBlogIds.includes(blog['blog-id']);
        return matchesTag && isNotExcluded;
    });

    return (
        <div className="box-shadow rounded-lg p-1 mx-auto w-full md:w-[90%] mt-2">
            {filteredBlogs.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 5xl:grid-cols-6 mb-10 gap-8 p-4">
                    {filteredBlogs.map(blog => (
                        <div key={blog['blog-id']} className="bg-white p-4 rounded-lg shadow-lg"> 
                            {blogImages[blog['blog-id']] && (
                                <img
                                    src={blogImages[blog['blog-id']]}
                                    alt={blog.title}
                                    className="aspect-square w-full h-[200px] rounded mb-2"
                                />
                            )}
                            <h2 className="text-xl font-semibold mb-2 text-start">{truncateTitle(blog.title, 10)}</h2>
                            <Link to={`/blog/${blog['blog-id']}`}>
                            <div className="text-blue-600 inline-block">
                                Read More...
                            </div>
                            </Link>
                        </div>
                    ))}
                </div>
            ) : (
                <p className="text-red-500 justify-center text-center mt-8">No more blogs found for the selected tag.</p>
            )}
        </div>
    );
};

Blogs.propTypes = {
    selectedTag: PropTypes.string.isRequired, 
    excludeBlogIds: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Blogs;
