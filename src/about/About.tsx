import Header from '../utilities/Header';

function About() {
	return (
		<>
			<Header />
			<div className="justify-center">
				<h1 className="text-4xl font-pirata">About</h1>
				<p className="font">Mausritter is a rules-light fantasy adventure roleplaying game made by Losing Games, featuring a unique system of a physical card-based inventory system, and a heap of  home-brewed content made by the wonderful community.</p>
				<p>This website is a hobby project between two friends. We wanted to make a lightweight and easily accessible tool for playing Mausritter where you could experience the fun of using the card system without the physical set. We have no affiliation with Losing Games, and our project will forever remain free and open-source.</p>
				<div>
					<p>Bryan Dang</p>
					<p>Joshua Li</p>
				</div>
			</div>
		</>
	);
}

export default About;