import Average from './components/average/Average';
import Button from './components/button/Button';
import CalculateCircleArea from './components/calculateCircleArea/CalculateCircleArea';
import CalculateSquareArea from './components/calculateSquareArea/CalculateSquareArea';
import CalculateTriangleArea from './components/calculateTriangleArea/CalculateTriangleArea';
import CelsiusToFarenheit from './components/celsiusToFarenheit/CelsiusToFarenheit';
import FahrenheitToCelsius from './components/fahrenheitToCelsius/FahrenheitToCelsius';
import SayHello from './components/sayHello/SayHello';
import Speed from './components/speed/Speed';
import TotalPrice from './components/totalPrice/TotalPrice';
import WriteMessage from './components/writeMessage/WriteMessage';

const name = 'Mario';
const number = 27;
const boolean = true;
const isUndefined = undefined;
const isNull = null;
const array = [1, 2, 3, 4, 5];
const object = { name: 'Mario', age: 33 };

// const ButtonProps = props => {
// 	return (
// 		<div>
// 			<p>Name: {props.name}</p>
// 			<p>Age: {props.age}</p>
// 		</div>
// 	);
// };

const App = () => {
	return (
		<>
			<Button name='Mario' age={32} />
			<SayHello name='Mario' />
			<CalculateSquareArea number={4} />
			<CalculateTriangleArea base={4} altura={7} />
			<CalculateCircleArea radio={7} />
			<CelsiusToFarenheit celsius={26} />
			<FahrenheitToCelsius fahrenheit={26} />
			<TotalPrice precio={340} />
			<WriteMessage
				name='Mario'
				material='cocacolas'
				size={330}
				note='Qué bien.'
			/>
			<Average num1={25} num2={78} num3={36} />
			<Speed velocidad={120} />
		</>
	);
};

export default App;
