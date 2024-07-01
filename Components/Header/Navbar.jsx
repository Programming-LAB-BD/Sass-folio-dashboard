import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Logoarea from "./Logoarea";

export default function Navbar({ handleOpenSidebar }) {
  return (
    <nav className="bg-primary fixed top-0 left-0 w-full z-50 md:z-[60]">
      <div className="navigation text-secondary max-w-[60%] flex gap-4 p-2 justify-start items-center">
        <div className="p-1 px-3 text-xl border rounded cursor-pointer">
          <FontAwesomeIcon
            icon="fa-solid fa-bars"
            onClick={handleOpenSidebar}
          />
        </div>
        <Logoarea
          classes="logo_area font-medium text-xl md:ml-4 py-2"
          handleCloseSidebar={() => {}}
        />
      </div>
    </nav>
  );
}
