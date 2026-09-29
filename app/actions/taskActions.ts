import { redirect } from "next/navigation";
import { supabase } from "../lib/supabase-client";

export const addTask = async ({task} : {task: {title: string, description: string, status: string}}) => {
    const {error} = await supabase.from("tasks").insert(task);
    if (error) {
        throw new Error(error.message);
    }
}

export const getTasks = async () => {
    const {data, error} = await supabase.from("tasks").select("*");
    if (error) {
        throw new Error(error.message);
    }
    return data;
}

export const deleteTask = async (id: number) => {
    const {error} = await supabase.from("tasks").delete().eq("id", id);
    if (error) {
        throw new Error(error.message);
    }
}

export async function handleLogout() {
    await supabase.auth.signOut();
    redirect("/");
}