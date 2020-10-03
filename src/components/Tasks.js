import React from 'react';

export const Tasks = ({tasks}) => {
    return(
        <ul className = "list-group">
            {tasks.map(task =>(
                <li 
                    className="list-group-item task"
                    key={task.id}
                >
                    <div>
                        <strong>{task.title}</strong>
                        <small>{new Date().toLocaleDateString()}</small>
                    </div>

                    <button 
                        type="button" 
                        className="btn btn-outline-danger btn-sm"
                    >
                        &times;
                    </button>
                </li>
            ))}
        </ul>
    );
}