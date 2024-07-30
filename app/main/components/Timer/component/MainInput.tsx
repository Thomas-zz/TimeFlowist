import { Input } from "antd";
import { useReducer } from "react";

type State = {
  matters: string;
  project: string;
};

type Action = {
  type: string;
  payload: string;
};

const reducer = (state: State, action: Action) => {
  switch (action.type) {
    case "SET_MATTERS":
      return { ...state, matters: action.payload };
    case "SET_PROJECT":
      return { ...state, project: action.payload };
    default:
      return state;
  }
};

const initialState: State = {
  matters: "",
  project: ""
};

const MainInput  = () => {

  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      <Input 
        value={state.matters} 
        onChange={(e) => dispatch({ type: "SET_MATTERS", payload: e.target.value })}
      />
    </div>
  );
}

export default MainInput;