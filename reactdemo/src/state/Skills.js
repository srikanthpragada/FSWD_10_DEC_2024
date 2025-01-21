import { useState } from 'react'

export default function Skills() {
    let [skills, setSkills] = useState([]);

    function addSkill() {
        let skill = document.getElementById('skill').value;
        if (skill === '') {
            alert('Skill cannot be empty');
            return;
        }
        
        // Check whether skill is already in the array
        if (skills.includes(skill)) {
            alert('Skill already exists');
            return;
        }

        setSkills( [...skills, skill] );
    }

    function deleteSkill() {
        let skill = document.getElementById('skill').value;
        // delete the skill from the array by ignoring case sensitivity 
        setSkills(skills.filter(s => s.toUpperCase() !== skill.toUpperCase()));
    }   

    function deleteByIndex(index) {
        setSkills(skills.filter((s, i) => i !== index));
    }   


    return (
        <>
            <h1>Skills</h1>
            Skill: <input type="text" id="skill" />
            <p></p>
            <button onClick={addSkill}>Add Skill</button>
            &nbsp;
            <button onClick={deleteSkill}>Delete Skill</button>
            <p></p>
            <ul>
                {skills.map((skill, index) => (
                    <li key={index}>{skill}
                        &nbsp; <button onClick={ () => deleteByIndex(index)}>Del</button>
                    </li>
                ))}
            </ul>
        </>
    )
}
