import React, { useState } from "react";

function ToyCard({ toy, handleDelete, onUpdateToy }) {

  const [likes, setLikes] = useState(toy.likes)

  function handleClick(){
    fetch(`http://localhost:3001/toys/${toy.id}`, {
      method: "DELETE",
    })
      .then((r) => r.json())
      .then(() => handleDelete(toy));
  }

   
  function handleAddLike(){
    setLikes(likes+1)
    fetch(`http://localhost:3001/toys/${toy.id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          likes: likes,
        }),
      })
      .then((r) => r.json())
      .then((updatedToy) => onUpdateToy(updatedToy));
  }
  

  return (
    <div className="card">
      <h2>{toy.name}</h2>
      <img
        src={toy.image}
        alt={toy.name}
        className="toy-avatar"
      />
      <p>{likes} Likes </p>
      <button className="like-btn" onClick={handleAddLike}>Like {"<3"}</button>
      <button className="del-btn" onClick={handleClick}>Donate to GoodWill</button>
    </div>
  );
}

export default ToyCard;
