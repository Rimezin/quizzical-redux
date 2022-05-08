import React from "react";
import { Button } from "semantic-ui-react";

export default function Modal(props) {
  const { modal, setModal, dark, handleSound } = props;

  function handleClose() {
    setModal((modal) => ({
      ...modal,
      show: false,
    }));
  }

  function handleCancelAction() {
    handleSound("buttonNo");
    if (modal.buttons.cancelAction === null) {
      handleClose();
    } else {
      modal.buttons.cancelAction();
    }
  }
  function handleOkAction() {
    handleSound("confirm");
    if (modal.buttons.okAction === null) {
      handleClose();
    } else {
      modal.buttons.okAction();
    }
  }

  return (
    <>
      <div
        className={`quizzical-modal ${!modal.show ? "modal-fade" : ""}`}
        style={{
          backgroundColor: dark ? "#35304f" : "#dad8e7",
        }}
      >
        <div id="modal-header" className="quizzical-modal-header">
          <span
            style={{
              fontSize: "2rem",
              position: "absolute",
              top: "0",
              left: "0",
              margin: "2rem",
              color: dark ? "#aca7c8" : "darkslateblue",
              fontWeight: 700,
            }}
          >
            <i className={`ui ${modal.icon} icon`} />
            &nbsp;&nbsp;{modal.title}
          </span>
          <Button
            icon="close"
            style={{
              position: "absolute",
              top: "0",
              right: "0",
              margin: "1rem",
              fontSize: "1rem",
            }}
            type="button"
            onClick={handleCancelAction}
            color="violet"
            inverted
          />
        </div>
        <div
          id="modal-content"
          className="quizzical-modal-content"
          style={{ color: dark ? "#aca7c8" : "darkslateblue" }}
        >
          {modal.content}
        </div>
        <div id="modal-footer" className="quizzical-modal-footer">
          {/* Cancel Button */}
          {modal.buttons !== null && modal.buttons.cancelLabel !== null && (
            <Button
              content={modal.buttons.cancelLabel}
              color="violet"
              size="large"
              inverted={dark ? true : false}
              onClick={handleCancelAction}
              basic
            />
          )}
          {/* Confirm Button */}
          {modal.buttons !== null && (
            <Button
              content={modal.buttons.okLabel}
              color="violet"
              size="large"
              inverted={dark ? true : false}
              onClick={handleOkAction}
            />
          )}
        </div>
      </div>
      <div
        id="modal-backdrop"
        className="modal-backdrop"
        style={{
          opacity: modal.show ? "100%" : "0%",
          height: modal.show ? "100%" : "0px",
        }}
      />
    </>
  );
}
