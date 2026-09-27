import TaskManager from "@/app/components/TaskManager";
import { getTasks } from "@/app/actions/taskActions";
import Link from "next/dist/client/link";

export default async function Home() {
  const tasks = await getTasks();
  return (
    <>
      <div className="flex flex-col items-center  min-h-screen py-2">
        <TaskManager tasks={tasks} />
        <Link href="/create"><button>Create Task</button></Link>
      </div>
    </>
  );
}
