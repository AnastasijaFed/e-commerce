import { Listbox, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { ChevronUpDownIcon, CheckIcon } from "@heroicons/react/20/solid";

const CategoryDropdown = ({
  categories,
  activeCategory,
  setSelectedCategory,
  navigate,
}) => {
  const selected = activeCategory || "";

  const handleChange = (value) => {
    setSelectedCategory(value);
    if (value) navigate(`/products/${encodeURIComponent(value)}`);
    else navigate("/products");
  };

  return (
    <div className="w-64 mt-6">
      <Listbox value={selected} onChange={handleChange}>
        <div className="relative">
          {/* Trigger */}
          <Listbox.Button className="
            relative w-full cursor-pointer
            rounded-full border border-[#BBBDBC]
            bg-white py-3 pl-5 pr-10 text-left
            shadow-sm text-[#2F362F] font-medium
            focus:outline-none focus:ring-2 focus:ring-[#245F73]
            hover:border-[#245F73] transition
          ">
            <span className="block truncate">
              {selected
                ? selected.charAt(0).toUpperCase() + selected.slice(1)
                : "All Categories"}
            </span>
            <span className="pointer-events-none absolute inset-y-0 right-3 flex items-center">
              <ChevronUpDownIcon
                className="h-5 w-5 text-[#245F73]"
                aria-hidden="true"
              />
            </span>
          </Listbox.Button>


          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Listbox.Options
              className="
                absolute z-10 mt-2 max-h-60 w-full overflow-auto
                rounded-lg bg-white border border-[#E5E5E5]
                py-1 shadow-lg focus:outline-none
              "
            >

              <Listbox.Option value="">
                {({ active, selected }) => (
                  <div
                    className={`flex items-center justify-between px-4 py-2 rounded-md cursor-pointer
                      ${
                        active
                          ? "bg-[#F2F0EF] text-[#245F73]"
                          : "text-[#2F362F]"
                      }`}
                  >
                    All Categories
                    {selected && (
                      <CheckIcon className="w-4 h-4 text-[#245F73]" />
                    )}
                  </div>
                )}
              </Listbox.Option>

              {categories.map((cat) => (
                <Listbox.Option key={cat} value={cat}>
                  {({ active, selected }) => (
                    <div
                      className={`flex items-center justify-between px-4 py-2 rounded-md cursor-pointer
                        ${
                          active
                            ? "bg-[#F2F0EF] text-[#245F73]"
                            : "text-[#2F362F]"
                        }`}
                    >
                      {cat.charAt(0).toUpperCase() + cat.slice(1)}
                      {selected && (
                        <CheckIcon className="w-4 h-4 text-[#245F73]" />
                      )}
                    </div>
                  )}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
        </div>
      </Listbox>
    </div>
  );
};

export default CategoryDropdown;
