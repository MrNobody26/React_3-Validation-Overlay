import React, { useRef, useState } from "react";
import Card from "../UI/Card";
import Button from "../UI/Button";
import styles from "./AddUser.module.css";
import ErrorModal from "../UI/ErrorModal";
import Wrapper from "../Helpers/Wrapper";

const AddUser = (props) => {
  const enteredName = useRef();
  const enteredAge = useRef();
  const [error, setError] = useState();

  const addUserHandler = (event) => {
    const UserName = enteredName.current.value;
    const UserAge = enteredAge.current.value;
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
    enteredName.current.value='';
    enteredAge.current.value='';
    setError(null);
  };

  const errorManagement = () => {
    setError(null);
  };

  return (
    <Wrapper>
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
          <input id="username" type="text" ref={enteredName} />
          <label htmlFor="age">Age (Years)</label>
          <input id="age" type="number" ref={enteredAge} />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </Wrapper>
  );
};

export default AddUser;
