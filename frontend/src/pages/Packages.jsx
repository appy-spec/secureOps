import { useEffect, useState } from "react";
import PackagesTable from "../components/PackagesTable";

import API from "../services/api.js";

function Packages() {

  const [packages, setPackages] = useState([]);

   useEffect(() => {
    API.get("/packages")
      .then((res) => {
        setPackages(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (

    <div className="p-8">

      <h1 className="text-3xl font-bold mb-8">
        Installed Packages
      </h1>

      <PackagesTable packages={packages} />

    </div>

  );
}

export default Packages;