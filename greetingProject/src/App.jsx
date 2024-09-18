import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  // const [count, setCount] = useState(0)
  //useState takes in two values, start value and function that updates the value
  //the 0 inside the parenthesis is the starting value we're feeding into count
  const [lang, setLang] = useState('Hello!')
  const [size, setSize] = useState(50)

  //three functions, two font size changers and language changer 

  //font size increasing func
  const sizePlus = () => {
    //using the setter function to change the size of the text, within the sizePlus function.
    //the sizePlus function will then be called, and then invoke the setSize setter function, which will then adapt the initial value we set.
    setSize(size + 10)
    console.log(setSize)
  }

  //font size decreasing func
  const sizeMinus = () => {
    setSize(size - 10)
    console.log(setSize)
  }

  // const changeLang = () => {
  //   setLang()
  // }


  return (
    <>
      {/* setting the style to size from useState so react can access and adjust it using CBFs made in JS/setSize method() that updates the sizing for you */}
      {/* importing lang as the value/text content of the header so it can be updated using the setLang func we established using react */}
      <h1 id="greeting" style={{ fontSize: size }} >{lang}</h1>
      {/* Using the curly brackets and importing the JS element established using useState allows us to use a dynamic JS element with script in the website  */}

      {/* Buttons to change the language and size of the greeting */}
      <section className="button" id="langButtons">

        {/* Add onclick funcs to the buttons so they change the header, by calling setLang and giving it a value to change lang to (on click, this button will change the value of the header from "Hello" to "Bonjour"!) */}
        <button className="button" id="english" onClick={() => { setLang("Hello!") }}>In English!</button>
        <button className="button" id="french" onClick={() => { setLang("Bonjour!") }}>In French!</button>
        <button className="button" id="spanish" onClick={() => { setLang("Hola!") }}>In Spanish!</button>
        <button className="button" id="hatianCreole" onClick={() => { setLang("Bonjou!") }}>In Hatian Creole!</button>
        <button className="button" id="portuguese" onClick={() => { setLang("Olá!") }}>In Portuguese!</button>
        <button className="button" id="korean" onClick={() => { setLang("안녕하세요!") }}>In Korean!</button>

      </section>

      <section className="button" id="sizeButtons">


        {/* Assigning the button the specific function that will be used to adjust the font size of the header */}
        {/* on click, we are using an anonymous function to readjust the size element of the header and invoking the sizeMinus/sizePlus function. Since the
        CBFs already set the size to size + or - 10 inside the adapter function of use state, setSize(), we don't have to call setSize() again. */}
        {/*  */}
        <button id="button1" onClick={() => sizeMinus()} > Quieter! </button>  <button id="button2" onClick={() => sizePlus()}> Louder! </button>
      </section>
    </>
  )
}

export default App
