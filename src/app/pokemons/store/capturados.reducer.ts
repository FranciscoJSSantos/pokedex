import { createStore } from "redux";

const inicialState = {
  data: [],
};

export function reducer(state = inicialState, action) {
  switch (action.type) {
    case "[Capturados] Add Capturado":
      const newCapturadosList = [...state.data, action.payload];

      return {
        ...state,
        data: newCapturadosList,
      };

    default:
      return state;
  }
}

export let STORE = createStore(reducer);
