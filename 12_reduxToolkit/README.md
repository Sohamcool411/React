# redux

1) create store
2) create slice
3) export slice using sliceName.reducer
4) import slice to store 
5) useDispatch() to change the vaues in store or state by passing reducer Fn.
6) useSelector() to access state from store.

# proxy(array)

Why do I see a Proxy?

Redux Toolkit's createSlice and createReducer helper functions allow you to write reducers where you directly modify the state variable. This can save a lot of code and a lot of headaches compared to writing reducers the traditional way, where you must always return a new state object and cannot mutate any values of your state.

It is okay to "mutate" the state variable in a Redux Toolkit reducer because this state variable is not your actual state. It is a Proxy object. Specifically, it is a Immer draft.

The basic idea is that with Immer you will apply all your changes to a temporary draft, which is a proxy of the currentState. Once all your mutations are completed, Immer will produce the nextState based on the mutations to the draft state. This means that you can interact with your data by simply modifying it while keeping all the benefits of immutable data.

# current()

The current function is a way to access the current state of the draft object for debugging. Otherwise, you would see the draft itself which is a Proxy and that's not very helpful. 

You probably won't ever use current for anything other than console logging.

This function is part of the Immer package and it is re-exported by Redux Toolkit specifically for this purpose.

The current function from the immer library, which takes a snapshot of the current state of a draft and finalizes it (but without freezing).

 Current is a great utility to print the current state during debugging, and the output of current can also be safely leaked outside the producer.
