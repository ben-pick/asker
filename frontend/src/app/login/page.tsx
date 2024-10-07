"use client";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useFormState } from "react-dom";
import login from "@/app/login/loginAction";

import { useToast } from "@/hooks/use-toast";
import { useEffect } from "react";

export default function Login() {
  const { toast } = useToast();

  const [state, formAction] = useFormState(login, {
    message: "",
  });
  useEffect(() => {
    state.message &&
      toast({
        variant: "default",
        title: "Uh oh! Something went wrong.",
        description: state.message,
      });
  }, [state]);

  return (
    <form
      className="flex items-center justify-center h-full"
      action={formAction}
    >
      <div className="flex flex-col items-center gap-2">
        <h1 className="text-2xl font-semibold">Login</h1>
        <p className="text-sm text-muted-foreground">
          Enter your email below to login
        </p>
        <Input
          placeholder="name@example.com"
          name="email"
          className="text-md h-12"
        />
        <Button className="w-full" type="submit">
          Sign in with email
        </Button>
        <div className="relative w-full my-4">
          <div className="absolute inset-0 flex items-center">
            <span className="w-full border-t"></span>
          </div>
          <div className="relative flex justify-center text-xs uppercase">
            <span className="bg-background px-2 text-muted-foreground">Or</span>
          </div>
        </div>
        <Button className="w-full" variant="secondary" type="button">
          Create new account
        </Button>
      </div>
    </form>
  );
}
