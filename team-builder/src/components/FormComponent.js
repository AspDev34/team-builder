import React, { useState } from 'react';


function FormComponent (props) {

    const [members, setMembers] = useState({name: '', id: '', email: '', role: ''})

    const change = event => {
        setMembers({...members, [event.target.name]: event.target.value});
    }

    const newSubmission = event => {
        event.preventDefault();
        props.addMember({...members});
        setMembers({name: '', id: '', email: '', role: ''})
    }

        return (

            <form onSubmit={newSubmission}>
                <label htmlFor="name">Name: </label>
                <input type="text" name="name" placeholder="Enter your name" value={members.name} onChange={change} />

                
                <label htmlFor="id">id: </label>
                <input type="text" name="id" placeholder="Enter your id" value={members.id} onChange={change} />

                
                <label htmlFor="email">email: </label>
                <input type="text" name="email" placeholder="you@email.com" value={members.email} onChange={change} />

                
                <label htmlFor="role">role: </label>
                <input type="text" name="role" placeholder="your role" value={members.role} onChange={change} />


                <button type="submit">Add New Member</button>
            </form>


        );

};

export default FormComponent