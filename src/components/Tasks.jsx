import {
  ChevronRightCircle,
  ChevronRightIcon,
  DeleteIcon,
  LucideTrash,
} from "lucide-react";

function Tasks({tasks, onTaskClick, onDeleteTaskClick}) {
  return (
    <ul className="space-y-4 p-6 bg-slate-200 roundesd-md shadow">
      {tasks.map((tasks) => (
        <li key={tasks.id} className="flex gap-2">
          <button
            onClick={() => onTaskClick(tasks.id)}
            className={`bg-slate-400 w-full text-white p-2 rounded-md ${
              tasks.isCompleted && " line-through"
            }`}
          >
            {tasks.title}
          </button>
          <button className="bg-slate-400 p-2 rounded-md text-white">
            <ChevronRightIcon />
          </button>
          <button
            onClick={() => onDeleteTaskClick(tasks.id)}
            className="bg-slate-400 p-2 rounded-md text-white"
          >
            <LucideTrash />
          </button>
        </li>
      ))}
    </ul>
  );
}

export default Tasks;
