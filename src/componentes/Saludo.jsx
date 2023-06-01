import { useState } from "react";

const Saludo = ({nuevoSaludo}) => {
let [saludo, stateSaludo] = useState('');
    return (
        <div>
            <h1>Hello {nuevoSaludo} {saludo}!</h1>
            <button className="btn btn-primary" onClick={()=> stateSaludo(saludo='(from changed state)')} >Click me</button>
        </div>
    );
};

export default Saludo;