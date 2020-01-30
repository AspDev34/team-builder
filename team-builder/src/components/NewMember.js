import React from 'react';

function NewMember (props) {

    return (

        <div>
            {props.member.map(item => {
                return (
                    <div key={item.id}>

                        <h3>{item.name}</h3>
                        <p>{item.role}</p>
                        <p>{item.email}</p>

                    </div>
                )
            })}

        </div>

    );

};