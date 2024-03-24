import { Link } from "react-router-dom";
import { Fragment, useState } from "react";
import { LuHome, LuLogOut, LuNewspaper, LuUser } from "react-icons/lu";
import { cn } from "../../utils/cn-merge";
import { avatar1Img } from "../../assets/images";

const profileDropdownItems = [
  {
    icon: LuUser,
    name: "My Profile",
    link: "/admin/profile",
  },
  {
    icon: LuNewspaper,
    name: "Landing",
    link: "/",
  },
  {
    icon: LuHome,
    name: "Home",
    link: "/home",
  },
  {
    icon: LuLogOut,
    name: "Log Out",
    link: "/auth/logout",
  },
];

const ProfileDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="hs-dropdown relative inline-flex">
      <button
        id="hs-dropdown-with-header"
        type="button"
        className="hs-dropdown-toggle inline-flex flex-shrink-0 items-center justify-center gap-2 rounded-full align-middle text-xs font-medium text-default-700 transition-all"
        onClick={toggleDropdown} // Add onClick event to toggle dropdown
      >
        <img
          className="inline-block h-10 w-10 rounded-full"
          alt="avatar"
          src={avatar1Img}
        />
        <div className="hidden text-start lg:block">
          <p className="text-sm font-medium text-default-700">Kaiya Botosh</p>
          <p className="mt-1 text-xs text-default-500">Admin</p>
        </div>
      </button>
      <div
        className={`hs-dropdown-menu duration mt-30 min-w-[12rem] rounded-lg border border-default-200 bg-white p-2 shadow-md transition-opacity ${
          isOpen ? "opacity-100 fixed top-16 right-4" : "opacity-0 hidden"
        } dark:bg-default-50`}
      >
        {profileDropdownItems.map((item, idx) => {
          const Icon = item.icon;
          const lastItem = idx === profileDropdownItems.length - 1;
          return (
            <Fragment key={item.link + item.name}>
              {lastItem && <hr className="-mx-2 my-2 border-default-200" />}
              <Link
                to={item.link}
                className={cn(
                  "flex items-center gap-x-3.5 rounded-md px-3 py-2 text-sm text-default-800 hover:bg-default-100",
                  lastItem && "text-red-500 hover:bg-red-400/10"
                )}
              >
                <Icon size={16} />
                {item.name}
              </Link>
            </Fragment>
          );
        })}
      </div>
    </div>
  );
};

export default ProfileDropdown;