import { useState, useEffect } from 'react';
import './App.css';
import Form from '../Form/Form';
import Ideas from '../Ideas/Ideas';

function App(){
  const [ ideas, setIdeas ] = useState([]);
  const [error, setError] = useState('');
  const baseUrl = 'http://localhost:3001/api/v1/ideas';

  async function getIdeas(){
      try{
        const response = await fetch(baseUrl);
        if (response.ok){
          const jsonResponse = await response.json();
          setIdeas([...ideas, ...jsonResponse]);
        }
      } catch (error) {
        setError(error.message);
        console.log(error);
      }
    }

    useEffect(() => {
      getIdeas();
    }, [])

  async function addIdea(newIdea){
    try {
      const response = await fetch(baseUrl, {
        method: 'POST',
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(newIdea)
      })

      if(response.ok){
        const jsonResponse = await response.json();
        setIdeas([...ideas, jsonResponse]);
      }
    } catch (error) {
      setError(error.message);
      console.log(error);
    }
  }

  const deleteIdea = async (id) => {
    try {
      const response = await fetch(baseUrl + `/${id}`, { method: 'DELETE' });
      const filteredIdeas = ideas.filter(idea => idea.id !== id);
      setIdeas(filteredIdeas);
    } catch (error) {
      setError(error.message);
      console.log(error);
    }
  }

  return (
    <main className='App'>
      <h1>Idea Box</h1>
      <Form addIdea={addIdea}/>
      {!ideas.length && <h2>No ideas yet, add some!</h2>}
      {error && <h2>{error}</h2>}
      <Ideas ideas={ideas} deleteIdea={deleteIdea}/>
    </main>
  );

}

export default App;