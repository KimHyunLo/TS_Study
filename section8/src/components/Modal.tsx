import { forwardRef, useImperativeHandle, useRef } from "react";
import { createPortal } from "react-dom";
import BookSession from "../modals/BookSession.tsx";
import UpcomingSession from "../modals/UpcomingSession.tsx";
import { Session } from "../store/sessions-context.tsx";

export type ModalHandle = {
  open: () => void;
};

type ModalProps = {
  type: "booking" | "upcoming";
  session: Session;
};

const Modal = forwardRef<ModalHandle, ModalProps>(function Modal(
  { type, session },
  ref
) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const root = document.getElementById("modal-root");

  if (root === null) return;

  useImperativeHandle(ref, () => {
    return {
      open: () => {
        dialogRef.current?.showModal();
      },
    };
  });

  function handleCancel() {
    dialogRef.current?.close();
  }

  return createPortal(
    <dialog className="modal" ref={dialogRef}>
      {type === "booking" ? (
        <BookSession onClose={handleCancel} session={session} />
      ) : (
        <UpcomingSession onClose={handleCancel} />
      )}
    </dialog>,
    root
  );
});

export default Modal;
