import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Layout1 from "./views/Layout1";
import Page2 from "./pages/Page2";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout1/>,
    children: [
      { index: true, element: <Page2/> },
    ]
  },
]);

const App = () => {
  return (
    <RouterProvider router={router} />
  );
}

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
