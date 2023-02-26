import React from 'react';
import { createPortal } from 'react-dom';
import { ModalBackdrop, ModalWindow } from './Modal.styled';

const modalRoot = document.querySelector(`#modal-root`);

export class Modal extends React.Component {
  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }
  handleKeyDown = e => {
    const { onClose } = this.props;
    if (e.code === 'Escape') {
      onClose();
    }
  };

  clickToBackdrop = evt => {
    const { onClose } = this.props;
    if (evt.currentTarget === evt.target) {
      onClose();
    }
  };

  render() {
    const { onClose, children } = this.props;
    return createPortal(
      <ModalBackdrop onClick={this.clickToBackdrop}>
        <ModalWindow>
          <button onClick={onClose}>close</button>
          {children}
        </ModalWindow>
      </ModalBackdrop>,
      modalRoot
    );
  }
}
