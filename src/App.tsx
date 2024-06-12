import "@/styles/global.css";
import { Link } from "react-router-dom";
import { routes } from "@/Router";

const App = () => {
  const navigableRoutes = routes.slice(1, routes.length);

  return (
    <div className="rootContainer">
      <div className="linksList">
        {navigableRoutes.map((route) => {
          return (
            <Link
              to={route.path}
              key={route.path}
              style={{ textDecoration: "none", color: "gray" }}
            >
              {route.date + "／" + route.path}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default App;
