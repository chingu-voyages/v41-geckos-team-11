import React from 'react'

function Education(
    {
        startSchoolDate1,
        endSchoolDate1,
        education
    }
) {
    return (
        <div className="education">
            <h2>Education</h2>
            <div className="row flex">
                <div className="date">
                    <p>{startSchoolDate1} 2020/02 - 2022/02 {endSchoolDate1}</p>
                </div>
                <div className="details">
                    {education &&
                        education.map(el => (
                            <div>
                                <h3>{el.degree}: {el.course}</h3>
                                <p>{el.university} - Nigeria</p>
                            </div>
                        ))
                    }
                    <div>
                        <h3>BSc: Computer Science</h3>
                        <p>University of Toronto - Ontario, Canada</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Education
