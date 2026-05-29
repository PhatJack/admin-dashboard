import type { Metadata } from "next"
import React from "react"

import LoginPage from "../_components/LoginPage"

export const metadata: Metadata = {
  title: "Login",
  description: "Sign in to access the admin dashboard.",
}

const Login = () => {
  return <LoginPage />
}

export default Login
