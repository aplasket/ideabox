import { useState, useEffect } from 'react';
import './App.css';
import Form from '../Form/Form';
import Ideas from '../Ideas/Ideas';

function App(){
  const [ ideas, setIdeas ] = useState([]);

  function addIdea(newIdea){
    setIdeas([...ideas, newIdea]);
  }

  function deleteIdea(id){
    setIdeas(ideas => ideas.filter(idea => idea.id !== id));
  }

  async function getIdeas(){
    const baseUrl = 'http://localhost:3001/api/v1/ideas';

    try{
      const response = await fetch(baseUrl);
      if (response.ok){
        const jsonResponse = await response.json();
        setIdeas([...ideas, ...jsonResponse]);
      }
    } catch(error){
      console.log(error);
    }
  }

  useEffect(() => {
    getIdeas();
  }, [])

  return (
    <main className='App'>
      <h1>Idea Box</h1>
      <Form addIdea={addIdea}/>
      {!ideas.length && <h2>No ideas yet, add some!</h2>}
      <Ideas ideas={ideas} deleteIdea={deleteIdea}/>
    </main>
  );

}

export default App;