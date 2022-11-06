import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from 'react';
import { library } from "@fortawesome/fontawesome-svg-core";
import { PDFExport, savePDF } from "@progress/kendo-react-pdf";
import Main from "./template_three/Main";
import Side from "./template_three/Side";

import {
    faPhone,
    faGraduationCap,
    faBriefcase
} from "@fortawesome/free-solid-svg-icons";

library.add(faPhone, faGraduationCap, faBriefcase);

const TemplateThree = ({ resumeData }) => {
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
        startSchoolDate1,
        endSchoolDate1,
        skills,
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
    console.log(skills);

    const modifyDate = (date) => {
        const newArr = date.split("-");
        [newArr[0], newArr[1]] = [newArr[1], newArr[0]];
        return newArr.join("/");
    }

    return (
        <div className="third-template">
            <PDFExport
                ref={pdfExportComponent}
                paperSize="auto"
                margin={0}
                fileName={`CV ${firstName} ${lastName}`}
                author={`${firstName} ${lastName}`}
            >
                {/* <div className="third-template__wrapper">
                    <h5 className="third-template__name">
                        {firstName} {lastName} CV
                    </h5>
                    <h5 className="third-template__title">{title}</h5>
                    <div className="third-template__about">
                        <p className="third-template__bio">{bio}</p>
                        {skills.map(skill => (<p key={skill.id}>{skill.text}</p>))}
                    </div>
                    <div className="third-template__section">
                        <div className="third-template__basic">
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
                        <div className="third-template__edu">
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
                        <div className="third-template__work">
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
                </div> */}
                <div className="wrapper flex row justify-between">
                    <Side
                        location={location}
                        phone={phone}
                        email={email}
                        socialWeb={socialWeb}
                        linkedin={linkedin}
                        skills={skills}
                    />
                    <Main
                        firstName={firstName}
                        lastName={lastName}
                        title={title}
                        bio={bio}
                        startSchoolDate1={startSchoolDate1}
                        endSchoolDate1={endSchoolDate1}
                        education={education}
                        jobTitle1={jobTitle1}
                        workDescription1={workDescription1}
                        startWorkDate1={startWorkDate1}
                        endWorkDate1={endWorkDate1}
                        company={company}
                    />
                </div>

            </PDFExport>
            <button className="third-template__button" onClick={exportPDFWithMethod}>
                SAVE CV AS PDF
            </button>
        </div>
    );
};

export default TemplateThree;
