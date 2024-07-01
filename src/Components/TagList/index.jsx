import React, { useContext } from "react";
import "./TagList.css";
import JobContext from "../../Context/Jobs/JobContext";

const TagList = () => {
    const { tags, setTags } = useContext(JobContext);

    const handleTagRemove = (e, tagName) => {
        setTags(prev => prev.filter(tag => tag !== tagName));
    };
    return (
        <div className="container">
            {tags.length > 0 && (
                <div className="TagList">
                    {tags.map((tag, i) => (
                        <div key={i}>
                            <span className="tag">{tag}</span>
                            <div
                                className="cross"
                                onClick={e => handleTagRemove(e, tag)}
                            >
                                <img
                                    src="/images/icon-remove.svg"
                                    alt="icon-cross"
                                />
                            </div>
                        </div>
                    ))}

                    <span className="clear" onClick={e => setTags(prev => [])}>
                        Clear
                    </span>
                </div>
            )}
        </div>
    );
};

export default TagList;
