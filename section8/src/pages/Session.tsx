import { useRef } from "react";
import { useParams } from "react-router-dom";

import { SESSIONS } from "../dummy-sessions.ts";
import Button from "../components/Button.tsx";
import Modal, { type ModalHandle } from "../components/Modal.tsx";

export default function SessionPage() {
  const params = useParams<{ id: string }>();
  const modalRef = useRef<ModalHandle>(null);

  const sessionId = params.id;
  const loadedSession = SESSIONS.find((session) => session.id === sessionId);

  if (!loadedSession) {
    return (
      <main id="session-page">
        <p>No session found!</p>
      </main>
    );
  }

  function handleBooking() {
    modalRef.current?.open();
  }

  return (
    <main id="session-page">
      <article>
        <header>
          <img src={loadedSession.image} alt={loadedSession.title} />
          <div>
            <h2>{loadedSession.title}</h2>
            <time dateTime={new Date(loadedSession.date).toISOString()}>
              {new Date(loadedSession.date).toLocaleDateString("en-US", {
                day: "numeric",
                month: "short",
                year: "numeric",
              })}
            </time>
            <p>
              <Button textonly="false" onClick={handleBooking}>
                Book Session
              </Button>
            </p>
          </div>
        </header>
        <p id="content">{loadedSession.description}</p>
      </article>
      <Modal type="booking" ref={modalRef} session={loadedSession} />
    </main>
  );
}
