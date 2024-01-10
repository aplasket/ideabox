import './Form.css';
import { useState } from 'react';

function Form({addIdea}){
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  function submitIdeas(event){
    event.preventDefault();
    // create constant with current value of title and description, set id to current date
    const newIdea = {
      id: Date.now(),
      title,
      description
    }
    // call the addIdea method and pass in newIdea
    addIdea(newIdea);
    //clear the input
    clearInput();
  }

  function clearInput(){
    setTitle("");
    setDescription("");
  }

  return (
    <form>
      <input
        type='text'
        placeholder='Title'
        name='title'
        value={title}
        onChange= {event => setTitle(event.target.value)}
      />

      <input
        type='text'
        placeholder='Description'
        name='description'
        value={description}
        onChange={event => setDescription(event.target.value)}
      />

      <button onClick={event => submitIdeas(event)}>SUBMIT</button>
    </form>
  );
}

export default Form;