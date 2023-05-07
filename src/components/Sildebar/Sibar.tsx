import React, { Children } from "react";
import { Icon } from "@iconify/react";

import imgT from "../../../public/img/toanhht.jpg";
import Toolip from "./Toolip";

export interface imgT {
  //   image: HTMLImageElement;
  src: string | imgT;
}
export default function Sidbar() {
  //gọi group để hover
  return (
    <div className="flex bg-gray-100 font-sans text-gray-900">
      <aside className=" flex h-screen w-18 flex-col items-center border-r border-gray-200 bg-white ">
        <div className="flex h-18 w-full items-center justify-center border-b border-gray-200">
          <Icon icon="emojione:letter-m" width="40" height="40" />
        </div>
        <nav className="flex flex-1 flex-col gap-y-4 pt-10 ">
          <a
            className="  group relative rounded-xl bg-gray-100 p-2 text-blue-400 hover:bg-gray-50"
            href="#"
          >
            <Icon
              className="h-6 w-6 fill-current"
              icon="material-symbols:add-box-outline"
            />
            <Toolip> Thêm phần tử</Toolip>
          </a>
          <a
            className="group relative rounded-xl bg-gray-100 p-2 text-blue-400 hover:bg-gray-50"
            href="#"
          >
            <Icon className="h-6 w-6 fill-current" icon="tabler:layout" />
            <Toolip> Thêm phần tử</Toolip>
          </a>
          <a
            className="group relative rounded-xl bg-gray-100 p-2 text-blue-400 hover:bg-gray-50"
            href="#"
          >
            <Icon className="h-6 w-6 fill-current" icon="vaadin:palete" />
            <Toolip> Thêm phần tử</Toolip>
          </a>

          <a
            className="group relative rounded-xl bg-gray-100 p-2 text-blue-400 hover:bg-gray-50"
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
          <button className="group relative rounded-xl p-2  text-gray-400 hover:bg-gray-50">
            <Icon
              className="h-6 w-6 stroke-current"
              icon="mdi:alert-circle-outline"
            />
            <Toolip> Thêm phần tử</Toolip>
          </button>{" "}
          <button className="group relative  rounded-xl p-2  text-gray-400 hover:bg-gray-50">
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
      {/** gap để tạo khoảng cách giữa 2 phần tử gap-x là khoản cách cột gap y là khaonr cách row  */}
      <div className="flex h-screen flex-1 flex-col">
        <header className="flex h-18 items-center  gap-x-6 border-b border-gray-200 bg-white px-8">
          <button className="flex items-center justify-center rounded-xl bg-gray-200 p-2">
            <Icon
              className="h-6 w-6 stroke-current text-gray-400"
              icon="ic:baseline-chevron-left"
            ></Icon>
          </button>
          <button className="flex flex-col rounded-xl border border-gray-200 bg-gray-100 px-6 py-2">
            <div className="flex items-center gap-x-1">
              <span> Page: Homepage - hihi</span>
              <Icon
                className="h-6 w-6 stroke-current text-gray-400 "
                icon="material-symbols:keyboard-arrow-down"
              />
            </div>
            <div className="text-xs text-gray-400">Học hành chăm chỉ</div>
          </button>
          <button className="flex items-center justify-center gap-x-4 rounded-xl bg-gray-100 px-4 py-2">
            <Icon
              className="h-6 w-6 stroke-current text-gray-400"
              icon="ic:outline-remove-red-eye"
            ></Icon>
            <span>Preview</span>
          </button>
          {/* dấu gạch ngang  */}
          <div className="h-full w-px bg-gray-200" />
          <div className="flex items-center gap-x-3 ">
            <button className="  rounded-xl from-green-300 to-blue-400  p-2 text-gray-400  hover:flex hover:w-[110px] hover:bg-gradient-to-r hover:transition-all hover:duration-200  after:hover:px-2 after:hover:text-white after:hover:content-['Phone']">
              <Icon
                className="h-6 w-6 stroke-current text-gray-400 "
                icon="circum:mobile-4"
              ></Icon>
            </button>

            <button className=" rounded-xl from-sky-500 to-indigo-500  p-2 text-gray-400 hover:flex hover:w-[110px]   hover:bg-gradient-to-r  after:hover:px-2 after:hover:text-white after:hover:content-['Desktop']">
              <Icon
                className="h-6 w-6  text-gray-400"
                icon="material-symbols:desktop-windows-outline-sharp"
              ></Icon>
            </button>
            <button className=" rounded-xl from-violet-500 to-fuchsia-500  p-2 text-gray-400 hover:flex hover:w-[110px]  hover:bg-gradient-to-r  after:hover:px-2 after:hover:text-white after:hover:content-['Rotota']">
              <Icon
                className="h-6 w-6 stroke-current text-gray-400"
                icon="tabler:device-mobile-rotated"
              ></Icon>
            </button>
            <button className=" rounded-xl from-purple-500 to-pink-500  p-2 text-gray-400 hover:flex hover:w-[110px]  hover:bg-gradient-to-r  after:hover:px-2 after:hover:text-white after:hover:content-['Ipad']">
              <Icon
                className="h-6 w-6 stroke-current text-gray-400"
                icon="icon-park-outline:ipad"
              ></Icon>
            </button>
          </div>
          <div className="h-full w-px bg-gray-200" />
          <button className="flex items-center justify-center gap-x-3 rounded-xl bg-gray-100 px-4 py-2">
            <span>960px/100%</span>
            <Icon
              className="h-6 w-6 stroke-current text-gray-400 "
              icon="material-symbols:keyboard-arrow-down"
            />
          </button>
          <button className="rounded-xl bg-gray-100 px-4 py-2">
            <Icon
              icon="mdi:package-variant-closed"
              className="h-6 w-6 text-gray-400 "
            />
          </button>
        </header>
        <main className="flex-1 overflow-y-scroll px-12">
          <div className=" my-12 h-screen bg-white"></div>
        </main>
      </div>
      <aside className="flex h-screen w-[300px] flex-col border-l border-gray-200 bg-white">
        <div className="flex h-18 items-center gap-x-4 border-b border-gray-200 px-6 ">
          <button className="flex items-center justify-center gap-x-2 rounded-xl bg-gray-100 px-4 py-2">
            <Icon icon="mdi:people-add" className="h-5 w-5 text-gray-400" />
            <span>Invite</span>
          </button>
          <button className="text-xm flex flex-1 items-center justify-center rounded-xl bg-blue-700 px-4 py-2 text-sm leading-6 text-white">
            Pushlish
          </button>
        </div>
        <div>
          <div className="flex items-center justify-between px-6 py-4">
            <span className="text-sm font-semibold">Selector</span>
            <span className="text-sm text-gray-400">
              Inheriting <span className="font-medium"> 2 Selector</span>
            </span>
          </div>
          <div className="border-b border-t border-gray-200 px-6 py-4">
            <button className="flex w-full items-center justify-between rounded-xl border border-gray-200 bg-gray-50 px-3 py-1.5">
              <div className="flex items-center gap-x-2">
                <span className=" rounded-lg bg-white p-1 shadow">
                  <Icon
                    icon="ph:desktop-light"
                    className="h-5 w-5 text-blue-800"
                  />
                </span>
                <span className="font-semiboild rounded-lg bg-blue-100 px-3 py-1 text-sm text-blue-600">
                  H1- Title
                </span>
              </div>
              <Icon
                icon="material-symbols:keyboard-arrow-down"
                className="h-5 w-5 text-gray-300"
              />
            </button>
            <div className="mt-2 text-xs text-gray-400">
              Pham Manh Toan - Pham Nhat Minh
            </div>
          </div>
          <details>
            <summary className="flex items-center justify-between border-b border-gray-200 px-6 py-4">
              <span className="text-sm font-semibold capitalize">Layout</span>
              <Icon
                icon="material-symbols:keyboard-arrow-down"
                className="h-5 w-5 text-gray-300"
              />
            </summary>
          </details>
        </div>
      </aside>
    </div>
  );
}
