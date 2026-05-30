import HostTable from "../components/HostTable";
import { useEffect, useState } from "react";
import API from "../services/api.js";
import React from "react";

function Hosts() {
  const [hosts, setHosts] = useState([]);

  useEffect(() => {
    API.get("/hosts")
      .then((res) => {
        setHosts(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-8">Monitored Hosts</h1>

      <HostTable hosts={hosts} />
    </div>
  );
}

export default Hosts;
