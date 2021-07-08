import React, { useState } from "react";

export default function Form(props) {
  //deconstruct intial slices of state passed as props
  const { initialFormValues, membersList } = props;

  //set our initial values as slices of state
  const [members, setMembers] = useState(membersList);
  const [formValues, setFormValues] = useState(initialFormValues);

  //change handler and submit handler **MOVE TO APP LATER, PASS AS PROPS
  const changeHandler = (evt) => {};

  const submitHandler = (evt) => {};

  return (
    <div className="container">
      <h1>Team Builder</h1>
      {members.map((member) => {
        return (
          <div class="member-div" key={member.email}>
            <h3>{member.name}</h3>
            <p>
              <span>Email:</span> {member.email}
            </p>
            <p>
              <span>Role:</span> {member.role}
            </p>
          </div>
        );
      })}
    </div>
  );
}
