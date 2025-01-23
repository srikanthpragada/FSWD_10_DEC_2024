import React from 'react'

import AddNewSkill from './AddNewSkill';
 

function ShowSkills({ skills, deleteSkill }) {
   
    function deleteCurrentSkill(skill) {
        // take confirmation about deleting the skill
        if (!window.confirm(`Do you want to delete [${skill}] skill?`)) {
            return;
        }
        deleteSkill(skill);
    }

    return (
        // conditionally render the table only if there are skills
        skills.length !== 0 &&    
        <table className="table table-bordered">
            <thead>
                <tr>
                    <th>Skill</th>
                    <th>Rating</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {skills.map((skill, index) =>
                    <tr key={index}>
                        <td>{skill.skill}</td>
                        <td>{skill.rating}</td>
                        <td>
                            <button onClick={() => deleteCurrentSkill(skill.skill)}>Delete</button>
                        </td>
                    </tr>
                )
                }
            </tbody>
        </table>
    )
}


export default function TechSkills2() {
    let [skills, setSkills] = React.useState([{ skill: 'JavaScript', rating: 5 }]);

    function addNewSkill(skill) {
        setSkills([...skills, skill]);
        console.log(skills);
    }

    function deleteSkill(skillToDelete) {
         setSkills(skills.filter(s => s.skill.toUpperCase() !== skillToDelete.toUpperCase()));
    }

    return (
        <>
            <h2>Technical Skills</h2>
            <AddNewSkill skills={skills} addNewSkill={addNewSkill} />
            <p></p>
            <ShowSkills skills={skills} deleteSkill={deleteSkill}  />
        </>
    )
}
