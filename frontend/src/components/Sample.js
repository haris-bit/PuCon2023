import React, { useState } from "react";
import "./style.css";
import Menu from "./menuApi.js";
import MenuCard from "./MenuCard";
import Navbar from "./Navbar";
import NavbarBootstrap from "./NavbarBootstrap";

const uniqueList = [
  // spread operator only gives the value instead of the key
  ...new Set(
    Menu.map((curElem) => {
      return curElem.category;
    })
  ),
  "All",
];

// console.log(uniqueList);

const Sample = () => {
  // state hooks
  const [menuData, setMenuData] = useState(Menu);
  const [menuList, setMenuList] = useState(uniqueList);

  const filterItem = (category) => {
    if (category === "All") {
      setMenuData(Menu);
      return;
    }
    const updatedList = Menu.filter((curElem) => {
      return curElem.category === category;
    });
    setMenuData(updatedList);
  };

  return (
    <>
      {/* <Navbar filterItem={filterItem} menuList={menuList} /> */}
      <MenuCard menuData={menuData} />
    </>
  );
};

export default Sample;
