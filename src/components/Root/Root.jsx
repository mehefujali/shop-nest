import { Outlet } from "react-router-dom";
import Nav from "../Nav/Nav";

const Root = () => {
      return (
            <div>
                  <Nav></Nav>
                  <div className=" mt-12">
                        <Outlet></Outlet>
                  </div>
            </div>
      );
};

export default Root;