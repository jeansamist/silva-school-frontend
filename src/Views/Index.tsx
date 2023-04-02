import { FunctionComponent, useContext } from "react";
import { Outlet } from "react-router-dom";
import { FiGrid, FiHome } from "react-icons/fi";
import { Sidebar, SidebarLinkCategory, SidebarLink, Brand, Footer, Flexbox } from "@silva-school-frontend/ui";
import { AuthContext } from "../Contexts/AuthContext";
import { logo } from "../Components/Logo";
import { useApi } from "@silva-school-frontend/hooks";
export const Index: FunctionComponent = () => {
  const auth = useContext(AuthContext);
  const { BAKEND_URL } = useApi();
  const BRAND = new Brand(
    "left",
    "text",
    (
      <div>
        <Flexbox className="aic" gap>
          <img
            src={typeof auth.current_school?.image === "string" ? BAKEND_URL + auth.current_school?.image : logo}
            alt=""
            style={{ width: 35, borderRadius: "50%" }}
          />
          <div>{auth.current_school?.name}</div>
        </Flexbox>
      </div>
    )
  );
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
