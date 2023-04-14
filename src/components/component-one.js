import React from "react";

import ReactLogoSvg from "~/assets/react.svg";
import ScreenOne from "~/screens/screen-one";

const ComponentOne = () => {
	return (
		<>
			<div className="bg-blue-400 text-red-500">ComponentOne</div>
			<ReactLogoSvg />
			<ScreenOne />
		</>
	);
};

export default ComponentOne;
