import { FunctionComponent } from "react";
import { Outlet } from "react-router-dom";
import { FiGrid, FiHome } from "react-icons/fi";
import { Sidebar, SidebarLinkCategory, SidebarLink, Brand, Footer } from "@silva-school-frontend/ui";
export const Index: FunctionComponent = () => {
  const BRAND = new Brand("left", "text", "Silva School");
  const LINKS = [
    new SidebarLinkCategory("Overview", [new SidebarLink("Dashboard", "/", FiGrid, true), new SidebarLink("Classes Manager", "/classes", FiHome)]),
  ];
  return (
    <div className="main-container">
      <div>
        <Sidebar brand={BRAND} links={LINKS} />
      </div>
      <div className="wraper">
        <Outlet />
        <Footer className="mt-1 tac">&copy; Silva {new Date().getFullYear()}</Footer>
      </div>
    </div>
  );
};
