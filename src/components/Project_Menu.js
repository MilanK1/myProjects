import { Button } from 'antd';
 import "./projects.css"        
import { Menu, Dropdown, message } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import React, {useState} from 'react';
//import React, { useState } from 'react';
export default function OnHoverMenu(props){
    const [tempToDoHide, setTempToDoHide] = useState(props.toDoHide)


    const onClick = ({ key }) => {

        message.info(`Clicked on ${key}`);

        if(key == "ToDoList"){
           setTempToDoHide(!tempToDoHide)
           props.setToDoHide(tempToDoHide)
        }else{console.log("No work")}
      };
      
      const menu = (
        <Menu onClick={onClick}>
          <Menu.Item key="ToDoList">toDoList</Menu.Item>
          <Menu.Item key="Counter">Counter</Menu.Item>
          <Menu.Item key="Alphabet for children">Alphabet for children</Menu.Item>
        </Menu>
      );
    return(
       <div>
           <h1>Projects</h1>


  <Dropdown overlay={menu}>
    <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
     Hover to Unlock Projects<DownOutlined />
    </a>
  </Dropdown>,

           
       </div>


    )
}