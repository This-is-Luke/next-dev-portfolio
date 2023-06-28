import React from 'react';
import Link from 'next/link';

// The Header component is a functional component that returns a header element.
// This header includes a navigation bar with links to different pages in the application.
const Header = () => (
	// The Link component from Next.js is used to create navigation links.
	// These links lead to the Home, About, Projects, and Contact pages.
	// The styles for the navigation bar and links are defined using styled-jsx.
	// This allows for scoped CSS that only applies to this component.

	<header>
		<nav>
			<Link href="/">Home</Link>
			<Link href="/about">About</Link>
			<Link href="/projects">Projects</Link>
			<Link href="/contact">Contact</Link>
		</nav>
		<style jsx global>{`
			nav {
				display: flex;
				justify-content: space-around;
				padding: 1em;
				background-color: #333;
				color: #fff;
				font-family: 'Arial';
				font-size: 1.2rem;
				font-weight: 600;
			}
			nav a {
				color: #fff;
				text-decoration: none;
				font-family: 'Arial';
				font-size: 1.2rem;
				font-weight: 600;
			}
		`}</style>
	</header>
);

// The Header component is exported so it can be imported and used in other components.
export default Header;
