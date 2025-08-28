"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import {
  EmailFormProps,
  emailSchema,
} from "@/app/pages/home/components/contact-section/email-form/schema";
import { defaultValues } from "@/app/pages/home/components/contact-section/email-form/constants";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { CheckCircle, Mail, XCircle } from "lucide-react";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

type SubmissionState = "idle" | "success" | "error";

export default function EmailForm() {
  const [submissionState, setSubmissionState] =
    useState<SubmissionState>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const form = useForm<EmailFormProps>({
    defaultValues,
    mode: "onSubmit",
    resolver: zodResolver(emailSchema),
  });

  async function onSubmit(values: EmailFormProps) {
    const { email } = values;
    setSubmissionState("idle");
    setErrorMessage("");

    try {
      const res = await fetch("/api/emails", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          to: email,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.message || `HTTP error! status: ${res.status}`);
      }

      setSubmissionState("success");
      form.reset();

      setTimeout(() => setSubmissionState("idle"), 5000);
    } catch (err) {
      console.error("Detailed error:", err);
      setSubmissionState("error");
      setErrorMessage(
        err instanceof Error ? err.message : "Something went wrong",
      );
    }
  }

  return (
    <div className=" flex items-center justify-center p-4 relative overflow-hidden">
      <div className="w-full max-w-md relative z-10">
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 blur-3xl rounded-3xl transform rotate-1"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-pink-500/10 blur-2xl rounded-3xl transform -rotate-1"></div>
          <div className="relative bg-gray-800/80 backdrop-blur-xl rounded-2xl border border-gray-700/50 shadow-2xl shadow-purple-500/20 p-8 space-y-8">
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-6"
              >
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem className="space-y-4">
                      <FormLabel className="flex items-center gap-3 text-xl font-semibold text-gray-200">
                        <div className="p-2 bg-blue-500/20 rounded-lg">
                          <Mail className="h-5 w-5 text-blue-400" />
                        </div>
                        Email Address
                      </FormLabel>
                      <FormControl>
                        <Input
                          type="email"
                          placeholder="Enter your email address"
                          className="h-14 text-lg px-5 border-2 border-gray-600/50 rounded-xl focus:border-blue-500 focus:ring-0 transition-all duration-300 bg-gray-700/50 backdrop-blur-sm placeholder:text-gray-400 text-white hover:border-gray-500/70 focus:bg-gray-700/70"
                          {...field}
                        />
                      </FormControl>
                      <FormDescription className="text-gray-400 text-base leading-relaxed">
                        No credit card required. Be the first to know when we
                        launch.
                      </FormDescription>
                      <FormMessage className="text-red-400 text-base font-medium" />
                    </FormItem>
                  )}
                />

                <Button
                  type="submit"
                  disabled={
                    form.formState.isSubmitting || submissionState === "success"
                  }
                  className="w-full h-14 text-lg font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 hover:from-blue-700 hover:via-purple-700 hover:to-blue-700 border-0 rounded-xl shadow-2xl shadow-purple-500/30 hover:shadow-purple-500/40 transform hover:scale-[1.02] transition-all duration-300 disabled:opacity-70 disabled:hover:scale-100 relative overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 transform translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
                  {form.formState.isSubmitting ? (
                    <div className="flex items-center gap-3">
                      <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                      <span>Sending...</span>
                    </div>
                  ) : submissionState === "success" ? (
                    <div className="flex items-center gap-3">
                      <CheckCircle className="h-6 w-6" />
                      <span>Welcome Aboard!</span>
                    </div>
                  ) : (
                    <div className="flex items-center gap-3">
                      <Mail className="h-6 w-6" />
                      <span>Submit</span>
                    </div>
                  )}
                </Button>
              </form>
            </Form>

            <div className="flex items-center justify-center gap-6 pt-4 border-t border-gray-700/50">
              <div className="flex items-center gap-2 text-gray-400 text-sm">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span>Secure</span>
              </div>
              <div className="flex items-center gap-2 text-gray-400 text-sm">
                <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse delay-300"></div>
                <span>No Spam</span>
              </div>
              <div className="flex items-center gap-2 text-gray-400 text-sm">
                <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse delay-600"></div>
                <span>Early Access</span>
              </div>
            </div>
          </div>
        </div>

        {submissionState === "success" && (
          <div className="mt-6 animate-in slide-in-from-bottom-4 duration-500">
            <Alert className="border-emerald-500/30 bg-emerald-500/10 backdrop-blur-sm text-emerald-300 rounded-xl border-2 p-5">
              <CheckCircle className="h-6 w-6 text-emerald-400" />
              <AlertDescription className="text-base font-medium ml-3">
                🎉 You are on the list! Check your inbox for confirmation.
              </AlertDescription>
            </Alert>
          </div>
        )}
        {submissionState === "error" && (
          <div className="mt-6 animate-in slide-in-from-bottom-4 duration-500">
            <Alert className="border-red-500/30 bg-red-500/10 backdrop-blur-sm text-red-300 rounded-xl border-2 p-5">
              <XCircle className="h-6 w-6 text-red-400" />
              <AlertDescription className="text-base font-medium ml-3">
                ❌ Something went wrong: {errorMessage}
              </AlertDescription>
            </Alert>
          </div>
        )}
      </div>
    </div>
  );
}
