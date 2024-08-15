# context api

context api is used to avoid prop drilling where to send data from main.jsx to login.jsx we have to send it through app.jsx and other intermediate components who dont even use them.

A context is similar to a global variable , and properties of userContext can be accessed by all the components wrapped inside the context.provider. 

we create a js file for userContext.

we can also create loginContext , themeContext etc similarly.

to see how we create user context go to 'src/UserContext.js'

# context.provider

once we have created context then we create contextprovider in which we give access of values, to the components which are wrapped inside the provider.

so provider has prop - ' value ' where we write whichever variables or methods we want to give access to. we store them or pass them as an object.

usually we do all the api calls etc in contextprovider fn , and then directly pass those values into the context provider soo that whoever needs it can access the directly.


# useContext

using ' useContext ' we can access the properties provided by contextProvider.

we just need to import the context in our required component.

then we call useContext(contextName) for e.g useContext(UserContext) &
acces its variables or methods using destructuring.

we can learn about it in login.jsx and profile.jsx in './src/Components'  .
