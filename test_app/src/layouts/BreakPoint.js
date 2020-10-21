const sizes = {
	mobile: "360px",
	tablet: "760px",
	desktop: "1100px",
};

const devices = {
	mobile: `only screen and (max-width: ${sizes.tablet})`,
	tablet: `only screen and (min-width: ${sizes.tablet})`,
	desktop: `only screen and (min-width: ${sizes.desktop})`,
};

export default devices;
