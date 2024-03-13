import AddTask from "@/components/basicos/AddTask";

export default function Todoapp() {
    return(
        <main className='max-w-4xl mx-auto  mt-4'>
            <div className="text-center my-5 flex flex-col gap-4">
                <h1 className="text-2xl font-bold">Todo list App</h1>
                <AddTask/>
            </div>
        </main>

    ) 
}