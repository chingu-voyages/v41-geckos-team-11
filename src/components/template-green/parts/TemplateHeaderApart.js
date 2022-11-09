import { useSelector } from "react-redux";

const TemplateHeaderApart = () => {
    const {lastName, firstName, location, linkedin, phone, socialWebsite, email} = useSelector(state => state.resume.resumeData);
    return (
        <div className="template-header-apart">
            <div className="template-header-apart__name">
                <h1>{firstName}</h1>
                <h1 className="semi-bold">{lastName}</h1>
            </div>
            <div className="template-header-apart__personal">
                <p>{email}</p>
                <p>{phone}</p>
                <p>{location}</p>
                <p>{linkedin}</p>
                <p>{socialWebsite}</p>
            </div>
        </div>
    )
}

export default TemplateHeaderApart;