import React from 'react'

export const CheckBox = props => {
    return (
      <li className="list-item">
       <input key={props.id} onClick={props.handleCheckChildElement} type="checkbox" checked={props.isChecked} value={props.value} /> {props.value}
      </li>
    )
}

export default CheckBox