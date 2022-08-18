import { DECREMENT, INCREMENT, RESET } from "../constant/actionTypes";

export const increment = (num) => {
  return {
    type: INCREMENT,
    payload: num,
  };
};

export const decrement = (num) => {
  return {
    type: DECREMENT,
    payload: num,
  };
};

export const reset = () => {
  return {
    type: RESET,
  };
};
