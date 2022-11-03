import React, { useState } from "react";
import axios from "axios";

const Test = () => {
  const [propertityId, setPropertieId] = useState(0);

  const [title, setTitle] = useState("");

  const addList = () => {
    axios.post("http://localhost:8000/insert", {
      propertityId: propertityId,
      title: title,
    });
    console.log(propertityId + title);
  };
  return (
    <div className="padding">
      <h1>Crud</h1>
      <label>PropertyId</label>
      <input
        type="number"
        onChange={(event) => {
          setPropertieId(event.target.value);
        }}
      />
      <label>Propertity Title</label>
      <input
        type="text"
        onChange={(event) => {
          setTitle(event.target.value);
        }}
      />
      <button onClick={addList}>Add to list</button>
    </div>
  );
};

export default Test;
