import { SignedIn, SignedOut, SignInButton, SignUpButton, UserButton } from '@clerk/clerk-react'

export const Auth = () => {
	return (
		<div className="sign-in-container">
			<SignedIn> {/* This is a Clerk component that checks if the user is signed in */}
				<UserButton />
			</SignedIn>
			<SignedOut> {/* This is a Clerk component that checks if the user is signed out */}
				<SignInButton mode='modal'/> {/* This is a Clerk component that creates a sign in button and the modal creates a pop-up instead of a redirect */}
				<SignUpButton mode='modal'/> {/* This is a Clerk component that creates a sign up button and the modal creates a pop-up instead of a redirect */}
			</SignedOut> 
		</div>
	);
}