import type { Metadata } from "next"
import React from "react"

import ForgotPasswordPage from "../_components/ForgotPasswordPage"

export const metadata: Metadata = {
  title: "Forgot Password",
  description: "Reset your password and recover access to your dashboard account.",
}

const ForgotPassword = () => {
  return <ForgotPasswordPage />
}

export default ForgotPassword
