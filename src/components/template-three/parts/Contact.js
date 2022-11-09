import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faEnvelope,
    faLink,
    faMapMarkerAlt,
    faPhone
} from "@fortawesome/free-solid-svg-icons";
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'


function Contact({ location, phone, email, socialWeb, linkedin }) {
    return (
        <div>
            <h2>Contact</h2>
            <ul>
                <li>
                    <FontAwesomeIcon
                        icon={('fa-solid', faMapMarkerAlt)}
                    />
                    <span>{location}</span>
                </li>
                <li>
                    <FontAwesomeIcon
                        icon={('fa-solid', faPhone)}
                    />
                    <span>{phone}</span>
                </li>
                <li>
                    <FontAwesomeIcon
                        icon={('fa-solid', faEnvelope)}
                    />
                    <span>{email}</span>
                </li>
                <li>
                    <FontAwesomeIcon
                        icon={('fa-solid', faLinkedin)}
                    />
                    <span><a href={linkedin}>{linkedin}</a></span>
                </li>
                <li>
                    <FontAwesomeIcon
                        icon={('fa-solid', faLink)}
                    />
                    <span><a href={socialWeb}>{socialWeb}</a></span>
                </li>
            </ul>
        </div>
    )
}

export default Contact