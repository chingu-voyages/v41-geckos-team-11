import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from 'react';
import { library } from "@fortawesome/fontawesome-svg-core";
import { PDFExport, savePDF } from "@progress/kendo-react-pdf";
import Bio from "./template-three/Bio";
import Main from "./template-three/Main";
import Side from "./template-three/Side";
import TemplateFooter from "./TemplateFooter"

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
                <div className="wrapper">
                    <Bio
                        firstName={firstName}
                        lastName={lastName}
                        title={title}
                        bio={bio}
                    />
                    <div className="flex row justify-between">
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
                </div>

            </PDFExport>
            <TemplateFooter exportPDFWithMethod={exportPDFWithMethod} />
        </div>
    );
};

export default TemplateThree;
