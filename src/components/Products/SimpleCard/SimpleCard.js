import {useState} from "react";

export const SimpleCard = (props) => {
    const [cases, setCases] = useState([
        {
            img: '../../public/images/cases/1.png',
            title: 'Стеклянные'
        }
    ])


    return (
        <div>
            <p title={cases.title}></p>
        </div>
    )
}