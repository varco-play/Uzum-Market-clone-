import { useState } from "react";
import {
  SlLocationPin,
  RxCross2,
  PiFoldersBold,
  TfiSearch,
  IoPerson,
  GrFavorite,
  FaCartShopping,
  IoMdArrowDropdown,
} from "../icons/react-icons.js";
import { cities } from "./../config/cities-options";
import { Link } from "react-router-dom";
import logo from "../assets/uzumLogo.png";
import { categories } from "../config/categories.tsx";
import OpenedCatalog from "./OpenedCatalog.tsx";

const Navbar = () => {
  const [city, setCity] = useState(
    () => sessionStorage.getItem("city") || "Tashkent"
  );
  const [searchValue, setSearchValue] = useState(
    () => sessionStorage.getItem("searchParams") || ""
  );
  const [visibleCity, setVisibleCity] = useState(false);
  const [visibleCatalog, setVisibleCatalog] = useState(false);
  const underCategories = categories.slice(0, 10);

  return (
    <header className="max-ph:hidden relative">
      <div className="bg-gray w-full min-h-[32px] flex items-stretch justify-stretch">
        <div className="min-w-[320px] max-w-[1240px] w-[95%] relative mx-auto flex justify-between items-center">
          <div className="flex justify-between">
            <div className="flex gap-1 items-center">
              <SlLocationPin /> <h5>City:</h5>
              <span
                className="underline mr-2 cursor-pointer"
                onClick={() => setVisibleCity(!visibleCity)}
              >
                {city}
              </span>
            </div>
          </div>
          <div className="max-880:hidden">
            <h2 className="text-zinc-400">
              Will be delivered for free - within 1 day
            </h2>
          </div>
          <div className="flex items-center gap-4 text-[15px]">
            <Link to="/seller-registration" className="text-purple">
              Become a seller
            </Link>
            <Link to="/FAQ">FAQ</Link>
            <Link to="/my-orders">My orders</Link>
          </div>
        </div>
      </div>
      {/* ======================================================== */}

      <div className="pt-[17px] relative z-[2] w-full">
        <div className="max-w-[1240px] min-w-[320px] w-[95%] mx-auto">
          <div className="m-0 w-full relative flex justify-between items-center flex-row flex-wrap text-center">
            <div className="flex items-center">
              <Link to="/" className="flex items-center gap-2 mr-8">
                <img
                  className="w-8 h-8 rounded-md"
                  src={logo}
                  alt="Uzum logo"
                />
                <p className="text-purple font-extrabold text-2xl tracking-widest pb-1">
                  uzum market
                </p>
              </Link>
            </div>
            <button
              onClick={() => setVisibleCatalog(!visibleCatalog)}
              className="text-center w-[120px] h-[40px] px-3 bg-catalog text-purple rounded-md mr-2 hover:bg-buttonHoverPurple inline-flex justify-center items-center"
            >
              <div className="flex items-center mx-1 gap-2 font-semibold h-full">
                {visibleCatalog ? (
                  <>
                    <RxCross2 className="text-xl" /> Catalog
                  </>
                ) : (
                  <>
                    <PiFoldersBold className="text-xl" /> Catalog
                  </>
                )}
              </div>
            </button>
            <div className="mr-6 relative flex-grow-[1] flex rounded-[2px]">
              <div className="w-full h-[40px] rounded-custom">
                <div className="h-full w-full">
                  <input
                    type="text"
                    value={searchValue}
                    onChange={(e) => {
                      setSearchValue(e.target.value);
                      sessionStorage.setItem("searchParams", e.target.value);
                    }}
                    onFocus={() => setVisibleCatalog(false)}
                    placeholder="Search products or categories..."
                    className="py-[6.5px] p-navInput w-full h-full border border-custom rounded-md outline-none text-inputColor font-inter"
                  />
                </div>
              </div>
              <button className="w-[15%] h-full absolute top-0 right-0 z-[1] bg-gray border border-custom border-l-0 rounded-custom px-3 text-center leading-[18px]">
                <div className="mx-1 flex items-center justify-center h-[100%]">
                  <TfiSearch />
                </div>
              </button>
            </div>
            <div className="relative font-medium">
              <Link
                to="/user/sign-in"
                className="mr-2 inline-flex items-center justify-center min-h-[42px] min-w-[42px] px-2 relative font-inter max-1292:p-0"
              >
                <IoPerson className="mr-[9px] text-lg" />
                <span className=" max-1292:hidden">Sign In</span>
              </Link>
              <Link
                to="/user/favorite"
                className="inline-flex items-center mr-2 min-h-[42px] min-w-[42px] px-2 relative font-inter"
              >
                <GrFavorite className="mr-[9px] text-lg" />
                <span className=" max-1292:hidden">Favorite</span>
              </Link>
              <Link
                to="/user/cart"
                className="inline-flex items-center min-h-[42px] min-w-[42px] px-2 relative font-inter"
              >
                <FaCartShopping className="mr-[9px] text-lg" />
                <span className="max-1292:hidden">Cart</span>
              </Link>
            </div>
          </div>
          {visibleCatalog ? (
            <OpenedCatalog />
          ) : (
            <div className="flex pt-[10px] pb-[12px] items-center w-full text-grayCategoryUnder">
              <div className="overflow-hidden relative flex-1">
                <ul className="flex flex-row flex-wrap justify-between w-full h-9 z-[4] relative whitespace-nowrap">
                  {underCategories.map((category) => (
                    <li className="flex mr-[10px] overflow-hidden relative line">
                      <div className="flex items-center cursor-pointer pb-[5px] pt-[7px] ">
                        <div className="w-6 h-6 flex items-center">
                          {category.icon}
                        </div>
                        <span className=" ml-1 font-inter">
                          {category.name}
                        </span>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
              <div
                onClick={() => setVisibleCatalog(!visibleCatalog)}
                className="flex items-center pt-[7px] pb-[6px] leading-6 mr-2 self-center cursor-pointer"
              >
                More <IoMdArrowDropdown />
              </div>
            </div>
          )}
        </div>
      </div>

      {visibleCity ? (
        <div className="w-[100vw] h-[100vh] fixed overflow-y-scroll z-100 top-0 left-0 bottom-0 bg-transparent">
          <div>
            <div className="relative w-[500px] bg-white overflow-hidden p-8 m-8 mx-auto transition ease-in-out duration-75 translate-y-6">
              <button
                onClick={() => setVisibleCity(!visibleCity)}
                className="bg-purple rounded-full float-right"
              >
                <RxCross2 className="p-1 text-[25px] sticky text-white" />
              </button>
              <h2 className="mx-auto mb-7 w-fit font-medium text-white bg-lightPurple py-1 px-2 rounded">
                Choose your city
              </h2>
              <div className="flex flex-wrap flex-col justify-between h-[100px] gap-1">
                {cities.map((city) => (
                  <input
                    type="button"
                    className="cursor-pointer bg-gray hover:bg-slate-200 pl-1"
                    value={city}
                    onClick={() => {
                      setCity(city);
                      sessionStorage.setItem("city", city);
                      setVisibleCity(false);
                    }}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </header>
  );
};

export default Navbar;
