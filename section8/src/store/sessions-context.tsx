import { createContext, useContext, type ReactNode } from "react";
import { useSessionsReducer } from "../hooks/useSessionsReducer";

export type Session = {
  id: string;
  title: string;
  summary: string;
  description: string;
  duration: number;
  date: string;
  image: string;
};

export type SessionsState = {
  sessions: Session[];
};

type SessionsContextValue = SessionsState & {
  addSession: (session: Session) => void;
  cancelSession: (id: string) => void;
};

const SessionsContext = createContext<SessionsContextValue | null>(null);

type SessionsContextProviderProps = {
  children: ReactNode;
};

export default function SessionsContextProvider({
  children,
}: SessionsContextProviderProps) {
  const { sessionsState, dispatch, sessionsAction } = useSessionsReducer();

  const value: SessionsContextValue = {
    sessions: sessionsState.sessions,
    addSession: (session) => {
      dispatch({ type: sessionsAction.ADD_SESSION, payload: session });
    },
    cancelSession: (id) => {
      dispatch({ type: sessionsAction.CANCEL_SESSION, payload: id });
    },
  };

  return (
    <SessionsContext.Provider value={value}>
      {children}
    </SessionsContext.Provider>
  );
}

export function useSessionsContext() {
  const context = useContext(SessionsContext);

  if (context === null) {
    throw new Error("SessionsContext is null");
  }

  return context;
}
