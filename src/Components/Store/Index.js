import { configureStore } from "@reduxjs/toolkit";
import { createAction, createReducer } from "@reduxjs/toolkit";

export const dataStateFunction = createAction("dataStateFunction");
export const dataStateFunction2 = createAction("dataStateFunction2");
export const isActiveAction = createAction("isActiveAction");
export const varForFormAction = createAction("varForFormAction");
export const popupActiveAction = createAction("popupActiveAction");
export const dataStateForCartAction = createAction("dataStateForCartAction");
export const stateForRenderingAction = createAction("stateForRenderingAction");
export const inputValueForFilteringAction = createAction(
  "inputValueForFilteringAction"
);

const initialState = {
  dataStateWholeSale: [],
  dataStateDailyUsage: [],
  isActive: false,
  varForForm: 5,
  displayFormOneTime: "formwilldisplayonce",
  user: { name: "Ajay", password: "" },
  popUpActive: false,
  dataStateForCart: [],
  stateForRendering: false,
  inputValueForFiltering: "",
};
// *
// *
// *
// * Through createSlice method,
// *
// *
// const sliceReducer = createSlice({
//   name: "firstSlice",
//   initialState,
//   reducer: {
//     dataStateFunction(state, action) {
//       state.dataState = state.dataState + action.payload;
//     },
//     general(state) {
//       state.dataState = state.dataState + 5;
//     },
//   },
// });
// *
// *
// *
// * The map object notation
// *
// *
// const sliceReducer = createReducer(initialState, {
//   [dataStateFunction]: (state, action) => {
//     state.dataState = state.dataState + action.payload;
//   },
//   [general]: (state) => {
//     state.dataState = state.dataState + 5;
//   },
// });
// *
// *
// *
// * The builder callback notation
// *
// *
const sliceReducer = createReducer(initialState, (builder) => {
  builder.addCase(dataStateFunction, (state, action) => {
    state.dataStateWholeSale = action.payload;
    // state.dataStateWholeSale.push(...action.payload); **** This should not be used because this is pushing (adding) data on every reload of the page while the upper one is not pushing data to the array but assigning the data to the array.
  });
  builder.addCase(dataStateFunction2, (state, action) => {
    state.dataStateDailyUsage = action.payload;
  });
  builder.addCase(isActiveAction, (state, action) => {
    state.isActive = action.payload;
  });
  builder.addCase(popupActiveAction, (state, action) => {
    state.popUpActive = action.payload;
  });
  builder.addCase(dataStateForCartAction, (state, action) => {
    state.dataStateForCart = action.payload;
  });
  builder.addCase(inputValueForFilteringAction, (state, action) => {
    state.inputValueForFiltering = action.payload;
  });
  builder.addCase(stateForRenderingAction, (state, action) => {
    state.stateForRendering = action.payload;
  });
});

// *
export const store = configureStore({ reducer: sliceReducer });

export default store;
