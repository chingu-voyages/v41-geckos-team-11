
function WorkHistory(
    {
        jobTitle1,
        workDescription1,
        startWorkDate1,
        endWorkDate1,
        company
    }
) {
    return (
        <div>
            <h2>Work History</h2>
            <div className="row">
                <div className="date">
                    <p>{startWorkDate1} - {endWorkDate1}</p>
                </div>
                <div className="details">
                    <h3>{jobTitle1}</h3>
                    <p>{company}</p>
                    <p>{workDescription1}</p>
                </div>
            </div>
        </div>
    )
}

export default WorkHistory