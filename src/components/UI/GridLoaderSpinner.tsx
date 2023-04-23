import React from "react";
import { Grid } from "react-loader-spinner";

const GridLoaderSpinner = () => {
	return (
		<div className="p-4 my-8 flex justify-center">
			<Grid
				height="80"
				width="80"
				color="#4fa94d"
				ariaLabel="grid-loading"
				radius="12.5"
				wrapperStyle={{}}
				wrapperClass=""
				visible={true}
			/>
		</div>
	);
};

export default GridLoaderSpinner;
