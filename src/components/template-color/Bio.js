import React from 'react'

function Bio({ firstName, lastName, title, bio }) {
  const fName_initial = firstName.slice(0,1);
  const lName_initial = lastName.slice(0,1);

  return (
    <section>
      <div className="profile flex row align-center justify-start">
        <h2 className="initials">{`${fName_initial}${lName_initial}`}</h2>
        <div>
            <h1>{`${firstName} ${lastName}`}</h1>
            <p>{title}</p>
        </div>
      </div>
      <div className="bio">
        <p>
          {bio}
        </p>
      </div>
    </section>
  )
}

export default Bio
