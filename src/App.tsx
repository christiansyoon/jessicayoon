import React from 'react';
import MainMenu from "./UI/MainMenu";

import { StyledEngineProvider } from '@mui/material/styles';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import ContactPage from './pages/Contact';

const App = () => {
	return (
		<StyledEngineProvider injectFirst>
			<BrowserRouter>
				<MainMenu/>
				<Routes>
					<Route index element={<div style={{ margin: "5px" }}>HOME</div>}/>
					<Route path="about" element={<div style={{ margin: "5px" }}>ABOUT</div>}/>
					<Route path="blog" element={<div style={{ margin: "5px" }}>BLOG</div>}/>
					<Route path="contact" element={<ContactPage/>}/>
					<Route path="*" element={<div/>}/>
				</Routes>
			</BrowserRouter>
		</StyledEngineProvider>
	);
}

export default App;