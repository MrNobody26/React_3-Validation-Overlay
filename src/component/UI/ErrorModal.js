import React from "react";
import ReactDOM from "react-dom";
import Button from "./Button";
import Card from "./Card";
import style from "./ErrorModal.module.css";

const Backdrop = (props) => {
  return <div className={style.backdrop} onClick={props.onErrorManagement} />;
};

const Overlay = (props) => {
  return(
  <Card className={style.modal}>
    <header className={style.header}>
      <h2>{props.title}</h2>
    </header>
    <div className={style.content}>
      <p>{props.message}</p>
    </div>
    <footer className={style.actions}>
      <Button onClick={props.onErrorManagement}>Okay</Button>
    </footer>
  </Card>
  );
};

const ErrorModal = (props) => {
  return (
    <React.Fragment>
      {ReactDOM.createPortal(
        <Backdrop onErrorManagement={props.onErrorManagement} />,
        document.getElementById("backdrop-root")
      )}
      {ReactDOM.createPortal(
        <Overlay
          title={props.title}
          message={props.message}
          onErrorManagement={props.onErrorManagement}
        />,
        document.getElementById("overlay-root")
      )}
    </React.Fragment>
  );
};

export default ErrorModal;
