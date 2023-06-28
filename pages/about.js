// this is the about page, it is a functional component that returns a div element with a header and paragraph element.

import Header from '../components/header';

const About = () => (
	<div>
		<Header />
		<h1>About Me</h1>
		<p className="about-text">
			I am a Full Stack Web Developer specializing in the MERN stack
			(MongoDB, Express.js, React.js, Node.js). Despite having only 8 months
			of experience in the field, I have managed to acquire a broad set of
			skills and knowledge, allowing me to build complete, scalable web
			applications. I am passionate about coding, constantly learning and
			improving my skills to keep up with the fast-paced world of web
			development.
		</p>
		<style jsx>{`
			.about-text {
				background-color: #f4f4f4;
				color: #333;
				font-size: 1.2rem;
        font-family: 'sans-serif';
        font-weight: 200;
				margin: 1em;
				padding: 1em;
				border-radius: 5px;
			}
		`}</style>
	</div>
);

export default About;
