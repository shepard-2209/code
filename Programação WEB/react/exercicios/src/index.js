import React from 'react'
import ReactDOM from 'react-dom'


// import Multi, { BoaNoite } from './componentes/Multiplos'
import Saudacao from './componentes/Saudacao'

ReactDOM.render(
    <div>
        <Saudacao tipo="Bom Dia" nome="Leonardo" />
    </div>
    , document.getElementById('root'))

// ReactDOM.render(
//     <div>
//         <Multi.BoaTarde nome="Leonardo" />
//         <BoaNoite nome="Michelli" />
//     </div>
//     , document.getElementById('root'))