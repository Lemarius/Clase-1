const TotalPrice = ({ precio }) => {
	return <p>El precio con IVA es de {(precio * 21) / 100 + precio}</p>;
};

export default TotalPrice;
