import React, { useState } from 'react';
import TeamData from './TeamData';
import NewMember from './components/NewMember';
import FormComponent from './components/FormComponent';
import './app.css';
import './index.css';



function App() {
  
  const [members, setMembers]=useState(TeamData);
  const addMember = member => {
    setMembers([...members, member]);
  };

  return (
    <div className="App">
      
      <h1>Meet the team</h1>
      <FormComponent addMember={addMember} />
      <NewMember newPerson={members} />
    
    </div>
  );
}

export default App;
