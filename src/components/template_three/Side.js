import Contact from './parts/Contact'
import Skills from './parts/Skills'

function Side(
    {
        location,
        phone,
        email,
        socialWeb,
        skills,
        linkedin
    }
) {
    return (
        <aside>
            <Contact
                location={location}
                phone={phone}
                email={email}
                socialWeb={socialWeb}
                skills={skills}
                linkedin={linkedin}
            />
            <Skills skills={skills} />
        </aside>
    )
}

export default Side