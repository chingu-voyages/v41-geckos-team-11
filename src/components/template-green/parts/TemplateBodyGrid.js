import { Fragment } from "react";
import { useSelector } from "react-redux";

const TemplateBodyGrid = () => {
  const {
    company,
    company2,
    endSchoolDate1,
    endWorkDate1,
    endWorkDate2,
    jobTitle1,
    jobTitle2,
    skills,
    education,
    startSchoolDate1,
    startWorkDate1,
    startWorkDate2,
    workDescription1,
    workDescription2
  } = useSelector(state => state.resume.resumeData);

  console.log(skills, 'here')
  const modifyDate = (date) => {
    const newArr = date.split("-");
    [newArr[0], newArr[1]] = [newArr[1], newArr[0]];
    return newArr.join("/");
  }

  return (
    <Fragment>
      <div className="template-body-grid">
        <div className="template-body-grid__side">
          <h3>Experience</h3>
        </div>

        <div className="template-body-grid__main">
          <h3>{jobTitle1}</h3>
          <p>{company}</p>
          <p>
            {startWorkDate1} to {endWorkDate1}
          </p>
          <p>{workDescription1}</p>
        </div>
      </div>
      {company2.length > 0 ? (
        <div className="template-body-grid">
          <div className="template-body-grid__side"></div>
          <div className="template-body-grid__main">
            <h3>{jobTitle2}</h3>
            <p>{company2}</p>
            <p>
            {modifyDate(startWorkDate2)} - {modifyDate(endWorkDate2)}
            </p>
            <p>{workDescription2}</p>
          </div>
        </div>
      ) : (
        ""
      )}
      {education &&
        education.map((el, i) => (
          <div className="template-body-grid">
            <div className="template-body-grid__side">
              <h3>{i === 0 ? "Education" : null}</h3>
            </div>
            <div className="template-body-grid__main">
              <h3>{el.university}</h3>
              <p>{el.course}</p>
              <p>{el.degree}</p>
            </div>
          </div>
        ))}
      <div className="template-body-grid">
        <div className="template-body-grid__side">
          <h3>Skills</h3>
        </div>
        <div className="template-body-grid__main">
          {skills && skills.map(skill => <p>{skill.text}</p>)}
        </div>
      </div>
      <div className="template-body-grid">
        <div className="template-body-grid__side">
          <h3>References</h3>
        </div>
        <div className="template-body-grid__main">
          <h3>Available upon request</h3>
        </div>
      </div>
    </Fragment>
  );
};
export default TemplateBodyGrid;
