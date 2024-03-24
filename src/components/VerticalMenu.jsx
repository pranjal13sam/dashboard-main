import { Link, useLocation } from "react-router-dom";
import { Fragment, useEffect, useState } from "react";
import { LuChevronDown, LuDot, LuLayoutGrid } from "react-icons/lu";
import { findAllParent, findMenuItem, getMenuItemFromURL } from "./menu.js";
import { cn } from "../utils/cn-merge.js";

const MenuItemWithChildren = ({
  item,
  linkClassName,
  activeMenuItems,
  toggleMenu,
  className,
}) => {
  const [open, setOpen] = useState(activeMenuItems.includes(item.key));
  const [isRotated, setIsRotated] = useState(false); // State to track rotation

  const Icon = item.icon ?? LuLayoutGrid;

  useEffect(() => {
    setOpen(activeMenuItems.includes(item.key));
  }, [activeMenuItems, item]);

  const toggleMenuItem = () => {
    setOpen(!open);
    setIsRotated(!isRotated); // Toggle rotation on click
    if (toggleMenu) { toggleMenu(item); }
  };

  return (
    <li className={className}>
      <button
        className={cn(
          "hs-accordion-toggle flex w-full items-center gap-x-3.5 rounded-md px-4 py-3 text-sm text-default-700 hover:bg-default-100",
          {
            active: activeMenuItems.includes(item.key),
          }
        )}
        aria-expanded={open}
        data-menu-key={item.key}
        onClick={toggleMenuItem}
      >
        <Icon size={20} />
        {item.label}
        <LuChevronDown
          size={16}
          className={cn("ms-auto transition-all", { "transform rotate-180": isRotated })} // Rotate based on isRotated state
        />
      </button>
      <div className={`hs-accordion-content ${open ? 'block' : 'hidden'} w-full overflow-hidden transition-[height]`}>
        <ul className="mt-2 space-y-2">
          {(item.children ?? []).map((child, idx) => (
            <Fragment key={idx}>
              {child.children ? (
                <MenuItemWithChildren
                  item={child}
                  toggleMenu={toggleMenu}
                  className="hs-accordion"
                  activeMenuItems={activeMenuItems}
                  linkClassName={linkClassName}
                />
              ) : (
                <MenuItem
                  item={child}
                  className={cn("group", {
                    active: activeMenuItems?.includes(child.key),
                  })}
                  linkClassName={cn(
                    linkClassName,
                    "group-[.active]:text-primary group-[.active]:bg-primary/10"
                  )}
                />
              )}
            </Fragment>
          ))}
        </ul>
      </div>
    </li>
  );
};

const MenuItem = ({ item, className, linkClassName }) => (
  <li className={className}>
    <MenuItemLink item={item} className={linkClassName} />
  </li>
);

const MenuItemLink = ({ item, className }) => {
  const Icon = item.icon ?? LuDot;
  return (
    <Link
      className={className}
      to={item.url ?? ""}
      target={item.target}
      data-menu-key={item.key}
    >
      <Icon size={item.icon ? 20 : 24} />
      {item.label}
    </Link>
  );
};

const VerticalMenu = ({ menuItems }) => {
  const [activeMenuItems, setActiveMenuItems] = useState([]);
  const { pathname } = useLocation();

  const toggleMenu = (menuItem) => {
    setActiveMenuItems((prevItems) => {
      const index = prevItems.indexOf(menuItem.key);
      if (index !== -1) {
        return [...prevItems.slice(0, index), ...prevItems.slice(index + 1)];
      } else {
        return [...prevItems, menuItem.key];
      }
    });
  };

  useEffect(() => {
    const trimmedURL = pathname.replaceAll("", "");
    const matchingMenuItem = getMenuItemFromURL(menuItems, trimmedURL);
    if (matchingMenuItem) {
      const activeMt = findMenuItem(menuItems, matchingMenuItem.key);
      if (activeMt) {
        setActiveMenuItems([
          activeMt["key"],
          ...findAllParent(menuItems, activeMt),
        ]);
      }
    }
  }, [pathname, menuItems]);

  return (
    <ul className="admin-menu hs-accordion-group flex w-full flex-col gap-1.5 p-4">
      {menuItems.map((item) => (
        <Fragment key={item.key}>
          {item.children ? (
            <MenuItemWithChildren
              item={item}
              toggleMenu={toggleMenu}
              className={"hs-accordion"}
              activeMenuItems={activeMenuItems}
              linkClassName={cn(
                "flex items-center gap-x-3.5 py-2 px-2.5 text-sm font-medium text-default-700 rounded-md hover:bg-default-100"
              )}
            />
          ) : (
            <MenuItem
              item={item}
              linkClassName={cn(
                "flex items-center gap-x-3.5 py-3 px-4 text-sm text-default-700 rounded-md hover:bg-default-100 group-[.active]:text-primary group-[.active]:bg-primary/10",
                { active: activeMenuItems.includes(item.key) }
              )}
              className="group"
            />
          )}
        </Fragment>
      ))}
    </ul>
  );

};

export default VerticalMenu;