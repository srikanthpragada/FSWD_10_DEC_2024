import React from 'react';

export default function AddNewSkill({ skills, addNewSkill }) {
    let [skill, setSkill] = React.useState({skill : '', rating : 5});
    
    function addSkill(event) {
        event.preventDefault();

        // Check whether the skill already exists
        if (skills.find(s => s.skill === skill.skill)) {
            alert('Skill already exists');
            return;
        }

        addNewSkill(skill);
        setSkill({skill : '', rating : 5});
    }

    function updateText(event) {
        setSkill({ ...skill, [event.target.id]: event.target.value });
    }

    return (
        <>
            <form onSubmit={addSkill}>
                Skill: <input type="text" id="skill" required
                          value={skill.skill} onChange={updateText} />
                Rating : <input type="number" id="rating"
                    required min="1" max="5" value={skill.rating}
                    onChange={updateText} 
                />
                <p></p>
                <button>Add Skill</button>
            </form>
        </>
    )
}