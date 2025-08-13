interface Task { 
    id: number
    description: string
    isCompleted: boolean
    status: 'pending' | 'inProgress' | 'completed'
}



function getActiveTasks(tasks: Task[]): Task[] {
    return tasks.filter(task => task.status === 'pending' || task.status === 'inProgress');
}


const tasks: Task[] = [
    {
        id: 1,
        description: "Completar proyecto TypeScript",
        isCompleted: false,
        status: 'inProgress'
    },
    {
        id: 2,
        description: "Revisar documentación",
        isCompleted: false,
        status: 'pending'
    },
    {
        id: 3,
        description: "Configurar entorno de desarrollo",
        isCompleted: true,
        status: 'completed'
    },
    {
        id: 4,
        description: "Escribir tests unitarios",
        isCompleted: false,
        status: 'pending'
    },
    {
        id: 5,
        description: "Optimizar rendimiento",
        isCompleted: false,
        status: 'inProgress'
    }
];


console.log("Todas las tareas:");
console.log(tasks);

console.log("\nTareas activas (pendientes o en progreso):");
console.log(getActiveTasks(tasks));


console.log("\nDescripciones de tareas activas:");
const activeTasks = getActiveTasks(tasks);
activeTasks.forEach(task => {
    console.log(`- ${task.description} (${task.status})`);
});