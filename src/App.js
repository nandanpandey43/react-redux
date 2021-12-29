import logo from "./logo.svg";
import "./App.css";
import React, { useEffect } from "react";
import { store } from "./store/state";
import faker from "faker";

function App() {
  // console.log(store);
  useEffect(() => {
    store.subscribe(() => {
      console.log("current state", store.getState());
    });
  }, []);

  const showData = () => {
    store.dispatch({
      type: "",
    });
  };
  const handleDelete = () => {
    store.dispatch({
      type: "DELETE",
    });
  };
  const handleAdd = () => {
    store.dispatch({
      type: "ADD",
      payload: {
        id: faker.datatype.uuid(),
        name: faker.name.findName(),
      },
    });
  };

  return (
    <div className="App">
      <button onClick={showData}>Click to Show data</button>
      <button onClick={handleDelete}>Click to Delete data</button>
      <button onClick={handleAdd}>Click to Add data</button>
    </div>
  );
}

export default App;
