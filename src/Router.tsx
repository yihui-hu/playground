import App from "@/App.tsx";
import ErrorPage from "@/Error.tsx";
import { createBrowserRouter } from "react-router-dom";
import * as Ideas from "@/ideas/ideas";

interface Route {
  date: string
  path: string
  element: JSX.Element
  errorElement?: JSX.Element
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
    path: "scalingBox",
    element: <Ideas.ScalingBox />,
  },
  {
    date: "06-09-24",
    path: "fillScreenTransition",
    element: <Ideas.FillScreenTransition />,
  },
  {
    date: "06-09-24",
    path: "twoBoxes",
    element: <Ideas.TwoBoxes />,
  },
  {
    date: "06-09-24",
    path: "secretMessageButton",
    element: <Ideas.SecretMessageButton />,
  },
  {
    date: "06-10-24",
    path: "foundationCareersText",
    element: <Ideas.FoundationCareersText />,
  },
  {
    date: "06-10-24",
    path: "notesWithVideos",
    element: <Ideas.NotesWithVideos />,
  },
  {
    date: "06-11-24",
    path: "expandingCircles",
    element: <Ideas.ExpandingCircles />
  },
  {
    date: "XX-XX-XX",
    path: "draft",
    element: <Ideas.Draft />,
  },
  // {
  //   path: "playButton",
  //   element: <Ideas.PlayButton />
  // }
];

const router = createBrowserRouter(routes);

export { routes, router };
