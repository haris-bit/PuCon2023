import React from "react";

const Navbar = ({ filterItem, menuList }) => {
  return (
    <>
      <nav className="navbar">
        <div className="btn-group">
          {/* // menuList is a list of strings (you can iterate it with a map method) */}
          {menuList.map((curElem) => {
            return (
              <button
                className="btn-group__item"
                onClick={() => filterItem(curElem)}
              >
                {curElem}
              </button>
            );
          })}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
