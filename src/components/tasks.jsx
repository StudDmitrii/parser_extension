import TaskSelWaySel from "./tasks/TaskSelWaySel"
import TaskSelection from "./tasks/TaskSelection"

export default {
    parsing:[
        {
            taskTitle: 'Выбор элементов:',
            task: <TaskSelWaySel nextTask={nextTask}/>
        },
        {
            taskTitle: 'Выберите элементы на странице...',
            task: <TaskSelection nextTask={nextTask}/>
        },
    ],
}