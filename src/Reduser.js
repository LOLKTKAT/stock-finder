import { v4 as uuidv4 } from "uuid";

const id = uuidv4();

export default function reducer(state = [], action) {
  if (action.type === "ADDED_TO_WATCHLIST")
    return [
      ...state,
      {
        id: id,
        added: action.payload.true,
      },
    ];
  else if (action.type === "DELETED_FROM_WATCHLIST")
    return [state.filter((items) => state.id !== action.payload.id)];
}
