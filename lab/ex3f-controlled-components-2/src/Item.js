import React from 'react'

const Item = props => {

   return (
       <div>
            <li key={props.index}>{props.item}</li>
       </div>
   )
}

export default Item;