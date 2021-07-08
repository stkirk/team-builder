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
      <div className="form-container">
        <form>
          <label>
            Member Name:
            <input
              type="text"
              name="name"
              value={formValues.name}
              onChange={changeHandler}
              placeholder="Enter name"
              maxLength="30"
            />
          </label>
          <br />
          <label>
            Email:
            <input
              type="email"
              name="email"
              value={formValues.email}
              onChange={changeHandler}
              placeholder="Enter email"
              maxLength="30"
            />
          </label>
          <br />
          <label>
            Role:
            <select
              name="role"
              value={formValues.role}
              onChange={changeHandler}
            >
              <option value="">-- select role --</option>
              <option value="youngling">Youngling</option>
              <option value="padawan">Padawan</option>
              <option value="knight">Jedi Knight</option>
              <option value="master">Jedi Master</option>
              <option value="yoda">Grand Master</option>
            </select>
          </label>
        </form>
      </div>

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
