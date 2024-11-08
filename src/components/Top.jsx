import img1 from '../images/logo.svg'

const Top = () => {
  return (
		<section className='top'>
			<div className='top__left'>
				<p className='top__left-balance'>My balance</p>
				<p className='top__left-price'>$921.48</p>
			</div>
			<img src={img1} alt='Two circles' className='top__right' />
		</section>
	);
}
export default Top