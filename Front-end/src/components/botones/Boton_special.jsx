import React from 'react'
import '../botones/botones.css'

const Boton_special = (props) => {
    return (
        <>
            <button className='btn-special'>
                {props.text}
            </button>
        </>
    )
}

export default Boton_special