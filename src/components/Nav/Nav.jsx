import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import './nav.css'
const Nav = () => {
      const [navs, setNavs] = useState([])
      useEffect(() => {
            fetch('nav.json')
                  .then(res => res.json())
                  .then(data => setNavs(data))
                  .catch(err => console.log(err))

      }, [])
      console.log(navs);

      return (
            <nav className=" bg-[#ff6e613a] py-4">
                  <div className=" flex container mx-auto justify-between items-center">
                        <div className=" flex items-center gap-5">
                              <img className=" w-8" src="https://i.ibb.co/QDmsSWL/shopnest-png.png" alt="" />
                              <h1 className=" text-2xl font-bold ">Shop Nest</h1>
                        </div>
                        <div>
                              <ul className=" flex items-center gap-7 font-semibold text-lg" id="nav">
                                    {
                                          navs.map((nav, idx) => <NavLink key={idx} to={nav.path} >{nav.name}</NavLink>)
                                    }
                              </ul>
                        </div>
                  </div>
            </nav>
      );
};

export default Nav;