import React from "react";
import Form from "./components/Form";
import "./App.css";

//initial members list that we will set to state
const membersList = [{ firstname: "Shane", lastname: "Kirk" }];

//initialFormValues will hold initial slice of state for the form, same structure as memberslist
const initialFormValues = {
  firstname: "",
  lastname: "",
};

function App() {
  return (
    <div className="App">
      <Form membersList={membersList} initialFormValues={initialFormValues} />
    </div>
  );
}

export default App;
