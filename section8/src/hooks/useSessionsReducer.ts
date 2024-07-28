import { useReducer } from "react";
import { type Session, type SessionsState } from "../store/sessions-context";

const initialState: SessionsState = {
  sessions: [],
};

export const sessionsAction = {
  ADD_SESSION: "ADD_SESSION",
  CANCEL_SESSION: "CANCEL_SESSION",
} as const;

type AddSessionAction = {
  type: typeof sessionsAction.ADD_SESSION;
  payload: Session;
};

type CancelSessionAction = {
  type: typeof sessionsAction.CANCEL_SESSION;
  payload: string;
};

type SessionsActionType = AddSessionAction | CancelSessionAction;

function reducer(
  state: SessionsState,
  action: SessionsActionType
): SessionsState {
  switch (action.type) {
    case "ADD_SESSION":
      if (
        state.sessions.findIndex((session) => session.id === action.payload.id)
      ) {
        return { ...state, sessions: [...state.sessions, action.payload] };
      } else {
        return state;
      }
    case "CANCEL_SESSION":
      return {
        ...state,
        sessions: state.sessions.filter(
          (session) => session.id !== action.payload
        ),
      };
    default:
      return state;
  }
}

export function useSessionsReducer() {
  const [sessionsState, dispatch] = useReducer(reducer, initialState);
  return { sessionsState, dispatch, sessionsAction };
}
