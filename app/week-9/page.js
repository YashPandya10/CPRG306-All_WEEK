"use client";

import { useUserAuth } from "./_utils/auth-context";
import Link from "next/link";

export default function Page() {
  const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();

  if (!user) {
    return (
      <div>
        <button onClick={() => gitHubSignIn()}>Sign in with GitHub</button>
      </div>
    );
  }

  return (
    <div>
      <p>Welcome, {user.displayName} ({user.email})</p>
      <button onClick={() => firebaseSignOut()}>Sign Out</button><br/>
      <Link href="/week-9/shopping-list">Go to Shopping List</Link>
    </div>
  );
}