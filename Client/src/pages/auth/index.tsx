import { SignedIn, SignedOut, SignInButton, SignUpButton } from '@clerk/clerk-react'
import { Navigate } from 'react-router-dom'

export const Auth = () => {
	return (
		<div className="sign-in-container">
			<SignedIn> {/* This is a Clerk component that checks if the user is signed in */}
				<Navigate to='/Dashboard' /> {/* This is a React Router component that redirects the user to the dashboard */}
			</SignedIn>
			<SignedOut> {/* This is a Clerk component that checks if the user is signed out */}
				{/* This is a Clerk component that allows the user to sign in or sign up with a modal */}
				<SignInButton mode='modal'/> 
				<SignUpButton mode='modal'/>
			</SignedOut> 
		</div>
	);
}