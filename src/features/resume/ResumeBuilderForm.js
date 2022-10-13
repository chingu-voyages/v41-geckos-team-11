import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux'
import { changeName } from './resumeSlice'

const ResumeBuilderForm = () => {
    const navigate = useNavigate();
    const passedName = useSelector((state) => state.resume.name)
    const dispatch = useDispatch()

    function changeInput(e) {
      dispatch(changeName(e.target.value));
    }

    const nextPage = () => {
        navigate('/template');
    };
  
    return (
      <div>
        <form>
          <label htmlFor="name">Your name</label>
          <input onChange={changeInput} id="name" value={passedName} />
        </form>
        <button onClick={nextPage}>next</button>
      </div>
    );
}

export default ResumeBuilderForm;