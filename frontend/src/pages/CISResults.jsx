import CISResultsTable from "../components/CISResultsTable";
import { useEffect, useState } from "react";
import API from "../services/api.js";

function CISResults() {

  const [checks, setChecks] = useState([]);

  useEffect(() => {
    API.get("/cis-results")
      .then((res) => {
        setChecks(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (

    <div className="p-8">

      <h1 className="text-3xl font-bold mb-8">
        CIS Benchmark Results
      </h1>

      <CISResultsTable checks={checks} />

    </div>
  );
}

export default CISResults;