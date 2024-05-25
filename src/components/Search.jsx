import React, { useState, useEffect } from 'react';
import { useMediaQuery } from 'react-responsive';

function Search({ onTagSelect }) {
    const tags = [
        { id: 1, name: "All" },
        { id: 2, name: "React" },
        { id: 3, name: "AI" },
        { id: 4, name: "Devices" },
        { id: 5, name: "Day-to-Day" },
        { id: 6, name: "HTML" }
    ];

    const [activeIndex, setActiveIndex] = useState(0);
    const [shuffledTags, setShuffledTags] = useState([]);
    const [selectedTag, setSelectedTag] = useState(tags[0].name); // Initialize the selected tag

    const isMobile = useMediaQuery({ maxWidth: 768 });

    const tagsToDisplay = isMobile ? 4 : tags.length;

    const shuffleArray = (array) => {
        return array.sort(() => Math.random() - 0.5);
    };

    useEffect(() => {
        const remainingTags = tags.slice(1);
        const shuffled = shuffleArray(remainingTags);
        setShuffledTags([tags[0], ...shuffled]);
    }, []);

    const handleTagClick = (index, tagName) => {
        setActiveIndex(index);
        setSelectedTag(tagName); // Update the selected tag
        onTagSelect(tagName);
    };

    return (
        <div className="tag-container flex gap-2 md:gap-4 ml-4 md:ml-8 mt-1 md:mt-6">
            {shuffledTags.slice(0, tagsToDisplay).map((item, index) => (
                <button
                    key={item.id}
                    onClick={() => handleTagClick(index, item.name)}
                    className={`py-1 px-3 rounded-full cursor-pointer ${
                        index === activeIndex || item.name === selectedTag
                            ? 'bg-gray-500 text-white'
                            : 'bg-gray-200 text-gray-700'
                    } hover:bg-gray-300`}
                >
                    {item.name}
                </button>
            ))}
        </div>
    );
}

export default Search;
