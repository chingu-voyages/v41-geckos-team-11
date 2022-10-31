import { useDispatch } from "react-redux";
import { Fragment, useState, useEffect } from "react";
import { setResume } from "../features/resume/resumeSlice";

const TextArea = ({name}) => {
    const dispatch = useDispatch();
    const [inputVal, setInputVal] = useState('')

    const handleChange = (e) => {
        setInputVal(e.target.value);
    }

    useEffect(()=> {
        dispatch(setResume({name, inputVal}))
    }, [inputVal])

    return(
        <Fragment><textarea onChange={handleChange}></textarea></Fragment>
    )
}
export default TextArea;