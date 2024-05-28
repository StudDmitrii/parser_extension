import TaskSelWaySel from "./tasks/TaskSelWaySel"
import TaskSelection from "./tasks/TaskSelection"

export default {
    parsing:[
        {
            taskTitle: 'Выбор элементов:',
            task: <TaskSelWaySel/>
        },
        {
            taskTitle: 'Выберите элементы на странице...',
            task: <TaskSelection/>
        },
    ],
}