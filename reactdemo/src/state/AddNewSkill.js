import React from 'react';

export default function AddNewSkill({ skills, addNewSkill }) {
    let [skill, setSkill] = React.useState({skill : '', rating : 5});
    
    function addSkill() {
         
    }

    function updateSkill(event) {
        setSkill({ ...skill, 'skill': event.target.value });
    }

    return (
        <>
            <form>
                Skill: <input type="text" id="skill" required
                          value={skill.skill} onChange={updateSkill} />
                Rating : <input type="number" id="rating"
                          required min="1" max="5" value={skill.rating} />
                <p></p>
                <button onClick={addSkill}>Add Skill</button>
            </form>
        </>
    )
}