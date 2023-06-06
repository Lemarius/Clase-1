const FahrenheitToCelsius = ({ fahrenheit }) => {
	return (
		<p>
			{fahrenheit} grados fahrenheit son {(fahrenheit - 32) / 1.8} grados
			celsius.
		</p>
	);
};

export default FahrenheitToCelsius;
