const Button = ({ name, age }) => {
	name = name.toUpperCase();
	return (
		<div>
			<p>Name: {name}</p>
			<p>Age: {age}</p>
		</div>
	);
};

export default Button;
