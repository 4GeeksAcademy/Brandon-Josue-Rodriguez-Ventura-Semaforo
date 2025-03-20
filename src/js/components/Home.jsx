import React, {useState, useEffect} from "react";
const Home = () => {
	const [color, setcolor] = useState("red");
	useEffect
	return (
		<div className="Container"> 
		    <div className="Barrita">a</div>
		    <div className="Modulo">
				<button onClick={() => setcolor("Red")} className={color === "Red" ? "RojoEncendido" : "Rojo"} ></button>
			</div>
			<div className="Modulo">
				<button onClick={() => setcolor("Yellow")} className={color === "Yellow" ? "AmarilloEncendido" : "Amarillo"}></button>
			</div>
			<div className="Modulo">
			    <button onClick={() => setcolor("Green")} className={color === "Green" ? "VerdeEncendido" : "Verde"}></button>
			</div>

		</div>
	);
};

export default Home;