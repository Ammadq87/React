export const Item = (props) => {
    return (
        <div>

            <p style={{display:'inline', color: props.value.complete ? 'green' : 'red'}}>{props.value.newTask}</p>

            <button onClick={() => props.deleteTask(props.value.taskId)}>X</button>
            <button onClick={() => props.completeTask(props.value.taskId)}>✔️</button>
        </div>
    )
}