import React from 'react'
import {css} from '../DemoCSS/ChildDCSS.css';
import style from '../DemoCSS/ChildCSS.module.css'


const ChildCSS = ({option}) => {
  return (
    <>
    
    {
      option == 1 ? <div><h2>ChildCSS Component</h2><p>I am using css file ChildDCSS.css </p><p >Define css syntax: className={"the css class"}</p><p className='left'>{'I am className=left'}</p>
      </div> : 
      <div>
        <h1>ChildCSS Component As <b>module</b></h1>
        <div className={style.left}>i am {'style.left'}</div>
        </div>    
    }
    </>
  )
}

export default ChildCSS