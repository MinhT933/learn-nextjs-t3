import React from "react";

export default function Toolip(props: any) {
  let { children } = props;
  // group-hover:flex hidden ẩn để khi nào hover sẽ hiện lên
  return (
    <div className="absolute inset-y-0 left-12 hidden items-center group-hover:flex">
      <div className="relative whitespace-nowrap rounded-md bg-white px-4 py-2 text-sm font-semibold drop-shadow-lg">
        <div className="absolute inset-y-0 -left-1 flex items-center">
          <div className="h-2 w-2 rotate-45 bg-slate-50" />
        </div>
        {children}
      </div>
    </div>
  );
}
