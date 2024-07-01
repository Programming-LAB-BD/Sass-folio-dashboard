import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

export default function Logout() {
  return (
    <div className="logout absolute bottom-8 w-[90%]">
      <div className="shape flex items-center justify-start w-full border-t py-2 px-4">
        <Link id="logout" href="#">
          <FontAwesomeIcon
            icon="fa-solid fa-circle-user"
            className="text-xl mr-1"
          />
          <span>Logout</span>
        </Link>
      </div>
    </div>
  );
}
