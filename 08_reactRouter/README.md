# Outlet

We can do nesting inside outlet with the help of react-router-dom.

Layout or root file is made to make a layout of how the site will function by defining outlet.

Outlet is used where we want to keep the other components intact and create a base to do chnages.


# router

we can define router in two ways both are shown in src/main.jsx.

#useParams()

in react we can pass parameters to path using ' : ' this will be passed
as parameter to element.

then we can use 'useParams' hook to get that parameter and destructure it to display or use.

NOTE: the parameter passed in path should be exact same that we are using to destructure.


# Loader

loader is a parameter in route where we can pass loader Fn which will do the work for us as soon as we hover the mouse over element. it hels in optimizaton.

we use 'useLoaderdata()' hook to load the data from loader fn into a variable. and then we can use that variable to return values.