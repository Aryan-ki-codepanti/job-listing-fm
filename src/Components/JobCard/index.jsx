import React from "react";
import "./JobCard.css";

/*

{
    "id": 1,
    "company": "Photosnap",
    "logo": "./images/photosnap.svg",
    "new": true,
    "featured": true,
    "position": "Senior Frontend Developer",
    "role": "Frontend",
    "level": "Senior",
    "postedAt": "1d ago",
    "contract": "Full Time",
    "location": "USA Only",
    "languages": ["HTML", "CSS", "JavaScript"],
    "tools": []
  }
*/

const JobCard = ({
    job: {
        company,
        logo,
        featured,
        position,
        role,
        level,
        postedAt,
        contract,
        location,
        languages,
        tools,
        ...new_
    }
}) => {
    // console.log(job)
    new_ = new_.new;
    const job_tags = [role, level, ...languages, ...tools];
    return (
        <div className="JobCard">
            <div className="logo">
                <img src={logo.substring(1)} alt="company-logo" />
            </div>
            <div className="job-info">
                <div className="top">
                    <p>{company}</p>
                    {new_ && <span>New!</span>}
                    {featured && <span>Featured</span>}
                </div>
                <div className="mid">
                    <p>{position}</p>
                </div>
                <div className="bottom">
                    <span>{postedAt}</span>
                    <div className="dot"></div>
                    <span>{contract}</span>
                    <div className="dot"></div>
                    <span>{location}</span>
                </div>
            </div>
            <div className="job-tags">
                {job_tags.map((tag, i) => (
                    <span key={i}>{tag}</span>
                ))}
            </div>
        </div>
    );
};

export default JobCard;
