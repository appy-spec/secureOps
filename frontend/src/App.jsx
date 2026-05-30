import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import Sidebar from "./components/Sidebar";
import Topbar from "./components/Topbar";

import Dashboard from "./pages/Dashboard";
import Hosts from "./pages/Hosts";
import CISResults from "./pages/CISResults";
import Packages from "./pages/Packages";

function App() {

  return (

    <BrowserRouter>

      <div className="flex">

        <Sidebar />

        <div className="ml-64 w-full">

          <Topbar />

          <Routes>

            <Route
              path="/"
              element={<Dashboard />}
            />

            <Route
              path="/hosts"
              element={<Hosts />}
            />

            <Route
              path="/cis-results"
              element={<CISResults />}
            />

             <Route
              path="/packages"
              element={<Packages />}
            />

          </Routes>

        </div>

      </div>

    </BrowserRouter>
  );
}

export default App;