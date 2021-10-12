import { useEffect } from "react"

import { GlobalStyles, Container, Map } from "./styles";

import Character from "./components/Character";

import { useCharacter } from "./hooks/useCharacter";

const App = () => {
	const char = useCharacter();

	const handleKeyDown = (e: KeyboardEvent) => {
		switch (e.code) {
			case "KeyA":
			case "ArrowLeft":
				char.moveLeft();
				break;
			case "KeyD":
			case "ArrowRight":
				char.moveRight();
				break;
			case "KeyW":
			case "ArrowUp":
				char.moveUp();
				break;
			case "KeyS":
			case "ArrowDown":
				char.moveDown();
				break;
		};
	};

	useEffect(() => {
		window.addEventListener("keydown", handleKeyDown);
	}, []);

	return (
		<>
			<Container>
				<Map>
					<Character side={char.side} x={char.x} y={char.y} />
				</Map>
			</Container>
			<GlobalStyles />
		</>
	);
};

export default App;