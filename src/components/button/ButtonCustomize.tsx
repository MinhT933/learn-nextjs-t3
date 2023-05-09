import React from "react";

export default function ButtonCustomize(props: any) {
  let { className, children } = props;
  return <button className={className}>{children}</button>;
}
