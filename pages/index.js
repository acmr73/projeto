import { useState } from 'react';
import { createPortal } from 'react-dom';


function home(){
    return <div>
        <h1>Maria Fernanda Batista</h1>
        <Contador />
        </div>
}


function Contador() {
    const [contador, setcontador] = useState(1);

    function adicicionarcontador(){
        setcontador(contador+1);
    } 
    return(
        <div>
            <div>{contador}</div>
            <button onClick={adicicionarcontador}>Adicionar</button>
        </div>
    )

} 

export default home