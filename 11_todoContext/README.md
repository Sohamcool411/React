```Javascript

// First fn
const toggleComplete = (id) => {
    setTodos((prev) =>
      prev.map((prevTodo) =>
        prevTodo.id === id
          ? ({...prevTodo, completed: !prevTodo.completed})
          : prevTodo
      )
    );
  };

//Second fn

const toggleComplete = (id) => {
    setTodos((prev) =>
      prev.map((prevTodo) =>
        prevTodo.id === id
          ? (prevTodo.completed = !prevTodo.completed)
          : prevTodo
      )
    );
  };


```

First Function: It creates a new object for the updated todo using the spread operator {...prevTodo} and changes only the completed property. This approach respects React's principle of immutability—React can properly detect that a state change has occurred because a new object is returned.

Second Function: It directly mutates the existing prevTodo object by setting prevTodo.completed = !prevTodo.completed. This does not create a new object but instead modifies the original object. React does not detect changes in state when you mutate objects directly, so it may not trigger a re-render, leading to unexpected behavior.

# Local Storage 

# maps return new array , for each does not return anything.

