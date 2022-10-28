import { Fragment, useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { setResume } from "../features/resume/resumeSlice";

const Input = (props) => {
    const {name, text} = props;
    const [inputVal, setInputVal] = useState('')
    const dispatch = useDispatch();

    const handleChange = (e) => {
        setInputVal(e.target.value)
    }

    useEffect(()=> {
        dispatch(setResume({name, inputVal}))
    }, [inputVal])

    return (
      <Fragment>
        <label htmlFor={name}>{text}</label>
        <input onChange={handleChange}
          id={name}
          name={name}
          value={inputVal}
        />
      </Fragment>
    );
}
export default Input;