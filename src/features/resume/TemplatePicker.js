import { useSelector, useDispatch } from 'react-redux'
import {useNavigate} from 'react-router-dom';
import { Fragment } from 'react';
import { pickTemplate } from './resumeSlice'
import '../../App.css';

const TemplatePicker = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const passedName = useSelector((state) => state.resume.name)

    const nextPage = () => {
        navigate('/final');
    };

    const selectTemplate = (e) => {
        dispatch(pickTemplate(e.target.value))
    }

    return (
        <Fragment>
            <div>Hey, {passedName} pick a template</div>
            <form>
              <input onChange={selectTemplate} type="radio" id="first-template" name="templatepick" value="first-template" />
              <label htmlFor="first-template" className="example1"></label>
              <input onChange={selectTemplate} type="radio" id="second-template" name="templatepick" value="second-template" />
              <label htmlFor="second-template" className="example2"></label>
            </form>
            <button onClick={nextPage}>Next</button>
        </Fragment>
    )
}

export default TemplatePicker;