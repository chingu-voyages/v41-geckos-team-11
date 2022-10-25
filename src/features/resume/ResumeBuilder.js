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
          <label htmlFor="firstName">First Name</label>
          <input
            onChange={e => dispatch(changeFirstName(e.target.value))}
            id="firstName"
            name="firstName"
            value={resumeData.firstName}
          />
          <label htmlFor="lastName">Last Name</label>
          <input
            onChange={e => dispatch(changeLastName(e.target.value))}
            id="lastName"
            name="lastName"
            value={resumeData.lastName}
          />
          <label htmlFor="phone">Phone</label>
          <input
            onChange={e => dispatch(changePhone(e.target.value))}
            id="phone"
            name="phone"
            value={resumeData.phone}
          />
          <label htmlFor="website">Job title</label>
          <input
            onChange={e => dispatch(changeTitle(e.target.value))}
            id="title"
            name="title"
            value={resumeData.title}
          />
          <label htmlFor="location">Location</label>
          <input
            onChange={e => dispatch(changeLocation(e.target.value))}
            id="location"
            name="location"
            value={resumeData.location}
          />
		  <label htmlFor="linkedin">Email</label>
          <input
            onChange={e => dispatch(changeEmail(e.target.value))}
            id="email"
            name="email"
            value={resumeData.email}
          />
          <label htmlFor="linkedin">Linkedin</label>
          <input
            onChange={e => dispatch(changeLinkedin(e.target.value))}
            id="linkedin"
            name="linkedin"
            value={resumeData.linkedin}
          />

          <label htmlFor="website">Website</label>
          <input
            onChange={e => dispatch(changeWeb(e.target.value))}
            id="web"
            name="web"
            value={resumeData.web}
          />
        </div>

        {/* Education */}
        <div>
          <label htmlFor="university">University</label>
          <input
            onChange={handleEducationChange}
            id="university"
            name="university"
          />
          <label htmlFor="degree">Degree</label>
          <input onChange={handleEducationChange} id="degree" name="degree" />
          <label htmlFor="course">Course</label>
          <input onChange={handleEducationChange} id="course" name="course" />
          <textarea
            onChange={e => dispatch(changeBio(e.target.value))}
            width="200"
            height="200"
          />
        </div>
      </form>
      <button onClick={nextPage}>next</button>
    </div>
  );
};

export default ResumeBuilder;
