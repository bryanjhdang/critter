import Header from '../utilities/Header';

interface ProfileProps {
  name: string;
  imgSrc: string;
  linkedin: string;
}

const Profile = ({name, imgSrc, linkedin}: ProfileProps) => (
  <div>
		{/* <img src={imgSrc} alt={name}/> */}
    <p className="text-2xl underline font-barlow-condensed">
			<a className="p-2 hover:bg-yellow" href={linkedin} target='blank'>{name}</a>
		</p>
  </div>
);

function About() {
	return (
		<>
			<Header />
			<div className="px-40 mx-40">
				<h1 className="text-5xl font-pirata text-center">About</h1>
				
				<p className="text-2xl font-barlow-condensed py-4">
					<span className="font-pirata">Mausritter</span> is a rules-light fantasy adventure roleplaying game made by <span className="font-pirata">Losing Games</span>, featuring a unique system of a physical card-based inventory system, and a heap of  home-brewed content made by the wonderful community.
				</p>

				<p className="text-2xl font-barlow-condensed py-4">
					This website is a hobby project between two friends. We wanted to make a lightweight and easily accessible tool for playing Mausritter where you could experience the fun of using the card system without the physical set. We have <span className="font-pirata">no affiliation with Losing Games</span>, and our project will forever remain <span className="font-pirata">free</span> and <span className="font-pirata">open-source</span>.
				</p>
				
				<div className="grid grid-cols-2 gap-4 place-items-center py-4">
					<Profile name="Bryan Dang" imgSrc="" linkedin="https://www.linkedin.com/in/bryanjhdang"/>
					<Profile name="Joshua Li" imgSrc="" linkedin="https://www.linkedin.com/in/joshuajli/"/>
				</div>
			</div>
		</>
	);
}

export default About;