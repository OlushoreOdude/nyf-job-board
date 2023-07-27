import { Route, Routes } from "react-router-dom";

import About from "./pages/About";
import Home from "./pages/Home";
import Jobs from "./pages/Jobs";

import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import Search  from "./components/Search.jsx";

const App = () => (
	<>
		<Header />
		<Search />
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/about/this/site" element={<About />} />
			<Route path="/jobs" element={<Jobs />} />;
		</Routes>
		<Footer />
	</>
);

export default App;
