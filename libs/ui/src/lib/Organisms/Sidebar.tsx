import React, { PropsWithChildren, FunctionComponent, useEffect, useState, useRef, ReactNode } from "react";
import { Header, Brand } from "../Molecules/Header";
import { FiMenu, FiHome, FiSquare, FiLogOut } from "react-icons/fi";
import { Footer } from "../Atoms/Footer";
import { Heading } from "../Atoms/Heading";
import { Flexbox } from "../Containers/Flexbox";
import { Avatar } from "../Atoms/Avatar";
import avatar from "./../../assets/images/avatars/avatar (1).png";
import logo from "./../../assets/images/silva-logo-colors-png.png";
import { AnimatePresence, motion } from "framer-motion";
import { IconType } from "react-icons";
export class SidebarLink {
  constructor(public label: string = "Link", public to: string = "/", public icon: IconType, public active: boolean = false) {}
}

export class SidebarLinkCategory {
  constructor(public category: string = "Category", public links: SidebarLink[]) {}
}
export type SidebarProps = PropsWithChildren<{
  links: SidebarLinkCategory[];
  brand: Brand;
  userAvatar?: string;
  userName?: ReactNode;
  userRole?: ReactNode;
}>;
function SidebarLinkJSX({ to = "/", Ico = FiSquare, label = "Link", active = false, opened = true, _ = true }) {
  const [_active, setactive] = useState(active);
  useEffect(() => {
    setactive(active);
  }, [active]);

  return (
    <a href={to} className={"sidebar-link" + (_active ? " active" : "") + (!_ ? " flex aic jcc" : "")}>
      <div className="ico">
        <Ico className="flex lh-0" size={20} />
      </div>
      <AnimatePresence>
        {opened ? (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="label">
            {label}
          </motion.div>
        ) : (
          ""
        )}
      </AnimatePresence>
    </a>
  );
}
export const Sidebar: FunctionComponent<SidebarProps> = ({
  links = [
    new SidebarLinkCategory("Overview", [new SidebarLink("Home", "/", FiHome, true)]),
    new SidebarLinkCategory("Links", [
      new SidebarLink("Link label", "/", FiSquare),
      new SidebarLink("Link label", "/", FiSquare),
      new SidebarLink("Link label", "/", FiSquare),
    ]),
  ],
  brand = new Brand("left", "image", logo, false, 100),
  userAvatar = avatar,
  userName = "BAHA Ephraim",
  userRole = "Administrator",
}) => {
  const linksRef = useRef<HTMLDivElement>(null);
  const [opened, setopened] = useState(true);
  const [_opened, set_opened] = useState(true);
  useEffect(() => {
    if (linksRef.current) {
      linksRef.current.querySelectorAll(".sidebar-link").forEach((element) => {
        element.addEventListener("click", () => {
          if (linksRef.current) {
            linksRef.current.querySelector(".active")?.classList.remove("active");
          }
          element.classList.add("active");
        });
      });
    }
    window.onresize = () => {
      if (window.innerWidth <= 500 && opened) {
        set_opened(!_opened);
        setTimeout(() => {
          setopened(!opened);
        }, 300);
      } else if (!opened) {
        setopened(!opened);
        setTimeout(() => {
          set_opened(!_opened);
        }, 300);
      }
    };
  });
  return (
    <AnimatePresence>
      <div className={`sidebar${!opened ? " sidebar-close" : ""}`}>
        <div className="sidebar-brand">
          <Header
            className="sidebar-header"
            brand={brand}
            motion={{
              layout: true,
              initial: { opacity: 0, x: "100%" },
              animate: { opacity: 1, x: 0 },
              exit: { opacity: 0, x: "-100%" },
              transition: { duration: 0.3 },
            }}
            showBrand={_opened}
            _toogle={opened}
          >
            <FiMenu
              className="menu-btn flex lh-0"
              size={20}
              onClick={() => {
                if (opened) {
                  set_opened(!_opened);
                  setTimeout(() => {
                    setopened(!opened);
                  }, 300);
                }
                if (opened === false) {
                  setopened(!opened);
                  setTimeout(() => {
                    set_opened(!_opened);
                  }, 300);
                }
              }}
            />
          </Header>
        </div>
        <div className="sidebar-content">
          <div className="sidebar-links" ref={linksRef}>
            {links.map((category, key) => (
              <React.Fragment key={key}>
                {category.category ? (
                  <AnimatePresence>
                    {_opened ? (
                      <motion.div layout initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="category-name">
                        {category.category}
                      </motion.div>
                    ) : (
                      <div className="fake-category-name"></div>
                    )}
                  </AnimatePresence>
                ) : (
                  ""
                )}
                {category.links.map((_link, _key) => (
                  <SidebarLinkJSX {..._link} opened={_opened} _={opened} key={_key} />
                ))}
              </React.Fragment>
            ))}
          </div>
        </div>
        <div className="sidebar-footer">
          <Footer>
            <Flexbox className={`aic${opened ? " jcsb" : " jcc"}`}>
              <Flexbox gap className="aic">
                <Avatar image={userAvatar} />
                <AnimatePresence>
                  {_opened ? (
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                      <Heading type="5">{userName}</Heading>
                      <div style={{ color: "var(--colorInfo)", fontSize: "var(--body2)" }}>{userRole}</div>
                    </motion.div>
                  ) : (
                    ""
                  )}
                </AnimatePresence>
              </Flexbox>
              <AnimatePresence>
                {_opened ? (
                  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                    <FiLogOut className="flex lh-0" size={25} />
                  </motion.div>
                ) : (
                  ""
                )}
              </AnimatePresence>
            </Flexbox>
          </Footer>
        </div>
      </div>
    </AnimatePresence>
  );
};
