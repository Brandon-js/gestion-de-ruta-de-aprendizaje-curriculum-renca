import React from 'react'
import '../botones/botones.css'

const Boton_1 = (param,link) => {
    return (
        <>
            <button className='btn-primario'>
                {param.text}
            </button>
        </>
    )
}

export default Boton_1