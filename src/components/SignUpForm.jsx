import React from "react";
import { Button, Form, FormGroup, Label, Input, ButtonGroup } from "reactstrap";

const SignUpForm = ({
  handleChange,
  handleSubmit,
  handleButtonClick,
  formState,
}) => {
  return (
    <div>
      {" "}
      <Form onSubmit={handleSubmit}>
        <ButtonGroup style={{ marginBottom: "2%" }}>
          <Button
            color="primary"
            id="Diner"
            onClick={handleButtonClick}
            active={formState.user_role === "Diner"}
          >
            Diner
          </Button>
          <Button
            color="primary"
            id="Operator"
            onClick={handleButtonClick}
            active={formState.user_role === "Operator"}
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

export default SignUpForm;
