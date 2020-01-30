import React, { useState } from 'react';
import TeamData from './TeamData';




function App() {
  
  const [members, setMembers]=useState(TeamData);
  const addMember = member => {
    setMembers([...members, member]);
  };

  return (
    <div className="App">
      
      <h1>Meet the team</h1>
      <FormComponent addMember={addMember} />
      <NewMember newPerson={member} />
    
    </div>
  );
}

export default App;
