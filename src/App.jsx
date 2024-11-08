function App() {
	return (
		<>
			<main className='main'>
				<section className='top'>
					<div className='top__left'>
						<p className='top__left-balance'>My balance</p>
						<p className='top__left-price'>$921.48</p>
					</div>
					<img src='src/images/logo.svg' alt='Two circles' className='top__right' />
				</section>
				<section className='bottom'>
					<h1 className='bottom__title'>Spending - Last 7 days</h1>
					<div className='bottom__box'>
						<div className='bottom__box-content'>
							<div className='bottom__box-content-color'></div>
							<p className='bottom__box-content-text'>mon</p>
						</div>
						<div className='bottom__box-content'>
							<div className='bottom__box-content-color'></div>
							<p className='bottom__box-content-text'>mon</p>
						</div>
						<div className='bottom__box-content'>
							<div className='bottom__box-content-color'></div>
							<p className='bottom__box-content-text'>mon</p>
						</div>
						<div className='bottom__box-content'>
							<div className='bottom__box-content-color'></div>
							<p className='bottom__box-content-text'>mon</p>
						</div>
						<div className='bottom__box-content'>
							<div className='bottom__box-content-color'></div>
							<p className='bottom__box-content-text'>mon</p>
						</div>
						<div className='bottom__box-content'>
							<div className='bottom__box-content-color'></div>
							<p className='bottom__box-content-text'>mon</p>
						</div>
						<div className='bottom__box-content'>
							<div className='bottom__box-content-color'></div>
							<p className='bottom__box-content-text'>mon</p>
						</div>
					</div>
					<div className='bottom__bot'>
						<div className='bottom__bot-left'>
							<p className='bottom__bot-left-total'>Total this month</p>
							<p className='bottom__bot-left-price'>$478.33</p>
						</div>
						<div className='bottom__bot-right'>
							<p className='bottom__bot-right-procent'>+2.4%</p>
							<p className='bottom__bot-right-last'>from last month</p>
						</div>
					</div>
				</section>
			</main>
		</>
	);
}

export default App;
