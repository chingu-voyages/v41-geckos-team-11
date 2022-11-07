import Bio from './parts/Bio'
import Education from './parts/Education'
import WorkHistory from './parts/WorkHistory'

function Main(
    {
        firstName,
        lastName,
        title,
        bio,
        startSchoolDate1,
        endSchoolDate1,
        education,
        jobTitle1,
        workDescription1,
        startWorkDate1,
        endWorkDate1,
        company
    }
) {
    return (
        <section>
            <Bio
                firstName={firstName}
                lastName={lastName}
                title={title}
                bio={bio}
            />
            <Education
                startSchoolDate1={startSchoolDate1}
                endSchoolDate1={endSchoolDate1}
                education={education}
            />
            <WorkHistory
                jobTitle1={jobTitle1}
                workDescription1={workDescription1}
                startWorkDate1={startWorkDate1}
                endWorkDate1={endWorkDate1}
                company={company}
            />
        </section>
    )
}

export default Main
