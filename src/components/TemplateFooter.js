import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { changeProgressBar } from "../reducers/resumeSlice";

const TemplateFooter = ({exportPDFWithMethod}) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const navigateBack = () => {
        navigate("/template");
        dispatch(changeProgressBar(80));
    }
    return(
        <div className="buttons flex justify-between align-center">
            <button onClick={navigateBack}>Pick another template</button>
            <button onClick={exportPDFWithMethod} className="next" >
            Save resume as PDF
            </button>
      </div>
    )
}
export default TemplateFooter;