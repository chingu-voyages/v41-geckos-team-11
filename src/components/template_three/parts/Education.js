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
            {education &&
                education.map(el => (
                    <div key={Math.floor(Math.random() * 10000) + 1} className="flex row">
                        <div className="date">
                            <p>{startSchoolDate1} 2020/02 - 2022/02 {endSchoolDate1}</p>
                        </div>
                        <div className="details">
                            <h3>{el.degree}: {el.course}</h3>
                            <p>{el.university} - Nigeria</p>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default Education
