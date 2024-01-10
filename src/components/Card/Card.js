import './Card.css';

function Card({title, description, id, deleteIdea}){
  const handleRemoveClick = () => {
    deleteIdea(id);
  }

  return(
    <div className="card">
      <h3>{title}</h3>
      <p>{description}</p>
      <button onClick={handleRemoveClick}>🗑️</button>
    </div>
  );
}

export default Card;