import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import React from "react";
import Logoarea from "./Logoarea";
import Logout from "./Logout";

function MobileSidebar({ navItems, handleCloseSidebar }, ref) {
  const items = [...navItems];

  return (
    <aside
      ref={ref}
      className="w-[45%] max-w-[260px] min-h-screen fixed top-0 left-0 z-50 bg-primary text-secondary flex flex-col gap-12 py-10 px-3 translate-x-[-999px] custom-transition"
    >
      <div className="close absolute top-6 right-4 text-xl cursor-pointer">
        <FontAwesomeIcon icon="fa-solid fa-x" onClick={handleCloseSidebar} />
      </div>
      <Logoarea
        classes="logo_area font-medium text-xl pl-2 cursor-pointer"
        handleCloseSidebar={handleCloseSidebar}
      />
      <div id="nav_area">
        <ul className="flex flex-col gap-1">
          {items.map((item, index) => (
            <li
              className="pl-2 border-b py-2"
              key={index}
              onClick={handleCloseSidebar}
            >
              <Link
                className="flex items-center justify-start gap-2"
                href={item.path}
              >
                <FontAwesomeIcon icon={item.icon} />
                <span> {item.name}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <Logout />
    </aside>
  );
}

export default React.forwardRef(MobileSidebar);
