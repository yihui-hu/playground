import App from "@/App.tsx";
import ErrorPage from "@/Error.tsx";
import { createBrowserRouter } from "react-router-dom";
import * as Ideas from "@/ideas/ideas";

interface Route {
  date: string;
  path: string;
  element: JSX.Element;
  errorElement?: JSX.Element;
}

const routes: Route[] = [
  {
    date: "06-08-24",
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    date: "06-09-24",
    path: "/scalingBox",
    element: <Ideas.ScalingBox />,
  },
  {
    date: "06-09-24",
    path: "/twoBoxes",
    element: <Ideas.TwoBoxes />,
  },
  {
    date: "06-09-24",
    path: "/fillScreenTransition",
    element: <Ideas.FillScreenTransition />,
  },
  {
    date: "06-09-24",
    path: "/secretMessageButton",
    element: <Ideas.SecretMessageButton />,
  },
  {
    date: "06-10-24",
    path: "/foundationCareersText",
    element: <Ideas.FoundationCareersText />,
  },
  {
    date: "06-10-24",
    path: "/notesWithVideos",
    element: <Ideas.NotesWithVideos />,
  },
  {
    date: "06-11-24",
    path: "/expandingCircles",
    element: <Ideas.ExpandingCircles />,
  },
  {
    date: "06-17-24",
    path: "/expandingPhotos",
    element: <Ideas.ExpandingPhotos />,
  },
  {
    date: "06-18-24",
    path: "/timeline",
    element: <Ideas.Timeline />,
  },
  {
    date: "06-19-24",
    path: "/continuousHighlight",
    element: <Ideas.ContinuousHighlight />,
  },
  {
    date: "XX-XX-XX",
    path: "/draft",
    element: <Ideas.Draft />,
  },
];

const navigableRoutes = routes.slice(1, routes.length);

const router = createBrowserRouter(routes);

export { navigableRoutes, routes, router };
