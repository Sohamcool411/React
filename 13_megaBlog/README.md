# Mega Blog

In this project we are building a blogging website.

we are using backend as a service called Appwrite.

first we declare environment variables in .env file.

## .env

environment variables are the ones which we want to keep private even if then project is made open source.

then we create a conf folder where we store all the env variables in new variables in string format.

## appwrite services 

then we create appwrite folder to store all apwrite services such as authentication , databases and storage services.

we build these services with the help of documentation provided by appwrite.

also we build it in class object format and export a new object of that class.

we import  Client and Account from appwrite for auth service ,
and Databses , Query and Storage for congif service.

#### Client

Client is nothing but the application for which account and databases are being created or updated. we provide proect id and endpoints to this.


# Components

Next we create components for our website.

## Concept of forwardRef

using this we can create a component such as input component and use it in multiple places by passing the reference.

## react-hook-form (useForm)

### concept of register and handleSubmit.
the register automatically notes all the values in input fields and handleSubmit is a method or keyword which takes function as a parameter and executes it once the form is submitted.

hence we dont need to manage states individually as register does it for us.

check Login.jsx for example.

### register function:

You use the register function to register an input field with the form. This allows the library to track its value and perform validation.

### handleSubmit function:

This function wraps your form submission handler. When the form is submitted, it collects all the form data and passes it to your onSubmit function.

### ...register spread syntax:

This spread syntax ensures that the necessary props are passed to your input elements, including name, onChange, and onBlur.