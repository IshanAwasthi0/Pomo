// 'use client';

import TaskManager from "@/app/components/TaskManager";
import { getTasks } from "@/app/actions/taskActions";
import Link from "next/dist/client/link";
import LogoutButton from "../components/LogoutButton";

export default async function Home() {
    const tasks = await getTasks();

    return (
        <>
        <LogoutButton />
        <div className="flex flex-col gap-20 items-center min-h-screen my-20">
            <h1 className="heading">Tasks</h1>
            <TaskManager tasks={tasks} />
            <Link href="/create"><button className="btn w-40">Create</button></Link>
        </div>
        </>
    );
}