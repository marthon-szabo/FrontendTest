const sizes = {
	mobile: "360px",
	tablet: "760px",
	desktop: "1100px",
};

const devices = {
	mobile: `only screen and (max-width: ${sizes.tablet})`,
	tablet: `only screen and (min-width: ${sizes.tablet})`,
	desktop: `only and screen (min-width: 2000px)`,
};

export default devices;
