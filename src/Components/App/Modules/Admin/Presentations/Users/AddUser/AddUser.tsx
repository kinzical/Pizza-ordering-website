import Form from "antd/lib/form/Form";
import React, { useState } from "react";
import { User } from "../../../../Shared/models/interfaces/User";
import UserDataService from "../../../../Shared/services/http-common-services";

const AddUser = () => {
  const initialUserState = {
    id: null,
    email: "",
    password: "",
  };
  const [user, setUser] = useState(initialUserState);
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (event: any) => {
    const { name, value } = event.target;
    setUser({ ...user, [name]: value });
  };

  const saveUser = () => {
    let data: User = {
      email: user.email,
      password: user.password
    };

    UserDataService.create(data)
      .then(response => {
        setUser({
          id: response.data.id,
          email: response.data.email,
          password: response.data.password,
        });
        setSubmitted(true);
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  };

  const newUser = () => {
    setUser(initialUserState);
    setSubmitted(false);
  };

  return (
      <div>
        <button className="btn btn-success" onClick={newUser}>
            Add User
        </button>
        <Form>
            <label >Email</label>
            <input
              type="email"
              id="email"
              required
              value={user.email}
              onChange={handleInputChange}
              name="email"
            />

            <label>Password</label>
            <input
              type="password"
              id="password"
              required
              value={user.password}
              onChange={handleInputChange}
              name="password"
            />

          <button onClick={saveUser} className="btn btn-success" >
            Submit
          </button>
        </Form>
        </div>
  );
};

export default AddUser;