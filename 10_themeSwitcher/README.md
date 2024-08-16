# custom hook for useContext()

here we can use a shorter process to create and use context. This

first we will create a new context using createContext(), for e.g ThemeContext().

and we can also pass default values to createContext in form of object which we want to load as soon as page is rendered.

then we will also create and export a variable contextProvider which will store the value of context.provider. 
For e.g const ThemeProvider = ThemeContext.provider.

then we will create a custom hook which ww will export default so whenever any component wants to use our context they can direct access its variables using our hook.

e.g export default useTheme(){
    return useContext(ThemeContext)
}

soo instead of using useContext(ThemeContext) every time we will just use this hook.

# using contextProvider and hooks 

soo in app.jsx we can directly import and use ThemeProvider and wrap the content within it.

we will need to pass the values to it which we want to give acces to.

if the variables or methods we are giving in values are not defined we can define then inside app() fn, and pass them.

to use useTheme() hook we can go to ThemeBtn.jsx and direct get access to variables by destructuring the useTheme() which is exported by default from theme.js .

# darkMode 

in tailwind to use darkMode we have to set it to ' class ' in tailwind.config.js .

by default it is set to meadia which means it will show according to preference of your device. but we want it to change according to our className.


# difference between e.target and e.currentTarget 

e.target refers to the element which has triggered the event , where as e.currentTarget refers to element to which event handler is attached to.