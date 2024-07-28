import { useRef, type FormEvent } from "react";
import Input from "../components/Input.tsx";
import Button from "../components/Button.tsx";
import { Session, useSessionsContext } from "../store/sessions-context.tsx";

type BookSessionProps = {
  onClose: () => void;
  session: Session;
};

export default function BookSession({ onClose, session }: BookSessionProps) {
  const formRef = useRef<HTMLFormElement>(null);
  const { addSession } = useSessionsContext();

  function handleCancel() {
    formRef.current?.reset();
    onClose();
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const data = Object.fromEntries(formData);

    if (!data.name || !data.email) {
      alert("Please fill in the form");
    } else {
      addSession(session);
      onClose();
      event.currentTarget.reset();
    }
  }

  return (
    <form onSubmit={handleSubmit} ref={formRef}>
      <h2>Book Session</h2>
      <Input className="control" label="your name" id="name" />
      <Input type="email" className="control" label="your email" id="email" />
      <div className="actions">
        <Button type="button" textonly="true" onClick={handleCancel}>
          Cancel
        </Button>
        <Button textonly="false">Book Session</Button>
      </div>
    </form>
  );
}
