import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import TextArea from "../../components/TextArea";
import Input from "../../components/Input";


const WorkHistory = () => {
    const navigate = useNavigate();
    const nextPage = () => {
        navigate("/template");
    };
    const prevPage = () => {
        navigate('/education')
    }
    return (
        <div>
            <form>
                <div>
                    <h2>Work History</h2>
                    <div className="row flex justify-between align-center full-width">
                        <div className="input-block">
                            <Input text="Company" name="company" />
                        </div>
                        <div className="input-block">
                            <Input text="Job Title" name="jobTitle1" />
                        </div>
                    </div>
                    <div className="row flex justify-between align-center full-width">
                        <div className="input-block">
                            <Input text="Start Date" type="month" name="startWorkDate1" />
                        </div>
                        <div className="input-block">
                            <Input text="End Date" type="month" name="endWorkDate1" />
                        </div>
                    </div>
                    <div className="row flex justify-between align-center full-width">
                        <div className="input-block">
                            <label>Work Description</label>
                            <TextArea name="workDescription1" />
                        </div>
                    </div>
                </div>
            </form>
            <div className="buttons flex justify-between align-center">
                <button onClick={prevPage}>Back</button>
                <button className="next" onClick={nextPage}>Next</button>
            </div>

        </div>
    )
}

export default WorkHistory
