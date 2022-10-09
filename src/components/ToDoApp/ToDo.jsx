import {useState} from "react";
import Paragraph from '../../components/UI/texts/Paragraph'
import EditButton from '../UI/buttons/EditButton'
import DeleteButton from '../UI/buttons/DeleteButton'

function ToDo({ todo, removeTask }) {

    const [mark, setMark] = useState('none');

    const [markBackground, setMarkBackground] = useState('#6495ED');

    return (
        <div key={todo.id} style={{backgroundColor: markBackground, padding: '20px', marginBottom: '20px', borderRadius: '20px'}}>
            <Paragraph style={{textDecoration: mark, backgroundColor: 'white', margin: '20px', padding: '20px', color: 'black', textAlign: 'center'}}>
                {todo.task}
            </Paragraph>
            <div style={{display: 'flex', justifyContent: 'center'}}>
                <DeleteButton 
                    style={{margin: '10px'}} 
                    onClick={() => removeTask(todo.id)
                }>
                    Удалить
                </DeleteButton>
                <EditButton 
                    style={{margin: '10px'}} 
                    onClick={() => {
                        setMark('line-through');
                        setMarkBackground('#F19CBB');
                    }}>
                    Отметить
                </EditButton>
            </div>
        </div>
    )

}

export default ToDo;