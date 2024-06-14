import "@/styles/global.css";
import { Link } from "react-router-dom";
import { routes } from "@/Router";

const App = () => {
  const navigableRoutes = routes.slice(1, routes.length);

  return (
    <div style={{ display: "flex", flexDirection: "column", padding: "4px"}}>
      <div className="header">
        <Link
          to="/"
          key="home"
          style={{ textDecoration: "none", color: "white" }}
        >
          Playground
        </Link>
      </div>
      <div className="rootContainer" style={{ borderRadius: "12px" }}>
        <div className="linksList">
          {navigableRoutes.map((route) => {
            return (
              <Link
                to={route.path}
                key={route.path}
                style={{ textDecoration: "none", color: "#C9C9C9" }}
              >
                {route.date + "／" + route.path}
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default App;
