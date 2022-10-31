import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
// import DatePicker from "react-datepicker";
import Input from "../../components/Input";

import {
  changeEducation,
  changeBio
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
          <div className="flex row align-center justify-between full-width">
            <div className="input-block">
              <Input text="First name" name="firstName" />
            </div>
            <div className="input-block">
              <Input text="Last name" name="lastName" />
            </div>
          </div>
          <div className="flex row align-center justify-between full-width">
            <div className="input-block">
              <Input text="Phone" name="phone" />
            </div>
            <div className="input-block">
              <Input text="Email" name="email" />
            </div>
          </div>
          <div className="flex row align-center justify-between full-width">
            <div className="input-block">
              <Input text="Job Title" name="title" />
            </div>
            <div className="input-block">
              <Input text="Location" name="location" />
            </div>
          </div>
          <div className="flex row align-center justify-between full-width">
            <div className="input-block">
              <Input text="Linkedin" name="linkedin" />
            </div>
            <div className="input-block">
              <Input text="Website" name="website" />
            </div>
          </div>
          <div className="row flex justify-between align-center full-width">
            <div className="input-block bio">
              <label>Bio</label>
              <textarea
                onChange={e => dispatch(changeBio(e.target.value))}
                width="200"
                height="200"
              /></div>
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
