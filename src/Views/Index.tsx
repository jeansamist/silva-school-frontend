import { FunctionComponent, useContext, useState } from "react";
import { Outlet } from "react-router-dom";
import { FiGrid, FiHome } from "react-icons/fi";
import { Sidebar, SidebarLinkCategory, SidebarLink, Brand, Footer, Flexbox, Toast, Alert } from "@silva-school-frontend/ui";
import { AuthContext } from "../Contexts/AuthContext";
import { ToastContext } from "../Contexts/ToastContext";
import { AlertContext } from "../Contexts/AlertContext";
import { logo } from "../Components/Logo";
import { useApi } from "@silva-school-frontend/hooks";
import { FiUserPlus } from "react-icons/fi";
import { FiPenTool } from "react-icons/fi";
import { FiEdit } from "react-icons/fi";
import { FiEdit2 } from "react-icons/fi";
import { FiEdit3 } from "react-icons/fi";
export const Index: FunctionComponent = () => {
  const auth = useContext(AuthContext);
  const { toasts } = useContext(ToastContext);
  const { alerts } = useContext(AlertContext);
  const [sidebarStatus, setsidebarStatus] = useState(true);
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
    new SidebarLinkCategory("Counter", [new SidebarLink("Student Enrolling", "/studentenrolling", FiUserPlus)]),
    new SidebarLinkCategory("Professor", [new SidebarLink("Note Register", "/noteregister", FiEdit3)]),
  ];
  return (
    <div className={"main-container " + (!sidebarStatus && " open")}>
      <div>
        <Sidebar
          brand={BRAND}
          links={LINKS}
          onToggle={() => setsidebarStatus(!sidebarStatus)}
          userName={auth.user !== false ? `${auth.user?.first_name} ${auth.user?.last_name}` : ""}
          userRole={auth.user !== false ? `@${auth.user?.username}` : ""}
        />
      </div>
      <div className="wraper">
        <Outlet />
        <Footer className="mt-1 tac">&copy; Silva {new Date().getFullYear()}</Footer>
      </div>
      <div className="toasts-container">
        {toasts.map((toast, key) => (
          <Toast {...toast} key={key} />
        ))}
        {alerts.map((alert, key) => (
          <Alert {...alert} key={key} />
        ))}
      </div>
    </div>
  );
};
