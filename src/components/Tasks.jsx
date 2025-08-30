import {
  ChevronRightCircle,
  ChevronRightIcon,
  DeleteIcon,
  LucideTrash,
} from "lucide-react";

import { useNavigate } from "react-router-dom";

function Tasks({ tasks, onTaskClick, onDeleteTaskClick }) {
  const navigate = useNavigate();

  function onSeeDetailsClick(tasks) {
    const query = new URLSearchParams();
    query.set("title", tasks.title);
    query.set("description", tasks.description);
    navigate(`/task?${query.toString()}`);
  }
  return (
    <ul className="space-y-4 p-6 bg-slate-200 rounded-md shadow">
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
          <button
            onClick={() => onSeeDetailsClick(tasks)}
            className="bg-slate-400 p-2 rounded-md text-white"
          >
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
