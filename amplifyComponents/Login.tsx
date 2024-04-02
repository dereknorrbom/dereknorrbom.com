// components/Login.tsx
"use client";

import '@aws-amplify/ui-react/styles.css';

import { withAuthenticator } from "@aws-amplify/ui-react";
import { AuthUser } from "aws-amplify/auth";
import { redirect } from "next/navigation";
import { useEffect } from "react";

function Login({ user }: { user?: AuthUser }) {
  useEffect(() => {
    if (user) {
      redirect("/");
    }
  }, [user]);
  return null;
}

export default withAuthenticator(Login, { hideSignUp: true });