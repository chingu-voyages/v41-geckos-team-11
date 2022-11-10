import { Fragment, useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { setResume } from "../reducers/resumeSlice";

const Input = (props) => {
    const {name, text, type="text", placeholder=""} = props;
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
          type={type}
          placeholder={placeholder}
        />
      </Fragment>
    );
}
export default Input;