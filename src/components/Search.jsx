import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useMediaQuery } from 'react-responsive';
import categories from './Categories.json'; // Adjust the path accordingly
import logo from '../assets/logo.png';

function Search({ onTagSelect }) {
    const tags = categories;

    const [activeIndex, setActiveIndex] = useState(0);
    const [shuffledTags, setShuffledTags] = useState([]);
    const [selectedTag, setSelectedTag] = useState(tags[0].name);

    // Detect mobile view
    const isMobile = useMediaQuery({ maxWidth: 768 });
    const tagsToDisplay = isMobile ? 4 : tags.length;

    const shuffleArray = (array) => {
        return array.sort(() => Math.random() - 0.5);
    };

    useEffect(() => {
        const remainingTags = tags.slice(1);
        const shuffled = shuffleArray(remainingTags);
        setShuffledTags([tags[0], ...shuffled]);
    }, [tags]);

    const handleTagClick = (index, tagName) => {
        setActiveIndex(index);
        setSelectedTag(tagName);
        onTagSelect(tagName);
    };

    const handleNavigation = (path) => {
        navigate(path);
    };

    return (
        <div className="flex flex-col md:grid md:grid-cols-3 items-center mt-3 px-4 md:px-10 space-y-3 md:space-y-0">
            {/* Logo Section */}
            <div className="flex items-center justify-start w-full md:w-auto">
                <a className='hover:cursor-pointer' onClick={() => handleNavigation('/')}>
                    <img src={logo} alt="Logo" className="w-8 h-8 md:w-10 md:h-10" style={{ zIndex: 50 }} />
                </a>
            </div>

            {/* Tags Section */}
            <div className="flex justify-center w-full">
                <div className={`tag-container flex gap-2 md:gap-4 text-center ${isMobile ? 'overflow-x-scroll' : ''}`}>
                    {shuffledTags.slice(0, tagsToDisplay).map((item, index) => (
                        <button
                            key={item.id}
                            onClick={() => handleTagClick(index, item.name)}
                            className={`py-1 px-3 rounded-full cursor-pointer whitespace-nowrap ${
                                index === activeIndex || item.name === selectedTag
                                    ? 'bg-gray-500 text-white'
                                    : 'bg-gray-200 text-gray-700'
                            } hover:bg-gray-300`}
                        >
                            {item.name}
                        </button>
                    ))}
                </div>
            </div>

            {/* Right Grid (Optional for Future Content) */}
            <div className="hidden md:block">
                {/* Add any right-aligned content here if desired */}
            </div>
        </div>
    );
}

Search.propTypes = {
    onTagSelect: PropTypes.func.isRequired,
};

export default Search;
