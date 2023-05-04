import React from "react";
import { Icon } from "@iconify/react";

import imgT from "../../public/img/toanhht.jpg";
import Toolip from "./Toolip";

export interface imgT {
  //   image: HTMLImageElement;
  src: string | imgT;
}
export default function Sidbar() {
  //gọi group để hover
  return (
    <div className="flex bg-gray-100 font-sans text-gray-900">
      <aside className=" flex h-screen w-18 items-center flex-col border-r border-gray-200 bg-white ">
        <div className="flex h-18 w-full items-center justify-center border-b border-gray-200">
          <Icon icon="emojione:letter-m" width="40" height="40" />
        </div>
        <nav className="flex flex-1 flex-col gap-y-4 pt-10 ">
          <a
            className="  rounded-xl group bg-gray-100 p-2 text-blue-400 hover:bg-gray-50 relative"
            href="#"
          >
            <Icon
              className="h-6 w-6 fill-current"
              icon="material-symbols:add-box-outline"
            />
            <Toolip> Thêm phần tử</Toolip>
          </a>
          <a
            className="rounded-xl group bg-gray-100 p-2 text-blue-400 hover:bg-gray-50 relative"
            href="#"
          >
            <Icon className="h-6 w-6 fill-current" icon="tabler:layout" />
            <Toolip> Thêm phần tử</Toolip>
          </a>
          <a
            className="rounded-xl group bg-gray-100 p-2 text-blue-400 hover:bg-gray-50 relative"
            href="#"
          >
            <Icon className="h-6 w-6 fill-current" icon="vaadin:palete" />
            <Toolip> Thêm phần tử</Toolip>
          </a>

          <a
            className="rounded-xl group bg-gray-100 p-2 text-blue-400 hover:bg-gray-50 relative"
            href="#"
          >
            <Icon
              className="h-6 w-6 stroke-current"
              icon="mdi:file-document-box-outline"
            />
            <Toolip> Thêm phần tử</Toolip>
          </a>
        </nav>
        <div className="flex flex-col items-center gap-y-4 py-10">
          <button className="rounded-xl group p-2 text-gray-400  hover:bg-gray-50 relative">
            <Icon
              className="h-6 w-6 stroke-current"
              icon="mdi:alert-circle-outline"
            />
            <Toolip> Thêm phần tử</Toolip>
          </button>{" "}
          <button className="rounded-xl group  p-2 text-gray-400  hover:bg-gray-50 relative">
            <Icon
              className="h-6 w-6 stroke-current"
              icon="icon-park-solid:setting"
            />
            <Toolip> Thêm phần tử</Toolip>
          </button>
          {/* rounded full  làm cho tấm hình tròn l*/}
          <button className=" overflow-hidden rounded-full">
            <picture>
              <img
                className="h-10 w-10 object-cover"
                src={imgT.src}
                alt="hihi"
              />
            </picture>
          </button>
        </div>
      </aside>
    </div>
  );
}
