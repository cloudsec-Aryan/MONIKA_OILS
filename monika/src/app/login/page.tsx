import type { Metadata } from "next";
import { AuthForm } from "@/components/layout/AuthForm";

export const metadata: Metadata = {
  title: "Login",
  description: "Login to your MONIKA account.",
};

export default function LoginPage() {
  return <AuthForm mode="login" />;
}
