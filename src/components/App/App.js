import { useState } from 'react';
import './App.css';
import Ideas from '../Ideas/Ideas.js';
import Form from '../Form/Form.js';

function App(){
  const [ideas, setIdeas] = useState([]);

  function addIdea(newIdea){
    setIdeas([...ideas, newIdea]);
  }

  function deleteIdea(id){
    setIdeas((ideas) => ideas.filter(idea => idea.id !== id));
  }

  return (
    <main className="App">
      <h1>IdeaBox</h1>
      <Form addIdea={addIdea} />
      {!ideas.length && <h2>No ideas yet -- add some!</h2>}
      <Ideas ideas={ideas} deleteIdea={deleteIdea}/>
    </main>
  );
}

export default App;