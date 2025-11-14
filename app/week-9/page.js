"use client";

import { useUserAuth } from "./_utils/auth-context";

export default function Page() {
  const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();

  const handleSignIn = async () => {
    await gitHubSignIn();
  };

  const handleSignOut = async () => {
    await firebaseSignOut();
  };

  return (
    <div>
      {!user ? (
        <button onClick={handleSignIn}>Sign in with GitHub</button>
      ) : (
        <div>
          <p>Welcome, {user.displayName} ({user.email})</p>
          <button onClick={handleSignOut}>Sign Out</button>
          <a href="/week-9/shopping-list">Go to Shopping List</a>
        </div>
      )}
    </div>
  );
}