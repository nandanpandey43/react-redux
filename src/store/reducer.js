import data from "./data.json";

export const reducer = (state = data, action) => {
  //   console.log("reducer called");

  switch (action.type) {
    case "DELETE":
      return (state = []);
    case "ADD":
      return [
        ...state,
        {
          id: action.payload.id,
          name: action.payload.name,
        },
      ];
  }

  return state;
};
