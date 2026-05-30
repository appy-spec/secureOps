import {
  FaShieldAlt,
  FaServer,
  FaBug,
  FaHome,
  FaBoxOpen
} from "react-icons/fa";

import { Link } from "react-router-dom";

function Sidebar() {

  return (

    <div className="w-64 h-screen bg-slate-900 border-r border-slate-800 p-6 fixed">

      <h1 className="text-2xl font-bold text-blue-400 mb-10">
        SecureOps
      </h1>

      <div className="flex flex-col gap-5">

        <Link
          to="/"
          className="flex items-center gap-3 hover:text-blue-400"
        >
          <FaHome />
          Dashboard
        </Link>

        <Link
          to="/hosts"
          className="flex items-center gap-3 hover:text-blue-400"
        >
          <FaServer />
          Hosts
        </Link>

        <Link
          to="/cis-results"
          className="flex items-center gap-3 hover:text-blue-400"
        >
          <FaShieldAlt />
          CIS Results
        </Link>

        <Link
          to="/packages"
          className="flex items-center gap-3 hover:text-blue-400"
        >
          <FaBoxOpen />
          Packages
        </Link>


      </div>

    </div>
  );
}

export default Sidebar;