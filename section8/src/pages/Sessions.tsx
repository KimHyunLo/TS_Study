import Button from "../components/Button.tsx";
import { SESSIONS } from "../dummy-sessions.ts";

export default function SessionsPage() {
  return (
    <main id="sessions-page">
      <header>
        <h2>Available mentoring sessions</h2>
        <p>
          From an one-on-one introduction to React's basics all the way up to a
          deep dive into state mechanics - we got just the right session for
          you!
        </p>
      </header>
      <ul id="sessions-list">
        {SESSIONS.map((session) => (
          <li key={session.id}>
            <article className="session-item">
              <img src={session.image} alt={session.title} />
              <div className="session-data">
                <div>
                  <h3>{session.title}</h3>
                  <p>{session.summary}</p>
                </div>
                <p className="actions">
                  <Button to={`/sessions/${session.id}`} textonly="false">
                    Learn More
                  </Button>
                </p>
              </div>
            </article>
          </li>
        ))}
      </ul>
    </main>
  );
}
