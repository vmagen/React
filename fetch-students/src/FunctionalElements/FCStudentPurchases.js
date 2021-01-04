import React from 'react'
import FCStudentPurchase from './FCStudentPurchase';
import {Button} from 'react-bootstrap';

export default function FCStudentPurchases(props) {
    
  

    let list = props.purchases.map(
        (s, index) => <FCStudentPurchase Name={s.Name} date={s.Date} price={s.Price} amount={s.Amount}  key={index} index={index}   />);
    
    
    return (
      <div className="cardDiv">
          {list}
          <Button variant="secondary" onClick={props.reload}> Go Back</Button>
      </div>
      
    )
}
