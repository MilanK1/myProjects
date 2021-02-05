import { Button } from 'antd';
 import "./projects.css"        
import { Menu, Dropdown, message } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import React, { useState } from 'react';
import OnHoverMenu from "./Project_Menu.js";
export default function ProjectUseState(props){
   const [toDoListHide, setToDoListHide]=useState(false);
   const [counterhide, setCounterHide]=useState(false);
   const [alphabetHide, setAlpabetHide]=useState(false);
   
console.log(toDoListHide)
    return(
       <div>
          <OnHoverMenu toDoHide = {toDoListHide} setToDoHide = {setToDoListHide}/>
          <br/>
          {toDoListHide ?
(<div><iframe src="https://codesandbox.io/s/g7io6" width="1700px" height="700px"></iframe></div>)
:
console.log("Nope")
}
       </div>


    )
}