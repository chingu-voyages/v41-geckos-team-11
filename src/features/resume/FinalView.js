import { useSelector } from 'react-redux'
import React from 'react';
import '../../App.css';

const FinalView = () => {
    const passedName = useSelector((state) => state.resume.name)
    const pickedTemplate = useSelector((state) => state.resume.style)

    return(
        <div className={pickedTemplate}>
            <h5>CV</h5>
            <div className={pickedTemplate}>
                This is your name: {passedName} 
            </div>
        </div>    
    )
}

export default FinalView;