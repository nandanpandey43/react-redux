// redux middlewares uses the concept of currying

export const logger = (store) => (next) => (action) => {
  console.log("store ", store);
  console.log("action ", action);
  next(action);
};
