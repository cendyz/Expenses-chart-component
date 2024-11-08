import { useState } from "react";

const BottomContent = ({ box }) => {
	const [opacity, setOpacity] = useState(null);
	const [visibility, setVisibility] = useState(null);

	const onVisible = () => {
		setOpacity(1);
		setVisibility("visible");
	};

	const offVisible = () => {
		setOpacity(0);
		setVisibility("hidden");
	};

	const { amount, day } = box;
	return (
		<div className='bottom__box-content'>
			<p className='bottom__box-content-info' style={{ opacity: opacity, visibility: visibility }}>
				${amount}
			</p>
			<div className='bottom__box-content-color' onMouseEnter={onVisible} onMouseLeave={offVisible}></div>
			<p className='bottom__box-content-text'>{day}</p>
		</div>
	);
};
export default BottomContent;
