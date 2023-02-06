import React, { useState } from "react";
import Card from "../UI/Card";
import Button from "../UI/Button";
import styles from "./AddUser.module.css";
import ErrorModal from "../UI/ErrorModal";

const AddUser = (props) => {
  const [UserName, setUserName] = useState("");
  const [UserAge, setUserAge] = useState("");
  const [error, setError] = useState();

  const addUserHandler = (event) => {
    event.preventDefault();
    if (UserName.trim().length === 0 || UserAge.trim().length === 0) {
      setError({
        title: "Empty Input",
        message:
          "Empty inputs are invalid, please enter valid input such as name: john & Age: 45",
      });
      return;
    }

    if (+UserAge < 1) {
      setError({
        title: "Invalid Input",
        message: "Invalid inputs, please enter Age > 0",
      });
      return;
    }

    console.log(UserName, UserAge);
    props.onAddUser(UserName, UserAge);
    setUserAge("");
    setUserName("");
    setError(null);
  };

  const userNameHandler = (event) => {
    setUserName(event.target.value);
  };

  const userAgeHandler = (event) => {
    setUserAge(event.target.value);
  };

  const errorManagement = () => {
    setError(null);
  };

  return (
    <div>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onErrorManagement={errorManagement}
        />
      )}
      <Card className={styles.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">Username</label>
          <input
            id="username"
            type="text"
            onChange={userNameHandler}
            value={UserName}
          />
          <label htmlFor="age">Age (Years)</label>
          <input
            id="age"
            type="number"
            onChange={userAgeHandler}
            value={UserAge}
          />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </div>
  );
};

export default AddUser;
