import { Route } from "react-router-dom";
import {
	createBrowserRouter,
	createRoutesFromElements,
	RouterProvider,
} from "react-router-dom";

// import Layouts //
import RootLayout from "./layouts/RootLayout.jsx";

// import pages //
import About from "./pages/About";

/* import Home from "./pages/Home"; */
import Jobs from "./pages/Jobs";
import NotFound from "./pages/NotFound";
import HomeCopy2 from "./pages/Home_copy2.js";

const router = createBrowserRouter(
	createRoutesFromElements(
		<Route path="/" element={<RootLayout />}>
			<Route index element={<HomeCopy2 />}></Route>
			<Route path="/about" element={<About />} />
			<Route path="/jobstest" element={<Jobs />} />;
			<Route path="*" element={<NotFound />} />
		</Route>
	)
);

function App() {
	return <RouterProvider router={router} />;
}

export default App;
