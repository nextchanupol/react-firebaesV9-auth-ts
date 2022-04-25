import React, { FunctionComponent } from "react";

import { getAuth, signOut } from "firebase/auth";

export interface HomePageProps {}
const HomePage: FunctionComponent<HomePageProps> = (props) => {
	const auth = getAuth();
	return (
		<>
			<h1>Home Page</h1>
			<button onClick={() => signOut(auth)}> Sign Out</button>
		</>
	);
};

export default HomePage;
