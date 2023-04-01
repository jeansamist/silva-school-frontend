import React, { PropsWithChildren, FunctionComponent, MouseEvent, ReactNode } from "react";
import { Heading } from "../Atoms/Heading";
import { Flexbox } from "../Containers/Flexbox";
import { AnimatePresence, motion as framerMotion } from "framer-motion";

export class Brand {
  constructor(
    public position: string = "left",
    public type: string = "text",
    public content: ReactNode = "Brand Content",
    public underlined: boolean = false,
    public width: number | string = 200,
    public onClick: (e: MouseEvent) => void = (e) => {
      return;
    }
  ) {}
}
export type HeaderProps = PropsWithChildren<{
  motion?: object;
  border?: boolean;
  className?: string;
  brand?: Brand;
  showBrand?: boolean;
  _toogle?: boolean;
  dark?: boolean;
}>;

export const Header: FunctionComponent<HeaderProps> = ({
  motion = {},
  children,
  border = false,
  className = "",
  brand = new Brand(),
  showBrand = true,
  _toogle = true,
  dark = false,
}) => {
  const brandRend = (
    <AnimatePresence>
      {brand.type === "text" && showBrand ? (
        <framerMotion.div {...motion} className="header-brand header-brand-text" onClick={brand.onClick}>
          <Heading underline={brand.underlined} type="4">
            {brand.content}
          </Heading>
        </framerMotion.div>
      ) : brand.type === "image" && showBrand ? (
        <framerMotion.div {...motion} className="header-brand header-brand-image" onClick={brand.onClick}>
          <img style={{ width: brand.width }} src={typeof brand.content === "string" ? brand.content : ""} alt="brand" />
        </framerMotion.div>
      ) : null}
    </AnimatePresence>
  );
  return (
    <header className={`header${border ? " header-border" : ""}${dark ? " header-dark" : ""}${className ? ` ${className}` : ""}`}>
      <Flexbox className={`aic${_toogle ? " jcsb" : " jcc"}`}>
        {brand.position === "left" && brandRend}
        <div className="header-content">{children}</div>
        {brand.position === "right" && brandRend}
      </Flexbox>
    </header>
  );
};
