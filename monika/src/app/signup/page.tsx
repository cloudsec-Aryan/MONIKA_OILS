import type { Metadata } from "next";
import { AuthForm } from "@/components/layout/AuthForm";

export const metadata: Metadata = {
  title: "Sign up",
  description: "Create a MONIKA account.",
};

export default function SignupPage() {
  return <AuthForm mode="signup" />;
}
