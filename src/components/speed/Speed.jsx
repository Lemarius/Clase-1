const Speed = ({ velocidad }) => {
	return (
		<p>
			{velocidad}Km/h son {(velocidad * 1000) / 3600}m/s
		</p>
	);
};

export default Speed;
