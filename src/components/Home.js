import React, { useState } from "react";
import { Button, Form, FormGroup, Label, Input, ButtonGroup } from "reactstrap";
import axios from "axios";
import SearchBar from "./SearchBar";

const Home = ({ users, setUsers }) => {
  const defaultState = {
    cSelected: "",
    user_first_name: "",
    user_last_name: "",
    user_email: "",
    username: "",
    password: "",
    Location: "",
  };
  const [formState, setFormState] = useState({ ...defaultState });
  //form submit
  const handleSubmit = (e) => {
    e.preventDefault();
    const user = {
      cSelected: formState.cSelected,
      user_first_name: formState.user_first_name,
      user_last_name: formState.user_last_name,
      user_email: formState.user_email,
      username: formState.username,
      password: formState.password,
      Location: formState.Location,
    };
    formState.user_first_name === "" ||
    formState.user_last_name === "" ||
    formState.user_email === "" ||
    formState.username === "" ||
    formState.password === "" ||
    formState.Location === ""
      ? alert("You cannot submit an empty form!")
      : newUser(user);

    console.log(user);
  };

  //data storing
  const handleChange = (e) => {
    const value = e.target.value;
    setFormState({
      ...formState,
      [e.target.name]: value,
    });
  };
  //diner/operator button management
  const handleButtonClick = (e) => {
    e.preventDefault();
    setFormState({ ...formState, cSelected: e.target.id });
  };

  //user creation
  const newUser = (user) => {
    axios
      .post("https://reqres.in/api/users", user)
      .then((res) => {
        setUsers([...users, res.data]);
        console.log([...users, res.data]);
        setFormState(defaultState);
      })
      .catch((err) => console.log(`Error: `, err));
  };

  return (
    <div>
      <SearchBar />

      <h2 className="sign-up">
        <hr />
        Sign Up <hr />
      </h2>

      <Form onSubmit={handleSubmit}>
        <ButtonGroup style={{ marginBottom: "2%" }}>
          <Button
            color="primary"
            id="Diner"
            onClick={handleButtonClick}
            active={formState.cSelected === "Diner"}
          >
            Diner
          </Button>
          <Button
            color="primary"
            id="Operator"
            onClick={handleButtonClick}
            active={formState.cSelected === "Operator"}
          >
            Operator
          </Button>
        </ButtonGroup>
        <FormGroup>
          <Label for="user_first_name" className="mr-sm-2">
            First Name
          </Label>
          <Input
            type="text"
            name="user_first_name"
            id="user_first_name"
            value={formState.user_first_name}
            onChange={handleChange}
          />
          <Label for="user_last_name" className="mr-sm-2">
            Last Name
          </Label>
          <Input
            type="text"
            name="user_last_name"
            id="user_last_name"
            value={formState.user_last_name}
            onChange={handleChange}
          />
        </FormGroup>
        <FormGroup>
          <Label for="user_user_email">Email</Label>
          <Input
            type="user_email"
            name="user_email"
            id="user_email"
            onChange={handleChange}
            value={formState.user_email}
          />
        </FormGroup>
        <FormGroup>
          <Label for="username">Username</Label>
          <Input
            type="username"
            name="username"
            id="username"
            value={formState.username}
            minLength="2"
            onChange={handleChange}
          />
        </FormGroup>
        <FormGroup>
          <Label for="password">Password</Label>
          <Input
            type="password"
            name="password"
            id="password"
            value={formState.password}
            minLength="5"
            onChange={handleChange}
          />
        </FormGroup>
        <FormGroup>
          <Label for="Location">Location</Label>
          <Input
            type="text"
            name="Location"
            id="Location"
            value={formState.Location}
            minLength="3"
            onChange={handleChange}
          />
        </FormGroup>
        <Button
          id="btn"
          type="submit"
          style={{
            backgroundColor: "rgb(0, 85, 200)",
            width: "15%",
            fontSize: "1.2rem",
          }}
        >
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default Home;
