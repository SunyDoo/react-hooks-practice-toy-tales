import React from "react";
import ToyCard from "./ToyCard";

function ToyContainer({ toyList, handleDelete, onUpdateToy }) {
  return (
    <div id="toy-collection">{
      toyList.map((toy) => (
        <ToyCard key={toy.id} toy={toy} handleDelete={handleDelete} onUpdateToy={onUpdateToy} />
      ))
    }</div>)
  }

export default ToyContainer;
