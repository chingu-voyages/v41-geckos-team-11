import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  changeFirstName,
  changeLastName,
  changeEducation,
  changeBio,
  changeEmail,
  changeLocation,
  changeWeb,
  changeLinkedin,
  changeTitle,
  changePhone
} from "./resumeSlice";

const ResumeBuilder = () => {
  const [education, setEducation] = useState({
    id: "",
    university: "",
    degree: "",
    course: ""
  });

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const resumeData = useSelector(state => state.resume.resumeData);

  const handleEducationChange = e => {
    const name = e.target.name;
    const value = e.target.value;
    setEducation({ ...education, id: Math.random().toString(), [name]: value });
  };

  const nextPage = () => {
    dispatch(changeEducation({ ...education }));
    navigate("/template");
  };

  return (
    <div>
      <form>
        {/* Personal details */}
        <div>
          <h2>Personal Information</h2>
          <div className="content">
            <div className="row flex align-center justify-between full-width">
              <div className="input-block">
                <label htmlFor="firstName">First Name</label>
                <input
                  onChange={e => dispatch(changeFirstName(e.target.value))}
                  id="firstName"
                  name="firstName"
                  value={resumeData.firstName}
                  placeholder="e.g Martin"
                />
              </div>
              <div className="input-block">
                <label htmlFor="lastName">Last Name</label>
                <input
                  onChange={e => dispatch(changeLastName(e.target.value))}
                  id="lastName"
                  name="lastName"
                  value={resumeData.lastName}
                  placeholder="e.g Jones"
                />
              </div>
            </div>
            <div className="row flex align-center justify-between full-width">
              <div className="input-block">
                <label htmlFor="phone">Phone</label>
                <input
                  onChange={e => dispatch(changePhone(e.target.value))}
                  id="phone"
                  name="phone"
                  value={resumeData.phone}
                  placeholder="e.g. +27 82 978 5313"
                />
              </div>
              <div className="input-block">
                <label htmlFor="location">Location</label>
                <input
                  onChange={e => dispatch(changeLocation(e.target.value))}
                  id="location"
                  name="location"
                  value={resumeData.location}
                />
              </div>
            </div>
            <div className="row flex align-center justify-between full-width">
              <div className="input-block">
                <label htmlFor="website">Job title</label>
                <input
                  onChange={e => dispatch(changeTitle(e.target.value))}
                  id="title"
                  name="title"
                  value={resumeData.title}
                  placeholder="e.g Data Scientist"
                />
              </div>
            </div>
            <div className="row flex align-center justify-between full-width">
              <div className="input-block">
                <label htmlFor="linkedin">Email</label>
                <input
                  onChange={e => dispatch(changeEmail(e.target.value))}
                  id="email"
                  name="email"
                  value={resumeData.email}
                  placeholder="e.g. address@sample.com"
                />
              </div>
              <div className="input-block">
                <label htmlFor="website">Website</label>
                <input
                  onChange={e => dispatch(changeWeb(e.target.value))}
                  id="web"
                  name="web"
                  value={resumeData.socialWeb}
                  placeholder="e.g. https://www.sitename.com"
                />
              </div>

            </div>
            <div className="row flex align-center justify-between full-width">
              <div className="input-block">
                <label htmlFor="linkedin">LinkedIn</label>
                <input
                  onChange={e => dispatch(changeLinkedin(e.target.value))}
                  id="linkedin"
                  name="linkedin"
                  value={resumeData.linkedin}
                  placeholder="e.g. https://www.linkedin.com/username"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Education */}
        <div>
          <h2>Education</h2>
          <div className="content">
            <div className="row flex align-center justify-between full-width">
              <div className="input-block">
                <label htmlFor="university">University</label>
                <input
                  onChange={handleEducationChange}
                  id="university"
                  name="university"
                />
              </div>
            </div>
            <div className="row flex align-center justify-between full-width">
              <div className="input-block">
                <label htmlFor="degree">Degree</label>
                <input onChange={handleEducationChange} id="degree" name="degree" />
              </div>
              <div className="input-block">
                <label htmlFor="course">Course</label>
                <input onChange={handleEducationChange} id="course" name="course" />
              </div>
            </div>
            <textarea
              onChange={e => dispatch(changeBio(e.target.value))}
              width="200"
              height="200"
            />
          </div>
        </div>
      </form>
      <div className="buttons flex justify-end align-center">
        <button className="next" onClick={nextPage}>Next</button>
      </div>
    </div>
  );
};

export default ResumeBuilder;
