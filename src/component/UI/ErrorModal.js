import React from "react";
import Button from "./Button";
import Card from "./Card";
import style from "./ErrorModal.module.css";

const ErrorModal = (props) => {
  return (
    <div onClick={props.onErrorManagement}>
    <div className={style.backdrop}>
      <Card className={style.modal}>
        <header className={style.header}>
          <h2>{props.title}</h2>
        </header>
        <div className={style.content}>
          <p>{props.message}</p>
        </div>
        <footer className={style.actions}>
          <Button onClick={props.onErrorManagement}>Okay click</Button>
        </footer>
      </Card>
    </div>
    </div>
  );
};

export default ErrorModal;
