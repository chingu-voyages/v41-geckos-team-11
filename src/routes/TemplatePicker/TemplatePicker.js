import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { pickTemplate, changeProgressBar } from "../../reducers/resumeSlice";
import "../../App.css";
import { useState } from "react";

const TemplatePicker = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const passedName = useSelector(state => state.resume.name);
  const [pickedTemplate, setTemplate] =  useState("")

  const nextPage = () => {
    navigate("/final");
    dispatch(changeProgressBar(100));
  };
  const prevPage = () => {
    navigate("/work-history");
    dispatch(changeProgressBar(60));
  };

  const selectTemplate = e => {
    dispatch(pickTemplate(e.target.value));
    setTemplate(e.target.value)
  };

  return (
    <section className="template">
      <h3>Hey, {passedName} pick a template</h3>
      <form className="template__form">
        <input
          onChange={selectTemplate}
          type="radio"
          id="first-template"
          name="templatepick"
          value="first-template"
        />
        <label htmlFor="first-template" className={ `${ pickedTemplate === 'first-template' ? 'active' : null} example1`}></label>
        <input
          onChange={selectTemplate}
          type="radio"
          id="third-template"
          name="templatepick"
          value="third-template"
        />
        <label htmlFor="third-template" className={ `${ pickedTemplate === 'third-template' ? 'active' : null} example3`}></label>
        <input
          onChange={selectTemplate}
          type="radio"
          id="fourth-template"
          name="templatepick"
          value="fourth-template"
        />
        <label htmlFor="fourth-template" className={ `${ pickedTemplate === 'fourth-template' ? 'active' : null} example4`}></label>
      </form>
      <div className="buttons flex justify-between align-center">
        <button onClick={prevPage}>Back</button>
        <button className="next" onClick={nextPage}>
          Next: View Resume
        </button>
      </div>
    </section>
  );
};

export default TemplatePicker;
