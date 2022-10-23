import {useState} from 'react';
import classes from './Counter.module.css'

import HeaderText from '../../components/UI/texts/HeaderText'
import Paragraph from '../../components/UI/texts/Paragraph'

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
                <button onClick={increment} className="addButton">
                    <span>+</span>
                </button>
                <button onClick={decrement} className="deleteButton">
                    <span>-</span>
                </button>
            </div>
        </div>
    )

}

export default Counter;