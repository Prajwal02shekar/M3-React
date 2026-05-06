---> React JS <--
-> React JS is a JS library which is used to develop a SPA.

--> Diff between SPA and MPA

--> Single Page Application
1.Having only one html page
2.Rendering time is very less
3.It will continue the request
4.Example:Instagra,Gmail,Linkdin

--> Multi Page Application
1.Having only multiple html pages
2.Rendering time is more
3.It will start from the scratch
4.Example:W3Schools,Javapoint,etc..


--> Diff between Library and Framework

--> Library
1.library is a collection of predefined codes.
2.Rules are less
3.Examples: React JS,Moment JS,JQuery

--> Framwork
1.Framework is a collection of library
2.Rules are more
3.Examples: Angular JS,Vue JS,Next JS

--> History of React JS <--
-> React JS was introduced by facebook company in 2011 by Jorden Walke
-> React JS has been used by facebook for 2 years
-> Recat Js has been used by instagram in 2012
-> They declared React JS has open sourece in May 2013


--> Features Of React JS
1.React JS is a JS library
2.Component Based Architecture
3.Open Source language
4.It is used to build SPA
5.Declartive
6.Unidirectional / one way data binding
7.It follows virtual dom

--> Instalation of react project
1.create vite@latest   -> to install latest version of vite way of react project
2.project-name         -> need to enter a project name
3.select a framework   -> select REACT [3rd option]
4.select a varient     -> select JAVASCRIPT [3rd option]
5.cd projectName       -> enter into particular project
6.npm install          -> to install node modules
7.npm run dev          -> to start the development server


--> Virtual DOM Concept <--

--> Real DOM 
-> Real DOM is the document at the end users can see it.

--> Virtual DOM
-> Virtual DOM is a copy of real DOM,it can also called as a clone copy of Real DOM

--> NOTE <--
-> Whatever the updates u do in react component will not reflect on real dom or on UI directly
-> It does all the manipulation in Virtual DOM itself and then renders those changes in the real dom 

--> Reconciliation 
-> The process of virtual dom comparing with the real dom and rendering all updated components into Real DOM  is called as reconcialiation

--> Diffing Algorithm
-> to achive reconcialiation process we use an algorithm is called as diffing algorithm

--> Patching
-> the process of updating missing node in dom tree is called as patching


---> React Internal Libraries <--
1.React
    ->It is a core library of react
    -> it contains functionalities to manage and maintain components, states and handling events
    -> import React from 'react

2.ReactDOM
    -> It is responsible for rendering the components into UI / into DOM tree
    -> import ReactDOM from 'react-dom/client'

---> Methods <--

1.CreateRoot()
    -> this method acts as a bridge connector between index.html and main.jsx files
    
2.render()
    -> It is used to render all the react elements into DOM
    -> It will render only string / jsx / components


---> Folder Structure <--
node-modules   
public
src
package.json
package.lock.json
index.html


index.html 
        -> entry point to project
        
node-modules
    -> all the pre-defined code are present in this folder (***do not touch***)

public
    -> it contains all media which is required for react app

package.json and package.lock.json
    -> These are two files where it is considered as directories of the react folder.
    -> It will give you all the information about libraries present in the project.

src
    -> It is a source folder where we are going to write the code.
    -> Inside src folder you have to maintain two important files i.e.
    1.main.jsx -> it is a root file
    2.App.jsx  -> it is a parent /top level component