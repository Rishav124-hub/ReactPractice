# ReactPractice LearnReact

* React is library not a frameWork;
* It is OpenSource Libary for building User InterFace

<!-- Cannot create a project named "helloWorld" because of npm naming restrictions.

  * name can no longer contain capital letters  While creating a project -->
# To create a project in react the command is<!-- "npx create-react-app <projectName>" -->
        "npx create-react-app hello-world"

# Component
  Components Describe the part of the user Interface
  They are re-usable and can be used in other Component.
  * Component Type
    1. StateLess Functional Component
    2. Stateful Class Component


# functional Component
  1. Simple function
  2. Absence of 'this' keyword
  3. Solution without using state
  4. Mainly responsible for the UI
  5. Stateless/Dumb/presentational

# CLass Component
  1. More feature Rich
  2. Maitain their own Private Data
  3. Complex UI logic
  4. Provide Lifecycle hooks
  5. Stateful/Smart/Container

* By using JSX we can make code easy with respect to without using the JSX

* Today I Learn About:
  1. SetState-(Counter.js)
  2. State- (Message.js)
  3. Props- (Greet.js,Welcome.js)
  * I learn many thing like creating Function Classes etc

* rfce for creating a basic function structure
* rce for creating abasic class component

* Event binding using 4 ways (EventBind.js)
  1. using binding property in render 
  2. arrow function in render
  3. binding in constructor
  4. arrow function in class

* Today I learn about If else and map function

* today I learn about css 
 1. If we use file name like app.css 
   1. we can use this css file any where without importing this in other file
  2. but if we use file name like app.module.css
   1. then we can only use this css file in which i have imported

* Today I learned order of Component Mounting LifeCycle Method
  1. constructor
  2. getDerivedStateFromProps
  3. render
  4. componentDidMount
* Today I learned order of Component Udate LifeCycle Method
  1. getDerivedStateFromProps
  2. shouldComponentUpdate
  3. render
  4. getSnapshotBeforeUpdate

* React fragment tag revove extra container tag and merge it to main tag
  * And in this we can also use key attribute
  * and we can also use <> tag for work as a react fragment tag but in this we can't use key attributes

*  PureComponent implement  the shouldComponentUpdate lifeCycle method performing a shallow a comparison on the props and state of component
  * Pure component not re-render Unnessecerly
  * it render only when there is change in prevState and currentState 
  * It is also good  idea to ensure that all the children component are also pure to avoid unexpected  behaviour

* PureComponent is same as MemoCOmponent 
  * Memo work with function ANd pure works with class
