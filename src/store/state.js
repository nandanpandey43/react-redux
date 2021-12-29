import { createStore, applyMiddleware } from "redux";
import { logger } from "./middlewares/logger";
import { reducer } from "./reducer";

// console.log(applyMiddleware);
// console.log(createStore);
export const store = createStore(reducer, applyMiddleware(logger));
