import React from 'react'
import FCStudent from '../FunctionalElements/FCStudent'

export default function FCStudnets(props) {

    let list = props.items.map(
        (s, index) => <FCStudent Name={s.Name} ID={s.StudentId} AvgGrade={s.AvgGrade}  key={index} index={index} getStudent={props.getStudent} purchases={props.purchases} deleteStudent={props.deleteStudent}/>);
    
    return (
        <div className="cardDiv">
           {list}
        </div>
    )
}

