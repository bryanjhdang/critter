import Header from '../utilities/Header';
import AboutProfile from './AboutProfile';

function About() {
	return (
		<>
			<Header />
			<div className="justify-center">
				<h1 className="text-5xl font-pirata">About</h1>
				
				<p className="text-xl font-barlow-condensed"><span className="font-pirata">Mausritter</span> is a rules-light fantasy adventure roleplaying game made by <span className="font-pirata">Losing Games</span>, featuring a unique system of a physical card-based inventory system, and a heap of  home-brewed content made by the wonderful community.</p>

				<p className="text-xl font-barlow-condensed">This website is a hobby project between two friends. We wanted to make a lightweight and easily accessible tool for playing Mausritter where you could experience the fun of using the card system without the physical set. We have <span className="font-pirata">no affiliation with Losing Games</span>, and our project will forever remain <span className="font-pirata">free</span> and <span className="font-pirata">open-source</span>.</p>
				
				{/* Profiles for Bryan and Josh */}
				<div>
					{/* Need to move this into a class */}
					<AboutProfile/>
					<p className="text-xl underline font-barlow-condensed">
						<a className="p-2 hover:bg-yellow" href="https://www.linkedin.com/in/bryanjhdang" target='blank'>Bryan Dang</a>
					</p>

					{/* Need to move this into a class */}
					<AboutProfile/>
					<p className="text-xl underline font-barlow-condensed">
						<a className="p-2 hover:bg-yellow" href="https://www.linkedin.com/in/joshuajli/" target='blank'>Joshua Li</a>
					</p>
				</div>
			</div>
		</>
	);
}

export default About;