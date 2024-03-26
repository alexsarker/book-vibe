import { Outlet } from "react-router-dom";
import Header from "./childrens/Header";

const Root = () => {
  return (
    <div className="container mx-auto">
      <Header></Header>
      <Outlet></Outlet>
    </div>
  );
};

export default Root;
