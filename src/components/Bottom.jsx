import BottomContent from "./BottomContent";
import BottomBot from "./BottomBot";
import { table } from "../data";

const Bottom = () => {
	return (
		<section className='bottom'>
			<h1 className='bottom__title'>Spending - Last 7 days</h1>
			<div className='bottom__box'>
				{table.map((box, index) => {
					return <BottomContent box={box} key={index} />;
				})}
			</div>
			<BottomBot />
		</section>
	);
};
export default Bottom;
