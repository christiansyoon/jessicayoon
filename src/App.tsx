import React from 'react';
import MainMenu from "./UI/MainMenu";

import { StyledEngineProvider } from '@mui/material/styles';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

const App = () => {
	return (
		<StyledEngineProvider injectFirst>
			<BrowserRouter>
				<MainMenu/>
				<Routes>
					<Route path="/" element={<div style={{ margin: "5px" }}>HOME</div>}/>
					<Route path="/about" element={<div style={{ margin: "5px" }}>ABOUT</div>}/>
					<Route path="/blog" element={<div style={{ margin: "5px" }}>BLOG</div>}/>
					<Route path="/contact" element={<div style={{ margin: "5px" }}>CONTACT</div>}/>
					<Route path="*" element={<div/>} />
				</Routes>
			</BrowserRouter>
		</StyledEngineProvider>
	);
}

export default App;
