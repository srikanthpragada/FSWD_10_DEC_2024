import React from 'react'

function AddSkill({ skills }) { }

function ShowSkills({ skills }) { }


export default function TechSkills() {
    let [skills, setSkills] = React.useState([{skill :'JavaScript', rating : 5}]);

    return (
        <>
            <h2>Technical Skills</h2>
            <AddSkill skills={skills} />
            <p></p>
            <ShowSkills skills={skills} />
        </>
    )
}
