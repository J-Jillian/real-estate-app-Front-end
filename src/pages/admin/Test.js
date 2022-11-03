import React, { useState, useEffect } from "react";
import axios from "axios";

const Test = () => {
  const [propertityId, setPropertieId] = useState(0);

  const [title, setTitle] = useState("");

  const [propertyList, setPropertyList] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8000/read").then((response) => {
      setPropertyList(response.data);
      console.log(response.data);
    });
  }, []);

  const addList = () => {
    axios.post("http://localhost:8000/insert", {
      propertityId: propertityId,
      title: title,
    });
    console.log(propertityId + title);
  };
  return (
    <>
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
      <div className="padding">
        <h2>Properties List</h2>
        {propertyList.map((val, key) => {
          return (
            <div className="padding">
              <h1>{val.PropertyID}</h1>
              <h1>{val.Title}</h1>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Test;
