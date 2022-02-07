import React, { useEffect, useState } from "react";

import Header from "./Header";
import ToyForm from "./ToyForm";
import ToyContainer from "./ToyContainer";

function App() {
  const [showForm, setShowForm] = useState(false);
  const [toyList, setToyList] = useState([])


  useEffect(() => {
    fetch('http://localhost:3001/toys')
      .then((r) => r.json())
      .then((toys) => setToyList(toys));
  }, []);

  function handleClick() {
    setShowForm((showForm) => !showForm);
  }

  function handleAddToy(newToy) {
    setToyList([...toyList, newToy]);
  }

  function handleDeleteToy (deletedToy){
    const updatedToys = toyList.filter((toy) => toy.id !== deletedToy.id);
    setToyList(updatedToys);
  } 

  function updateToys(updatedToy){
    const updatedToyList = toyList.map((toy) => {
      if (toy.id === updatedToy.id) {
        return updatedToy;
      } else {
        return toy;
      }
    });
    setToyList(updatedToyList);
  }

  return (
    <>
      <Header />
      {showForm ? <ToyForm onAddToy={handleAddToy} /> : null}
      <div className="buttonContainer">
        <button onClick={handleClick}>Add a Toy</button>
      </div>
      <ToyContainer toyList={toyList} handleDelete={handleDeleteToy} onUpdateToy={updateToys} />
    </>
  );
}

export default App;
