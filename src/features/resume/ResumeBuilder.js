import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import TextArea from "../../components/TextArea";
import Input from "../../components/Input";
import Skills from "../../components/Skills";

import {
  changeProgressBar,
  changeBio
} from "./resumeSlice";


const ResumeBuilder = () => {
  const [skills, setSkills] = useState([
  ])
  const [text, setText] = useState('')


  const setSkill = () => {
    addSkill(text)
    setText('')
  }
  // Add Skill
  const addSkill = (text) => {
    const id = Math.floor(Math.random() * 10000) + 1
    const newSkill = { id, text }
    setSkills([...skills, newSkill])
  }

  //Delete Task
  const deleteSkill = (id) => {
    setSkills(skills.filter((skill) => skill.id !== id))
  }
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const nextPage = () => {
    dispatch(changeProgressBar(40))
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
          <div className="row flex justify-center align-center full-width skill-input">
            <div className="input-block">
              <input
                type="text"
                name="skills"
                placeholder="Input Skills"
                onChange={(e) => setText(e.target.value)}
              />
            </div>
            <div className="input-block">
              <input
                type="button"
                value="Add"
                onClick={setSkill}
              />
            </div>
          </div>
          <h2>Skills</h2>
          <div className="row flex align-center full-width skills">
            {skills.length > 0 ? <Skills skills={skills} onDelete={deleteSkill} /> : 'Add a Skill'}
          </div>
        </div>

      </form>
      <div className="buttons flex justify-end align-center">
        <button className="next" onClick={nextPage}>Next: Education</button>
      </div>
    </div>
  );
};

export default ResumeBuilder;
