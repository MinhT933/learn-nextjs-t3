import { Icon } from "@iconify/react";
import * as React from "react";
import Sidbar from "y/components/Sildebar/Sibar";
// import "../../styles/globals.css";

export interface ButtonCssPageProps {}

export default function ButtonCssPage(props: ButtonCssPageProps) {
  return (
    <Sidbar>
      <div className="ml-[1rem] mr-[1rem] grid grid-cols-4 content-center items-center justify-center gap-4 pt-[4rem]">
        <div className="bg-white-800 max-w-sm rounded-lg border border-gray-200 p-6 shadow">
          {/* hover button */}
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
            Hover
          </h5>
          <div className="group">
            <button className=" rounded-xl from-green-300 to-blue-400  p-2 text-gray-400  hover:flex hover:w-28 hover:bg-gradient-to-r hover:transition-all hover:duration-200  after:hover:px-2 after:hover:text-white after:hover:content-['Button']">
              <Icon
                className="h-6 w-6 stroke-current text-gray-400 group-hover:text-white "
                icon="circum:mobile-4"
              ></Icon>
            </button>
          </div>
        </div>
        {/* gradient */}
        <div className="bg-white-800 max-w-sm rounded-lg border border-gray-200 p-6 shadow">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
            Gradients
          </h5>
          <button
            type="button"
            className=" leading-pro ease-soft-in tracking-tight-soft shadow-soft-md bg-150 bg-x-25 hover:scale-102 active:opacity-85 hover:shadow-soft-xs mr-3 inline-block w-28 cursor-pointer rounded-lg bg-gradient-to-tl from-purple-700 to-pink-500 px-6 py-3 text-center align-middle text-xs font-bold uppercase text-white transition-all"
          >
            Button
          </button>
        </div>
        {/* <--Soft variant--> */}
        <div className="bg-white-800 max-w-sm rounded-lg border border-gray-200 p-6 shadow">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
            Soft variant
          </h5>

          <button
            type="button"
            className=" inline-flex w-28 items-center justify-center  rounded-lg border border-transparent bg-purple-100 px-6 py-2.5 text-sm font-semibold text-purple-500 ring-offset-white transition-all hover:bg-purple-100 hover:text-white focus:outline-none  focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800"
          >
            Button
          </button>
        </div>
        {/* <--Border Gardiant--> */}
        <div className="bg-white-800 max-w-sm rounded-lg border border-gray-200 p-6 shadow">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">
            Shadow
          </h5>
          <div className="group relative w-28 ">
            <div className=" absolute -inset-0.5 animate-tilt rounded-lg bg-gradient-to-r from-purple-600 to-blue-800 opacity-60 blur-sm duration-1000 group-hover:opacity-100 group-hover:transition group-hover:duration-200 "></div>
            <button className="relative w-28 rounded-lg bg-black px-6 py-2.5 text-white">
              <span className=" transition duration-200 group-hover:text-gray-400">
                Button
              </span>
            </button>
          </div>
        </div>
        <div className="bg-white-800 max-w-sm rounded-lg border border-gray-200 p-6 shadow">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
            Soft variant
          </h5>
          <div className="flex h-[200px] items-center justify-center ">
            <div className="button overflow-hidde before:re relative h-[100px] w-[200px] bg-slate-700 before:animate-fullSpin after:absolute"></div>
          </div>
        </div>
      </div>
    </Sidbar>
  );
}
