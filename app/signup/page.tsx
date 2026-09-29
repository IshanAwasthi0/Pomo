'use client';

import { SubmitEvent, useEffect } from "react";
import Link from "next/dist/client/link";
import { useState } from "react";
import { supabase } from "../lib/supabase-client";
import { redirect } from "next/navigation";


export default function Home() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [session, setSession] = useState<any>(null);

    const fetchSession = async () => {
        const currentSession = await supabase.auth.getSession();
        if (currentSession.error) {
        console.error("Error fetching session:", currentSession.error.message);
        } else {
        setSession(currentSession.data.session);
        }
    };

    useEffect(() => {
        fetchSession();

        const { data: authListener } = supabase.auth.onAuthStateChange((event, session) => {
        setSession(session);
        });

        return () => {
        authListener?.subscription.unsubscribe();
        };
    }, []);

    if (session) redirect("/home");
    
    const handleSubmit = async (e: SubmitEvent<HTMLFormElement>) => {
        e.preventDefault();
        const {error} = await supabase.auth.signUp({ email, password });
        if (error) {
            console.error("Error signing up:", error.message);
        }
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
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="input-field"
            required
            />
            <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="input-field"
            required
            />
            <Link href="/"><p className="font-courier text-brown mt-[-1rem] text-xl hover:underline">Already have an account? Log in</p></Link>
            <button className="btn w-40 mt-12" type="submit">Sign up</button>
            </form>
            
        </div>
        </>
    );
}
