import AddTaskForm from '../components/AddTaskForm'
import Link from 'next/link'

const page = () => {
    return (
        <>
        <Link href="/home"><button className='font-lobster text-3xl text-brown absolute top-10 left-10'>Back to Home</button></Link>
        <div className="flex flex-col items-center justify-center mt-30 gap-20">
            <h1 className="heading">Create Task</h1>
            <AddTaskForm />
        </div>
        </>
    )
}

export default page