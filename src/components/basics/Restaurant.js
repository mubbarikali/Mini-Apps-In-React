import React, { useState } from 'react'
import "./style.css";
import Menu from "./menuAPI.js";
import MenuCard from "./MenuCard"
import Navbar from './Navbar';


const uniqueList = [...new Set(Menu.map((cElement)=>{
    return cElement.category;

})), "All", ];
    console.log(uniqueList);


const Restaurant = () => {
  

const [menuData, setMenuData] = useState(Menu);
const [menuList, setMenuList] = useState(uniqueList);

const filterItem = (category)=>{

    if (category==='All') {
        return setMenuData(Menu);
    }

    const updatedList = Menu.filter((cElement)=>{
        return cElement.category === category;
    })
    setMenuData(updatedList);
    };

 
    return (
    <>

        <Navbar filterItem={filterItem} menuList={menuList}/>
        
        <MenuCard menuData={menuData} />
    </>
  )
};

export default Restaurant