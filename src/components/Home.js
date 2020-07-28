import React, { useState } from "react";
import axios from "axios";
import SearchBar from "./SearchBar";
import SignUpForm from "./SignUpForm";

const Home = ({ users, setUsers }) => {
    const defaultState = {
        user_role: "",
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
            user_role: formState.user_role,
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
        setFormState({ ...formState, user_role: e.target.id });
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

            <SignUpForm
                handleChange={handleChange}
                handleSubmit={handleSubmit}
                handleButtonClick={handleButtonClick}
                formState={formState}
            />
        </div>
    );
};

export default Home;
