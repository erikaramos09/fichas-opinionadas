import React, { useState } from 'react'

function ShowHide() {
        const[show, setShow] = useState(true);

            const handleClick = (event) =>{
                setShow(!show);
            }
    
    return (<div>
       {show && <h2>Holi</h2>}
       <button onClick={handleClick}>{show ? "Ocultar" : "Mostrar"}</button>
        </div>);
}

export default ShowHide
