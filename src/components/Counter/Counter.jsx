import {useState} from 'react';
import classes from './Counter.module.css'

import HeaderText from '../../components/UI/texts/HeaderText'
import Paragraph from '../../components/UI/texts/Paragraph'
import AddButton from '../UI/buttons/AddButton'
import DeleteButton from '../UI/buttons/DeleteButton'

function Counter() {

    const [count, setCount] = useState(0);

    function increment() {
        setCount(count + 1);
    }

    function decrement() {
        setCount(count - 1);
    }

    return (
        <div className={classes.counter}>
            <HeaderText>Счетчик</HeaderText>
            <Paragraph>{count}</Paragraph>
            <div>
                <AddButton onClick={increment}>+</AddButton>
                <DeleteButton onClick={decrement}>-</DeleteButton>
            </div>
        </div>
    )

}

export default Counter;