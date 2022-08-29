import { border } from "@mui/system";
import React from "react";
interface ContainerProps {
  children?: any;
  style?: React.CSSProperties;
}

export const Container = (props: ContainerProps) => {
  const { children, style } = props;
  return (
    <div
      style={{
        ...style,
      }}
    >
      {children}
    </div>
  );
};
