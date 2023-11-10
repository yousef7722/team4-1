import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout1 from "./views/Layout1";
import Page2 from "./pages/Page2";
import Page3 from "./pages/Page3";
import Page4 from "./pages/Page4";
import Page30 from "./pages/Page30";
import Page31 from "./pages/Page31";
import Page32 from "./pages/Page32";
import Page27 from "./pages/Page27";
import Login from "./pages/Login";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout1 />,
    children: [
      { index: true, element: <Page2 /> },
      { path: "page3", element: <Page3 /> },
      { path: "/PAGE4_article_ID", element: <Page4 /> },
      { path: "page27", element: <Page27 /> },
      { path: "page30", element: <Page30 /> },
      { path: "/page31_job_ID", element: <Page31 /> },
      { path: "/page32_jobid_apply", element: <Page32 /> },
      // { path: "page link here", element: <Page3/> }, غير الاليمنت و الباث
      // { path: "page link here",, element: <Page4/> }, غير الاليمنت و الباث
      // { path: "page link here",, element: <Page4/> }, غير الاليمنت و الباث
    ],
  },
  { path: "/login", element: <Login /> },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
//import EIT from "./media/EIT.jpeg";
// import Flag_of_Egypt from "./media/Flag_of_Egypt.png"
// import Imageuploadbro from "./media/Image upload-bro.svg"
// import Python from "./media/Python.svg.png"
// import business from "./media/business.jpg"
// import codesnap from "./media/code-snap.png"
// import images from "./media/images.png"
// import main_background from "./media/main_background.jpg"
// import secondary_background from "./media/secondary_background.jpg"
// import seff_logo_black from "./media/seff_logo_black.jpg"
// import seff_logo_transparent from "./media/seff_logo_transparent.png"
// import uploadimg from "./media/upload-img.png"
// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Layout1/>,
//     errorElement: <ErrorPage />,
//     children: [
//       { index: true, element: <Page2/> },
//       {
//         path: "single",
//         children: [
//           { index: true, element: <Home/> },
//           { path: ":id", element: <Single/> },
//         ]
//       },
//       {
//         path: "cart",
//         element: <Cart/>
//       },
//       {
//         path: "categories",
//         children: [
//           { path: ":id", element: <Categories/> },
//         ]
//       },
//       {
//         path: "favlist",
//         element: <FavList/>,
//       },
//     ]
//   },
// ]);
