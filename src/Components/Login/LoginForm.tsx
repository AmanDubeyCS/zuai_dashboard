"use client";

import Link from "next/link";
import { FormEvent, useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { Label } from "@/Components/ui/label"
import { Input } from "@/Components/ui/input"
import { Button } from "@/Components/ui/button"

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const router = useRouter();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true)
    try {
      const res = await signIn("credentials", {
        email,
        password,
        redirect: false,
      });

      if (res?.error) {
        setLoading(false)
        setError("Invalid Credentials");
        return;
      }

      router.replace("dashboard");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex flex-col justify-center gap-3 place-items-center h-screen">
        {error && (
        <div className=" text-red-500 font-bold text-xl w-fit py-1 px-3 rounded-md mt-2">
          {error}
        </div>
      )}
      <div className="space-y-2 text-center  w-[400px]">
        <h1 className="text-3xl font-bold">Log In</h1>
        <p className="text-gray-500 dark:text-gray-400">
          Enter your information to create an account
        </p>
      </div>
      <form onSubmit={handleSubmit} className="space-y-4 w-[350px]">
        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            placeholder="m@example.com"
            required
            type="email"
            className="focus-visible:ring-transparent"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="password">Password</Label>
          <Input
            id="password"
            required
            type="password"
            className="focus-visible:ring-transparent"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <Button className="w-full" type="submit">
          Log In
        </Button>

        <Link className="text-sm mt-3 text-right" href={"/register"}>
          Don't have an account? <span className="underline">Register</span>
        </Link>
      </form>
    </div>
    // <div className="grid place-items-center h-screen">
    //   <div className="shadow-lg p-5 rounded-lg border-t-4 border-green-400">
    //     <h1 className="text-xl font-bold my-4">Login</h1>

    //     <form onSubmit={handleSubmit} className="flex flex-col gap-3">
    //     <Input type="email" placeholder="Email" className="focus-visible:ring-transparent" onChange={(e) => setEmail(e.target.value)}/>
    //       {/* <input
    //         onChange={(e) => setEmail(e.target.value)}
    //         type="text"
    //         placeholder="Email"
    //       /> */}
    //       <Input type="password" placeholder="Email"  onChange={(e) => setPassword(e.target.value)}/>
    //       {/* <input
    //         onChange={(e) => setPassword(e.target.value)}
    //         type="password"
    //         placeholder="Password"
    //       /> */}
    //       <button className="bg-green-600 text-white font-bold cursor-pointer px-6 py-2">
    //         Login
    //       </button>
    //       {error && (
    //         <div className="bg-red-500 text-white w-fit text-sm py-1 px-3 rounded-md mt-2">
    //           {error}
    //         </div>
    //       )}

    //       <Link className="text-sm mt-3 text-right" href={"/register"}>
    //         Don't have an account? <span className="underline">Register</span>
    //       </Link>
    //     </form>
    //   </div>
    // </div>
  );
}
