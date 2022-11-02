import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import { Fragment } from 'react';
import { pickTemplate, changeProgressBar } from './resumeSlice'
import '../../App.css';

const TemplatePicker = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const passedName = useSelector((state) => state.resume.name)

    const nextPage = () => {
        navigate('/final');
        dispatch(changeProgressBar(75))
    };
    const prevPage = () => {
        dispatch(changeProgressBar(25))
        navigate('/education')
    }

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
            <div className="buttons flex justify-between align-center">
                <button onClick={prevPage}>Back</button>
                <button className="next" onClick={nextPage}>Next</button>
            </div>
        </Fragment>
    )
}

export default TemplatePicker;