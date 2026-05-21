"use client"

import { useState } from "react"
import { Eye, EyeOff, Lock, Mail, User } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Field, FieldGroup, FieldLabel } from "@/components/ui/field"
import { Input } from "@/components/ui/input"

const RegisterPage = () => {
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)

  return (
    <main className="flex min-h-svh items-center justify-center bg-background px-4 py-10">
      <Card className="w-full max-w-sm">
        <CardHeader>
          <CardTitle>Create account</CardTitle>
          <CardDescription>
            Register with your details or continue with a social account.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form>
            <FieldGroup className="gap-4">
              <Field>
                <FieldLabel htmlFor="name">Name</FieldLabel>
                <div className="relative">
                  <User className="pointer-events-none absolute top-1/2 left-2.5 size-4 -translate-y-1/2 text-muted-foreground" />
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    autoComplete="name"
                    placeholder="Your name"
                    className="pl-8"
                  />
                </div>
              </Field>

              <Field>
                <FieldLabel htmlFor="email">Email</FieldLabel>
                <div className="relative">
                  <Mail className="pointer-events-none absolute top-1/2 left-2.5 size-4 -translate-y-1/2 text-muted-foreground" />
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    placeholder="you@example.com"
                    className="pl-8"
                  />
                </div>
              </Field>

              <Field>
                <FieldLabel htmlFor="password">Password</FieldLabel>
                <div className="relative">
                  <Lock className="pointer-events-none absolute top-1/2 left-2.5 size-4 -translate-y-1/2 text-muted-foreground" />
                  <Input
                    id="password"
                    name="password"
                    type={showPassword ? "text" : "password"}
                    autoComplete="new-password"
                    placeholder="Create a password"
                    className="px-8 pr-10"
                  />
                  <Button
                    type="button"
                    variant="ghost"
                    size="icon"
                    className="absolute top-1/2 right-1 size-8 -translate-y-1/2 active:not-aria-[haspopup]:-translate-y-1/2"
                    aria-label={
                      showPassword ? "Hide password" : "Show password"
                    }
                    aria-pressed={showPassword}
                    onClick={() => setShowPassword((current) => !current)}
                  >
                    {showPassword ? <EyeOff /> : <Eye />}
                  </Button>
                </div>
              </Field>

              <Field>
                <FieldLabel htmlFor="password-confirm">
                  Confirm password
                </FieldLabel>
                <div className="relative">
                  <Lock className="pointer-events-none absolute top-1/2 left-2.5 size-4 -translate-y-1/2 text-muted-foreground" />
                  <Input
                    id="password-confirm"
                    name="passwordConfirm"
                    type={showConfirmPassword ? "text" : "password"}
                    autoComplete="new-password"
                    placeholder="Confirm your password"
                    className="px-8 pr-10"
                  />
                  <Button
                    type="button"
                    variant="ghost"
                    size="icon"
                    className="absolute top-1/2 right-1 size-8 -translate-y-1/2 active:not-aria-[haspopup]:-translate-y-1/2"
                    aria-label={
                      showConfirmPassword ? "Hide password" : "Show password"
                    }
                    aria-pressed={showConfirmPassword}
                    onClick={() =>
                      setShowConfirmPassword((current) => !current)
                    }
                  >
                    {showConfirmPassword ? <EyeOff /> : <Eye />}
                  </Button>
                </div>
              </Field>

              <Button type="submit" className="w-full">
                Register
              </Button>
            </FieldGroup>
          </form>

          <p className="mt-4 text-center text-sm text-muted-foreground">
            Already have an account?{" "}
            <Button asChild variant="link" className="h-auto p-0">
              <Link href="/login">Login</Link>
            </Button>
          </p>

          <div className="my-4 flex items-center gap-3">
            <div className="h-px flex-1 bg-border" />
            <span className="text-xs text-muted-foreground">or</span>
            <div className="h-px flex-1 bg-border" />
          </div>

          <div className="flex items-center justify-center gap-4">
            <Button
              type="button"
              size={"icon-lg"}
              variant="outline"
              className="size-12"
            >
              <span className="relative size-5">
                <Image src={"/assets/icons/GoogleIcon.svg"} alt="Google" fill />
              </span>
              <span className="sr-only">Register with google</span>
            </Button>
            <Button
              type="button"
              size={"icon-lg"}
              variant="outline"
              className="size-12"
            >
              <span className="relative size-5">
                <Image
                  src={"/assets/icons/FacebookIcon.svg"}
                  alt="Facebook"
                  fill
                />
              </span>
              <span className="sr-only">Register with facebook</span>
            </Button>
            <Button
              type="button"
              size={"icon-lg"}
              variant="outline"
              className="size-12"
            >
              <span className="relative size-5">
                <Image
                  src={"/assets/icons/InstagramIcon.svg"}
                  alt="Instagram"
                  fill
                />
              </span>
              <span className="sr-only">Register with instagram</span>
            </Button>
          </div>
        </CardContent>
      </Card>
    </main>
  )
}

export default RegisterPage
