import { useState, useEffect } from 'react';
import './App.css';
import Form from '../Form/Form';
import Ideas from '../Ideas/Ideas';

function App(){
  const [ ideas, setIdeas ] = useState([]);
  const [error, setError] = useState('');
  const baseUrl = 'http://localhost:3001/api/v1/ideas';

  function getIdeas() {
    fetch(baseUrl)
    .then(response => response.json())
    .then(data => setIdeas([...ideas, ...data]))
    .catch(error => setError(error.message))
  }

  useEffect(() => {
    getIdeas();
  }, [])

  function addIdea(newIdea) {
    fetch(baseUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newIdea),
    })
    .then(response => response.json())
    .then(data => setIdeas([...ideas, data]))
    .catch(error => setError(error.message))
  }

  function deleteIdea(id){
    fetch(baseUrl, {method: 'DELETE'})
    .then(response => {
      const filteredIdeas = ideas.filter(idea => idea.id !== id);
      setIdeas(filteredIdeas);
    }).catch(error => setError(error.message));
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