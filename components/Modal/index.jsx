import React from "react";
import { RxCross2 } from "react-icons/rx";
import Modal from "@mui/material/Modal";
import styles from "./styles.module.scss";
import { useEffect } from "react";
const Index = ({
  children,
  buttonIcon,
  showModal = false,
  enableCloseButton,
  showButton = true,
  buttonContent = "Open modal",
  styleType = "defaultStyle",
}) => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(showModal);
  const handleClose = ()=>{
    console.log("close");
    setOpen(false);
  }
 
  
  return (
    <div className={`${styles[styleType]} ${styles.__modal}`}>
      {showButton && (
        <button
          className={styles.__modal__button}
          type={"button"}
          onClick={handleOpen}
        >
          {buttonIcon?  buttonIcon: buttonContent}
        </button>
      )}

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <div className={styles.__modal__content}>
          {enableCloseButton && (
            <button
              className={styles.__modal__content__close}
              type={"button"}
              onClick={handleClose}
            >
              <RxCross2 />
            </button>
          )}
          {children}
        </div>
      </Modal>
    </div>
  );
};

export default Index;
