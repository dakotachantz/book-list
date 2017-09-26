//select book is an action creator, it will need an action type

export const selectBook = book => ({
  //You should create a Type and Payload for your Action here
  type: "SELECT_BOOK",
  payload: book
});

// export const addTodo = newTodo => ({ type: ADD_TODO, payload: newTodo });
