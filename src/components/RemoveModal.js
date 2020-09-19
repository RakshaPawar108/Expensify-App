import React from "react";
import Modal from "react-modal";

const RemoveModal = (props) => (
  <Modal
    isOpen={!!props.promptRemove}
    onRequestClose={props.handleClearPromptRemove}
    contentLabel="Are you sure you want to remove this expense?"
    closeTimeoutMS={200}
    className="modal"
    appElement={app}
  >
    <p className="modal__title">
      Are you sure you want to remove this expense?
    </p>
    <div className="input-group modal-input">
      <button
        className="button button--delete input-group__item"
        onClick={props.onRemoveConfirm}
      >
        Remove
      </button>
      <button
        className="button button--secondary input-group__item"
        onClick={props.handleClearPromptRemove}
      >
        Cancel
      </button>
    </div>
  </Modal>
);

export default RemoveModal;
