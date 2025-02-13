import React from 'react'

function AddSkill({ skills, addNewSkill }) {
    function addSkill() {
        let skill = document.getElementById('skill').value;
        let rating = document.getElementById('rating').value;
        if (skill === '') {
            alert('Skill cannot be empty');
            return;
        }
        if (rating === '') {
            alert('Rating cannot be empty');
            return;
        }

        // Check whether skill is already in the array
        if (skills.find(s => s.skill === skill)) {
            alert('Skill already exists');
            return;
        }
        // call the parent function to add the skill and pass an object with skill and rating
        addNewSkill({ skill, rating });
    }

    return (
        <>
            Skill: <input type="text" id="skill" />
            Rating : <input type="number" id="rating" />
            <p></p>
            <button onClick={addSkill}>Add Skill</button>
        </>
    )
}

function ShowSkills({ skills, deleteSkill }) {
   
    function deleteCurrentSkill(skill) {
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


export default function TechSkills() {
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
            <AddSkill skills={skills} addNewSkill={addNewSkill} />
            <p></p>
            <ShowSkills skills={skills} deleteSkill={deleteSkill}  />
        </>
    )
}
