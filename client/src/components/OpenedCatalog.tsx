import { Link } from "react-router-dom";
import { categories } from "../config/categories";
import { useState } from "react";
import { podCategories } from "./../config/podCategories";

const OpenedCatalog = () => {
  const [choosenCategory, setChoosenCategory] = useState("Electronics");

  return (
    <div className="overflow-hidden absolute top-[75px] left-0 w-full shadow-bottom z-[1000]">
      <div>
        <div className="bg-white text-black font-inter w-full">
          <nav className="flex mx-auto max-w-[1245px] relative z-100">
            <aside className="w-[264px] block">
              <ul className="border-r border-solid border-darkGray w-[264px] list-none pb-[20px] m-0 relative h-full">
                {categories.map((category) => (
                  <li
                    className="leading-6"
                    onClick={() => {
                      setChoosenCategory(category.name);
                    }}
                  >
                    <div
                      className={`flex items-start w-full px-2 hover:bg-gray`}
                    >
                      <div className="mt-2 text-orange-400">
                        {category.icon}
                      </div>
                      <span className="leading-[120%] px-2 py-0 mx-0 my-3 w-calc inline-block">
                        {category.name}
                      </span>
                      <div className="ml-auto mt-2 text-neutral-600">
                        {category.iconRight}
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </aside>
            <div className="mb-[30px] ml-[30px] w-full">
              <Link
                to={`/categories/${choosenCategory}`}
                className="flex items-center mt-2 font-semibold"
              >
                {choosenCategory} {categories[0].iconRight}
              </Link>
              <div className="grid grid-cols-3 mt-4">
                {podCategories
                  .filter((categ) => categ.name == choosenCategory)
                  .map((item) =>
                    item.categories.map((podCategories) => (
                      <div className="flex flex-col mt-2">
                        <Link
                          to={`/categories/podcategory/${podCategories.title}`}
                          className="text-[0.875rem] font-semibold mb-4"
                        >
                          {podCategories.title}
                        </Link>
                        <div className="mb-4">
                          {podCategories.podCategories.map((podName) => (
                            <div className="mb-2 text-nowrap">
                              <Link
                                to={`/categories/podCategory/${podCategories.title}/${podName.name}`}
                                className="text-textGray"
                              >{podName.name}</Link>
                              
                            </div>
                          ))}
                        </div>
                      </div>
                    ))
                  )}
              </div>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default OpenedCatalog;
