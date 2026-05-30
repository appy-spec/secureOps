import { useEffect, useState } from "react";
import StatCard from "../components/StatCard";
import API from "../services/api.js";

function Dashboard() {

  const [stats, setStats] = useState({
    hosts: 0,
    packages: 0,
    passedChecks: 0,
    failedChecks: 0
  });

  useEffect(() => {

    API.get("/dashboard")
      .then((res) => {
        setStats(res.data);
      })
      .catch((err) => {
        console.log(err);
      });

  }, []);

  return (

    <div className="p-8">

      <h1 className="text-3xl font-bold mb-8">
        Security Overview
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

        <StatCard
          title="Total Hosts"
          value={stats.hosts}
          color="bg-blue-600"
        />

        <StatCard
          title="Packages"
          value={stats.packages}
          color="bg-purple-600"
        />

        <StatCard
          title="Passed Checks"
          value={stats.passedChecks}
          color="bg-green-600"
        />

        <StatCard
          title="Failed Checks"
          value={stats.failedChecks}
          color="bg-red-600"
        />

      </div>

    </div>

  );
}

export default Dashboard;