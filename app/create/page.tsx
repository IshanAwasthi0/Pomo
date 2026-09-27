import AddTaskForm from '../components/AddTaskForm'
import Link from 'next/link'

const page = () => {
    return (
        <>
        <Link href="/"><button>Home</button></Link>
        <div className="flex flex-col items-center justify-center min-h-screen py-2">
            <AddTaskForm />
        </div>
        </>
    )
}

export default page