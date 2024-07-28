import { useState, useCallback } from 'react';
import Search from '../components/Search';
import IntroPost from '../components/IntroPost';
import Blogs from '../components/Blogs';

function Home() {
    const [selectedTag, setSelectedTag] = useState('All');
    const [mainBlogIds, setMainBlogIds] = useState([]);

    const handleTagSelect = useCallback((tagName) => {
        setSelectedTag(tagName);
        console.log('Selected Tag:', tagName);
    }, []);

    const handleMainBlogIds = useCallback((blogIds) => {
        setMainBlogIds(blogIds);
    }, []);

    return (
        <div>
            <Search onTagSelect={handleTagSelect} />
            <IntroPost selectedTag={selectedTag} onMainBlogIds={handleMainBlogIds} />
            <Blogs selectedTag={selectedTag} excludeBlogIds={mainBlogIds} />
        </div>
    );
}

export default Home;
