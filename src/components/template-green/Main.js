import { Fragment } from "react";
import TemplateHeaderApart from "./parts/TemplateHeaderApart";
import TemplateBodyGrid from "./parts/TemplateBodyGrid";
import { useSelector } from "react-redux";
import React from "react";
import { PDFExport, savePDF } from "@progress/kendo-react-pdf";
import TemplateFooter from "../../components/TemplateFooter";

const Main = () => {
  const { bio, firstName, lastName } = useSelector(state => state.resume.resumeData);
  const pdfExportComponent = React.useRef(null);
  const exportPDFWithMethod = () => {
    if (pdfExportComponent.current) {
      pdfExportComponent.current.save();
    }
  };

  return (
    <Fragment>
      <PDFExport
        ref={pdfExportComponent}
        paperSize="auto"
        fileName={`CV ${firstName} ${lastName}`}
        author={`${firstName} ${lastName}`}
      >
        <div className="template-green">
          <TemplateHeaderApart />
          <p className="mar-1">{bio}</p>
          <TemplateBodyGrid />
        </div>
      </PDFExport>
      <TemplateFooter exportPDFWithMethod={exportPDFWithMethod}/>
    </Fragment>
  );
};

export default Main;
