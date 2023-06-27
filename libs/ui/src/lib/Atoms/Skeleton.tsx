import React, { FunctionComponent, ReactNode } from "react";
export type SkeletonProps = {
  width?: number | string;
  height?: number | string;
  quantity?: number;
  radius?: number | string;
  type?: "text" | "box";
  className?: string;
};
export const Skeleton: FunctionComponent<SkeletonProps> = ({ width, height, radius, quantity = 1, type = "text", className = "" }) => {
  const skeleton_lines: ReactNode[] = [];
  const styles = { width, height, borderRadius: radius };
  for (let i = 0; i < quantity; i++) {
    skeleton_lines.push(<div className="skeleton" style={styles}></div>);
  }
  return (
    <div className={`skeleton-container${className && " " + className}`}>
      {type === "text" ? skeleton_lines : <div className="skeleton" style={styles}></div>}
    </div>
  );
};
