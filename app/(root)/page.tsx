import AddTaskForm from "@/app/components/AddTaskForm";

export default function Home() {
  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen py-2">
        <AddTaskForm  tasks={[]} />
      </div>
    </>
  );
}
