import { ContactPage, contactPageAction } from "./ContactPage";
import { ThankYouPage } from "./ThankYouPage";
import "./App.css";
import "./index.css";
import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to="contact" />,
  },
  {
    path: "/contact",
    element: <ContactPage />,
    action: contactPageAction,
  },
  {
    path: "/thank-you/:name",
    element: <ThankYouPage />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}
export default App;
