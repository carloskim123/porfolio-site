import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
// layouts and pages
import RootLayout from "./layouts/RootLayout";
import Home from "./pages/Home";
// import Projects from './pages/Projects';
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import HasSubmitted from "./components/HasSubmitted";
import Contact from "./pages/Contact";
import LearningResources from "./pages/LearningResources";
import TestFeatures from "./pages/TestFeatures";
// router and routes

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Home />} />
        {/* <Route path="projects" element={<Projects />} /> */}
        <Route path="learning-resources-used" element={<LearningResources />} />
        <Route path="test" element={<TestFeatures />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
        <Route path="success" element={<HasSubmitted />} />
        <Route path="error" element={<div>Error</div>} />
      </Route>
    </>
  )
);

// app
export default function App() {
  return (
    <>
      <RouterProvider router={router} future={undefined}>
        <RootLayout />
      </RouterProvider>
    </>
  );
}
