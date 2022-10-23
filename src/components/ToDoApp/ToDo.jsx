import {useState} from "react";
import Paragraph from '../../components/UI/texts/Paragraph'

function ToDo({ todo, removeTask }) {

    const [mark, setMark] = useState('none');

    const [markBackground, setMarkBackground] = useState('#6495ED');

    return (
        <div key={todo.id} style={{backgroundColor: markBackground, padding: '20px', marginBottom: '20px', borderRadius: '20px'}}>
            <Paragraph style={{textDecoration: mark, backgroundColor: 'white', margin: '10px', padding: '20px', color: 'black', textAlign: 'center'}}>
                {todo.task}
            </Paragraph>
            <div style={{display: 'flex', justifyContent: 'center'}}>
                <button 
                    className="deleteButton"
                    style={{margin: '10px'}} 
                    onClick={() => removeTask(todo.id)}
                >
                    <span>Удалить</span>
                </button>
                <button 
                    className="editButton"
                    style={{margin: '10px'}} 
                    onClick={() => {
                        setMark('line-through');
                        setMarkBackground('#F19CBB');
                    }}
                >
                    <span>Отметить</span>
                </button>
            </div>
        </div>
    )

}

export default ToDo;