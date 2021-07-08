import React from "react";
import Form from "./components/Form";
import "./App.css";

//initial members list that we will set to state
const membersList = [
  { name: "Shane", email: "shaanekirk@gmail.com", role: "padawan" },
];

//initialFormValues will hold initial slice of state for the form, same structure as memberslist
const initialFormValues = {
  name: "",
  email: "",
  role: "",
};

function App() {
  return (
    <div className="App">
      <h1>Team Builder</h1>
      <Form membersList={membersList} initialFormValues={initialFormValues} />
    </div>
  );
}

export default App;
