import type { Metadata } from "next"
import React from "react"

import RegisterPage from "../_components/RegisterPage"

export const metadata: Metadata = {
  title: "Register",
  description: "Create an account to start using the admin dashboard.",
}

const Register = () => {
  return <RegisterPage />
}

export default Register
