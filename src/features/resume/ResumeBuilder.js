import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import TextArea from "../../components/TextArea";
import Input from "../../components/Input";

import {
  changeBio
} from "./resumeSlice";

const ResumeBuilder = () => {
  // const [education, setEducation] = useState({
  //   id: "",
  //   university: "",
  //   degree: "",
  //   course: ""
  // });

  const navigate = useNavigate();
  const dispatch = useDispatch();

  // const handleEducationChange = e => {
  //   const name = e.target.name;
  //   const value = e.target.value;
  //   setEducation({ ...education, id: Math.random().toString(), [name]: value });
  // };

  const nextPage = () => {
    // dispatch(changeEducation({ ...education }));
    navigate("/education");
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
              <TextArea name="bio" />
              </div>
          </div>
          <div className="row flex justify-between align-center full-width">
            <div className="input-block">
              <Input text="Company" name="company" />
            </div>
            <div className="input-block">
              <Input text="Start Date" type="month" name="startWorkDate1" />
            </div>
            <div className="input-block">  
              <Input text="End Date" type="month" name="endWorkDate1" />
            </div>
            <div className="input-block">
              <TextArea name="workDescription1" />
            </div>  
            <div className="input-block">
              <Input text="Job Title" name="jobTitle1" />
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
