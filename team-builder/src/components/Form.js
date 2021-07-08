import React, { useState } from "react";

export default function Form(props) {
  //deconstruct intial slices of state passed as props
  const { initialFormValues, membersList } = props;

  //set our initial values as slices of state
  const [members, setMembers] = useState(membersList);
  const [formValues, setFormValues] = useState(initialFormValues);

  return (
    <div className="container">
      <h1>Team Builder</h1>
    </div>
  );
}
