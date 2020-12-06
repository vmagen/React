import React from 'react'
import FCItem from './FCItem'

export default function FCItemList(props) {
    let items =  props.items.map((i,index) =>
        <FCItem img={props.img} title={props.title} desc={props.desc}  index={index}/>);
    return (
       <div>
          {items}
       </div>
    )
}
