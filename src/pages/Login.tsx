import React, { FunctionComponent, useState } from "react";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";

export interface LoginPageProps {}
const LoginPage: FunctionComponent<LoginPageProps> = (props) => {
	const auth = getAuth();
	const navigate = useNavigate();
	const [authing, setAuthing] = useState<boolean>(false);

	const signInWithGoogle = async () => {
		setAuthing(true);
		signInWithPopup(auth, new GoogleAuthProvider())
			.then((response) => {
				console.log("response", response.user.uid);
				navigate("/");
			})
			.catch((err) => {
				console.log("err", err);
				setAuthing(false);
			});
	};

	return (
		<>
			<h1>Login Page</h1>
			<button onClick={() => signInWithGoogle()} disabled={authing}>
				Sign In with Google
			</button>
		</>
	);
};

export default LoginPage;
