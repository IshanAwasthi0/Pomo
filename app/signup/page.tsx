"use client";

import { SubmitEvent } from "react";
import Link from "next/dist/client/link";
import { useState } from "react";


export default function Home() {
    const [user, setUser] = useState({ email: "", password: "" });
    const handleSubmit = (e: SubmitEvent<HTMLFormElement>) => {
        e.preventDefault();
    }
    return (
        <>
        <div className="flex flex-col items-center gap-20 mt-40">
            <h1 className="heading">Sign up</h1>
            <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-4 items-center"
            >
            <input
            type="email"
            placeholder="Email"
            value={user.email}
            onChange={(e) => setUser((prev) => ({...prev, email: e.target.value }))}
            className="input-field"
            required
            />
            <input
            type="password"
            placeholder="Password"
            value={user.password}
            onChange={(e) => setUser((prev) => ({...prev, password: e.target.value }))}
            className="input-field"
            required
            />
            <Link href="/"><p className="font-courier text-brown mt-[-1rem] text-xl hover:underline">Already have an account? Log in</p></Link>
            <Link href="/home"><button className="btn w-40 mt-12">Sign up</button></Link>
            </form>
            
        </div>
        </>
    );
}
