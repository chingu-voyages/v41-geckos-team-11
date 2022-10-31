import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faPhone,
  faGraduationCap,
  faBriefcase
} from "@fortawesome/free-solid-svg-icons";

library.add(faPhone, faGraduationCap, faBriefcase);

const TemplateTwo = ({ resumeData }) => {
  const {
    firstName,
    lastName,
    email,
    education,
    bio,
    linkedin,
    location,
    title,
    phone,
    socialWeb, 
    company, 
    startWorkDate1, 
    endWorkDate1, 
    workDescription1,
    jobTitle1
  } = resumeData;

  const modifyDate = (date) => {
    const newArr = date.split("-");
    [newArr[0], newArr[1]] = [newArr[1], newArr[0]];
    return newArr.join("/");
  }

  return (
    <div className="second-template">
      <h5 className="second-template__name">
        {firstName} {lastName} CV
      </h5>
      <h5 className="second-template__title">{title}</h5>
      <div className="second-template__about">
        <p className="second-template__bio">{bio}</p>
      </div>
      <div className="second-template__section">
        <div className="second-template__basic">
            <h1>
              <FontAwesomeIcon icon={("fa-regular", "phone")} />
            </h1>
          <div>
            <h1 className="header">Contact</h1>
            <p className="header__text">{phone}</p>
            <p className="header__text">{location}</p>
            <p className="header__text">{email}</p>
            <p className="header__text">{socialWeb}</p>
            <p className="header__text">{linkedin}</p>
          </div>
        </div>
        <div className="second-template__edu">
          <h1>
            <FontAwesomeIcon icon={("fa-light", "graduation-cap")} />
          </h1>
          <div>
            <h1 className="header">Education</h1>
            {education &&
              education.map(el => (
                <div>
                  <p className="header__text">{el.university}</p>
                  <p className="header__text">Degree: {el.degree}</p>
                  <p className="header__text">Course: {el.course}</p>
                </div>
              ))}
          </div>
        </div>
        <div className="second-template__work">
          <h1>
            <FontAwesomeIcon icon={("fa-light", "briefcase")} />
          </h1>
          <div>
            <h1 className="header">Work Experience</h1>
            <div>
              <p className="header__text">{company}</p>
              <p className="header__text">{modifyDate(startWorkDate1)} - {modifyDate(endWorkDate1)}</p>
              <p className="header__text">{jobTitle1}</p>
              <p className="header__text">{workDescription1}</p>
            </div>      
          </div>
        </div>
      </div>
    </div>
  );
};

export default TemplateTwo;
