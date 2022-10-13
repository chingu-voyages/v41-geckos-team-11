import React from 'react';
import {useNavigate} from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux'
import { changeName } from './resumeSlice'

const ResumeBuilder = () => {
    const navigate = useNavigate();
    const passedName = useSelector((state) => state.resume.name)
    const dispatch = useDispatch()

    function changeInput(e) {
      dispatch(changeName(e.target.value));
    }
    // function submitHandle(e) {
    //   e.preventDefault();
    //   console.log("this does nothing atm");
    // }

    const nextPage = () => {
        console.log('hey')
        navigate('/template');
      };
  
    return (
      <div>
        <form>
          <label htmlFor="name">Your name</label>
          <input onChange={changeInput} id="name" value={passedName} />
          <button>add</button>
          {passedName}
        </form>
        <button onClick={nextPage}>next =></button>
      </div>
    );
}

export default ResumeBuilder;