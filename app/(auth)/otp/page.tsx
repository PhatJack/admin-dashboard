import type { Metadata } from "next"
import React from "react"

import OTPPage from "../_components/OTPPage"

export const metadata: Metadata = {
  title: "OTP Verification",
  description: "Enter a one-time password to verify your dashboard account.",
}

const OTP = () => {
  return <OTPPage />
}

export default OTP
