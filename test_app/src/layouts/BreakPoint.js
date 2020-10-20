const sizes = {
	mobile: "360px",
	tablet: "768px",
	desktop: "1100px",
};

const devices = {
	mobile: `(min-width: ${sizes.mobile})`,
	tablet: `(mmin-width: ${sizes.tablet})`,
	desktop: `(mmin-width: ${sizes.dektop})`,
};

export default devices;
