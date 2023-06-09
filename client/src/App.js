import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "./layouts/Main";
import Contact from "./pages/Contact/Contact";
import Error from "./pages/Error";
import FAQ from "./pages/FAQ/FAQ";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import EventDetection from "./pages/MachineLearning/EventDetection/EventDetection";
import Profile from "./pages/Profile/Profile";
import Register from "./pages/Register/Register";
import { ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
import TextToImage from "./pages/MachineLearning/HuggingFace/TextToImage";
import ChatGPT from "./pages/MachineLearning/ChatGPT/ChatGPT";
import KeywordExtractor from "./pages/MachineLearning/KeywordExtractor/KeywordExtractor";
import Speech2Text from "./pages/MachineLearning/Speech2Text/Speech2Text";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Home />,
        errorElement: <Error />,
      },
      {
        path: "profile",
        element: <Profile />,
        errorElement: <Error />,
      },
      {
        path: "register",
        element: <Register />,
        errorElement: <Error />,
      },
      {
        path: "login",
        element: <Login />,
        errorElement: <Error />,
      },
      {
        path: "contact",
        element: <Contact />,
        errorElement: <Error />,
      },
      {
        path: "faq",
        element: <FAQ />,
        errorElement: <Error />,
      },
      {
        path: "eventdetection",
        element: <EventDetection />,
        errorElement: <Error />,
      },
      {
        path: "stable_diffusion",
        element: <TextToImage />,
        errorElement: <Error />,
      },
      {
        path: "/chatgpt",
        element: <ChatGPT />,
        errorElement: <Error />,
      },
      {
        path: "/keywordextractor",
        element: <KeywordExtractor />,
        errorElement: <Error />,
      },
      {
        path: "/speech2text",
        element: <Speech2Text />,
        errorElement: <Error />,
      },
    ],
  },
]);

function App() {
  return (
    <div>
      <RouterProvider router={router} />
      <ToastContainer />
    </div>
  );
}

export default App;
