import React from 'react'
import Child from '../Components/Child';
import {useRef,useState} from 'react'
import {Link} from 'react-router-dom';
import ChildCSS from '../Components/DemoCSS/ChildCSS';
import DemoStyled from '../Components/DemoStyled/DemoStyled';

function ExamplePage() {
    const inputRef = useRef();
  const inputRef1 = useRef();
  const [state,setState] = useState(0);
  console.log(inputRef)
  console.log(inputRef?.current);
  console.log(inputRef.current?.value)
  const func = () => {
    console.log(inputRef.current.value);
    inputRef.current.value = "New Value"
  }
  const funcWithRender = () => {
    console.log(inputRef.current.value);
    inputRef1.current.value = inputRef.current.value + " " + state;
    setState( x=> x+1);
  }
  return (
    <div>
      <Link to='/'>Home Page</Link>
    <header>
      <p>
        React Lesson On 11_04_2022
        Yosef Levy
      </p>
      <h2>useRef in 'react'</h2>
      <p>useRef can hold a refrence to any object</p>
      <p>Syntax: const inputRef = useRef()</p>
      <p>using ex:  </p>
      <p>In our example we will use it to hold a referance to react input control </p>
      <input type="text" ref={inputRef} placeholder={"Enter"} onChange={func}/>
      <p>Here we have access to input control, we can get the value : refInput.current.value</p>
      <p>We can add to the Input eventListner like onChange=  and from the ref get access to input props </p>
      <p>eventLister not render the application again</p>
      <span>1: </span><input type="text" ref={inputRef} placeholder={"This will add option to render"} onChange={funcWithRender}/>
      
      <p>useRef not cause to render, So if you want to change value or any props you then need to do some operation to render the app</p>
      <p>The input below use state,  therfor we can pass data back to the second input</p>
      <p>if you for example enter text in input 1 </p>
      <p>Then you can see it in input 2</p>
      <span>2:</span><input type="text" ref={inputRef1} placeholder={"This Get Value from theupper input"} />
      <hr></hr>
      <Child/>
      <h2>Custom Hook</h2>
      <p>We are going to build Custom Hook <b>useFetch</b> </p>
      <Link to='/fetch'><b>useFetch Hook Example</b></Link>
      <p><b>useFetch</b> will recive URL and return [data, isFetching,api] </p>
      <p>hook is a simple JS function that return some object that we can use</p>
      <p>We are using:</p>
      <ul><li> useState for the data</li><li>useState for the loader state</li><li>api an access to the fetch fuctions</li></ul>
      <hr></hr>
      <h2>React css</h2>
      <h3>Inline Style</h3>
      <p>style={"{object of css rpoperties} ex: {prop1: value1, prop2: value2}"}</p>
      <p>React css prop are similar to css .<b>BUT:</b> {"if you have hypen sign like margin-top it become marginTop"}</p>
      <p style={{marginLeft:'100px',color:'red'}}>My style {"marginLeft:'100px',color:'red'"} </p>
      <hr></hr>
      <h3>css file for component</h3>
      <ChildCSS option={1}/>
      <hr></hr>
      <h3><b>css module for define style for specific component</b></h3>
      <p>In the regular css it considering global, therefor can affect othe components</p>
      <p><u>To define specific componet css we need</u></p>
      <ul><li>create css in the folowing: <b>{'"component name".module.css'}</b></li>
      <li>importing: <b>{'import style from "the css file"'}</b></li>
      <li>using: {"className=style.left (where left is the class name in the  file)"}</li>
      </ul>
      <ChildCSS option={2}/>
      <hr></hr>
       <h3>Styled Component libary</h3>
       <p><b>link to site:</b> https://styled-components.com/</p>
       <p><b>link to npm:</b> https://www.npmjs.com/package/styled-components</p>
       <p>Enable clean code with not alot classes in the code.</p>
       <p>the Style is became a componet</p>
       <p><b>npm:</b> npm install styled-components</p>
       <p><b>file name:</b> "Componenet name".style.js</p>
       <p><b>inport:</b> import styled from 'styled-components'</p>
       <p><b>Create:</b></p>
       <p>const Title = styled.h1`</p>
       <p>here you put regular css code</p>
       <p>`;</p>
       <DemoStyled/>
        <hr></hr>
        <h2>Summary</h2>
        <p>learn all the basic blockes we learned</p>
        <h3>Resources</h3>
        <ul>
          <li>
            Move faster with intuitive React UI tools: https://mui.com/
            <p>We use a built in complete COMPONENTS</p>
            </li>
          <li>tailwindcss : https://tailwindcss.com/
            <p>css libary like bootstrup, bu more popular</p>
          </li>
        </ul>
      
    </header>
  </div>
  )
}

export default ExamplePage