import Header from '../components/header';
import Image from 'next/image';

// The Home component is a functional component that returns the main content for the homepage.
const Home = () => (
	// The Header component is included at the top of the page.
	// The Image component from Next.js is used to include an image on the page.
	// The src attribute points to the location of the image file, and the alt attribute provides a description of the image.
	// The width and height attributes set the dimensions of the image.
	// The styles for the h1 element and the div containing the image are defined using styled-jsx.
	// This allows for scoped CSS that only applies to this component.

	<div>
		<Header />
		<h1>Welcome to My Portfolio</h1>
		<div className="pic">
			<Image
				src="/../static/images/portfoliophoto2023-small.png"
				alt="Description of the image"
				width={500}
				height={500}
			/>
		</div>
		<style jsx>{`
			h1 {
				text-align: center;
				margin-top: 50px;
				font-size: 2.5rem;
				color: #333;
			}
			.pic {
				display: flex;
				flex-direction: column;
				align-items: center;
				justify-content: center;
				gap: 1em;
				padding: 1em;
			}
		`}</style>
	</div>
);

// The Home component is exported so it can be imported and used in other components.
export default Home;
