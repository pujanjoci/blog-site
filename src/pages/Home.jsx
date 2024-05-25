import React, { useState } from 'react';
import Search from '../components/Search';
import IntroPost from '../components/IntroPost';
import Blogs from '../components/Blogs';

function Home() {
    const [selectedTag, setSelectedTag] = useState('All');
    const [mainBlogId, setMainBlogId] = useState(null);

    const handleTagSelect = (tagName) => {
        setSelectedTag(tagName);
        console.log('Selected Tag:', tagName);
    };

    const handleMainBlogId = (blogId) => {
        setMainBlogId(blogId);
    };

    return (
        <div>
            <Search onTagSelect={handleTagSelect} />
            <IntroPost selectedTag={selectedTag} onMainBlogId={handleMainBlogId} />
            <Blogs selectedTag={selectedTag} excludeBlogId={mainBlogId} />
        </div>
    );
}

export default Home;
