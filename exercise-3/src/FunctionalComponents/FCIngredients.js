import React from 'react'
import FCIngredient from './FCIngredient';
import {Modal} from 'react-bootstrap';
export default function FCIngredients(props) {

    let list = props.ingredients.map(
        (r, index) => <FCIngredient name={r.Name} image={r.Image} key={index} />);

    return (
        <div>
        <Modal.Dialog>
            <Modal.Body>
                {list}
            </Modal.Body>
        </Modal.Dialog>
        </div>
    )
}
