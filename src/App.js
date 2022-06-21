import { useEffect, useState } from "react";

function App() {
	const [loading, setLoading] = useState(true);
	const [USD, setUSD] = useState();
	const [coins, setCoins] = useState([]);
	const [usdToBtc, setUsdToBtc] = useState(0);
	useEffect(() => {
		fetch("https://api.coinpaprika.com/v1/tickers")
			.then((res) => res.json())
			.then((data) => {
				setCoins(data);
				setUsdToBtc(data[0].quotes.USD.price.toFixed(2));
				setLoading(false);
			});
	}, []);
	const onChangeUSD = (e) => {
		setUSD(e.target.value);
	};
	const onSubmitUSD = (e) => {
		e.preventDefault();
		setUSD(1);
	};
	return (
		<div>
			<h1>Coin App</h1>
			<form onSubmit={onSubmitUSD}>
				<input
					onChange={onChangeUSD}
					value={USD}
					placeholder="USD To BTC"
				></input>
			</form>
			{loading ? (
				<div>loading...</div>
			) : (
				<div>
					<div>Today Btc : {usdToBtc} USD</div>
					<div>
						{USD ? USD : 1} USD is {((USD ? USD : 1) / usdToBtc).toFixed(10)}{" "}
						BTC
					</div>
					<ul>
						{coins.map((coin, index) => (
							<li key={index}>
								{coin.name} : {coin.quotes.USD.price.toFixed(2)} USD,{" "}
								{(coin.quotes.USD.price.toFixed(2) / usdToBtc).toFixed(10)} Btc
							</li>
						))}
					</ul>
				</div>
			)}
		</div>
	);
}

export default App;
