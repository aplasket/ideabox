import './Form.css';
import { useState } from 'react';

function Form({addIdea}){
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleTitleChange = (event) => {
    setTitle(event.target.value)
  };

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value)
  };

  const handleSubmit = (event) =>{
    event.preventDefault();

    const newIdea = {
      id: Date.now(),
      title,
      description
    }

    if(newIdea.title){
      addIdea(newIdea);
      clearInput();
    }

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
        onChange= {handleTitleChange}
      />

      <input
        type='text'
        placeholder='Description'
        name='description'
        value={description}
        onChange={handleDescriptionChange}
      />

      <button onClick={handleSubmit}>SUBMIT</button>
    </form>
  );
}

export default Form;