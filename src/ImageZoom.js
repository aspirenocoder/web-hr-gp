import React, { useState, useRef } from "react";

const ImageZoom = () => {
  const [scale, setScale] = useState(1);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const imageRef = useRef(null);

  const Modal = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    return ReactDOM.createPortal(
      <div className="modal-overlay">
        <div className="modal">
          <button className="modal-close-btn" onClick={onClose}>
            Close
          </button>
          <h2>This is a Popup/Modal</h2>
          <p>This is some content inside the modal.</p>
        </div>
      </div>,
      document.getElementById("modal-root")
    );
  };

  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <div className="btn-container">
      <h1>React Popup/Modal Example</h1>
      <button onClick={openModal}>Open Modal</button>
      <Modal isOpen={isOpen} onClose={closeModal} />
    </div>
  );
};
