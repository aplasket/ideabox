import './Ideas.css';
import Card from '../Card/Card.js';

function Ideas({ideas, deleteIdea}){
  //iterate through all ideas and call Card component
  const ideaCards = ideas.map(idea => {
    // call the Card component
    return (
      <Card
        title={idea.title}
        description={idea.description}
        id={idea.id}
        key={idea.id}
        deleteIdea={deleteIdea}
      />
    );
  })

  return (
    <div className="ideas-container">
      {ideaCards}
    </div>
  );
}

export default Ideas;