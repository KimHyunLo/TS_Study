import Button from "../components/Button.tsx";
import { useSessionsContext } from "../store/sessions-context.tsx";

type UpcomingSessionProps = {
  onClose: () => void;
};

export default function UpcomingSession({ onClose }: UpcomingSessionProps) {
  const { sessions, cancelSession } = useSessionsContext();

  return (
    <div>
      <h2>Upcoming Sessions</h2>
      {sessions.length > 0 ? (
        <ul>
          {sessions.map((session) => (
            <li className="upcoming-session" key={session.id}>
              <div>
                <h3>{session.title}</h3>
                <p>{session.summary}</p>
                <time dateTime={new Date(session.date).toISOString()}>
                  {new Date(session.date).toLocaleDateString("en-US", {
                    day: "numeric",
                    month: "short",
                    year: "numeric",
                  })}
                </time>
              </div>
              <div className="actions">
                <Button
                  textonly="true"
                  onClick={() => cancelSession(session.id)}
                >
                  Cancel
                </Button>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <p>No Sessions have been booked</p>
      )}
      <div className="actions">
        <Button textonly="false" onClick={onClose}>
          Close
        </Button>
      </div>
    </div>
  );
}
