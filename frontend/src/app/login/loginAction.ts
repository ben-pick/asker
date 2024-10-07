"use server";
import { cookies } from "next/headers";

import { redirect } from "next/navigation";
export default async function login(prevState: any, formData: FormData) {
    const email = formData.get("email");
    const response = await fetch(`http://${process.env.backend_host}/api/login`, {
        method: "POST",
        body: JSON.stringify({ email }),
        headers: {
          'Content-Type': 'application/json',
        }
      });
    const result = await response.json();
    if (!response.ok) {
        return result;
    }
    cookies().set("accessToken",result.token, {
      httpOnly: true,
      secure: true,
      sameSite: true
    })
    redirect("/chat");

  }
