import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from 'react';
import { library } from "@fortawesome/fontawesome-svg-core";
import { PDFExport, savePDF } from "@progress/kendo-react-pdf";

import {
  faPhone,
  faGraduationCap,
  faBriefcase
} from "@fortawesome/free-solid-svg-icons";

library.add(faPhone, faGraduationCap, faBriefcase);

const TemplateTwo = ({ resumeData }) => {
  const pdfExportComponent = React.useRef(null);
  const exportPDFWithMethod = () => {
    if (pdfExportComponent.current) {
      pdfExportComponent.current.save();
    }
  };

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
        <button className="second-template__button" onClick={exportPDFWithMethod}>
        SAVE CV AS PDF
      </button>
      <PDFExport
        ref={pdfExportComponent}
        paperSize="auto"
        margin={40}
        fileName={`CV ${firstName} ${lastName}`}
        author={`${firstName} ${lastName}`}
      >
        <div className="second-template__wrapper">
          <h5 className="second-template__name">
            {firstName} {lastName} CV
          </h5>
          <h5 className="second-template__title">{title}</h5>
          <div className="second-template__about">
            <p className="second-template__bio">{bio}</p>
          </div>
          <div className="second-template__section">
            <div className="second-template__basic">
              <h3>
                <FontAwesomeIcon icon={("fa-regular", "phone")} />
              </h3>
              <div>
                <h3 className="header">Contact</h3>
                <p className="header__text">{phone}</p>
                <p className="header__text">{location}</p>
                <p className="header__text">{email}</p>
                <p className="header__text">{socialWeb}</p>
                <p className="header__text">{linkedin}</p>
              </div>
            </div>
            <div className="second-template__edu">
              <h3>
                <FontAwesomeIcon icon={("fa-light", "graduation-cap")} />
              </h3>
              <div>
                <h3 className="header">Education</h3>
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
              <h3>
                <FontAwesomeIcon icon={("fa-light", "briefcase")} />
              </h3>
              <div>
                <h3 className="header">Work Experience</h3>
                <div>
                  <p className="header__text">{company}</p>
                  <p className="header__text">
                    {modifyDate(startWorkDate1)} - {modifyDate(endWorkDate1)}
                  </p>
                  <p className="header__text">{jobTitle1}</p>
                  <p className="header__text">{workDescription1}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </PDFExport>
    </div>
  );
};

export default TemplateTwo;
