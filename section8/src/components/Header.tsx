import { useRef } from "react";
import Button from "./Button.tsx";
import Modal, { ModalHandle } from "./Modal.tsx";

export default function Header() {
  const modalRef = useRef<ModalHandle>(null);

  function handleClick() {
    modalRef.current?.open();
  }

  return (
    <div id="main-header">
      <h1>ReactMentoring</h1>
      <nav>
        <ul>
          <li>
            <Button to="/" textonly="true">
              Our Mission
            </Button>
          </li>
          <li>
            <Button to="/sessions" textonly="true">
              Browse Sessions
            </Button>
          </li>
          <li>
            <Button textonly="false" onClick={handleClick}>
              Upcoming Sessions
            </Button>
          </li>
        </ul>
      </nav>
      <Modal type="upcoming" ref={modalRef} />
    </div>
  );
}
