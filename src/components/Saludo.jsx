
import { useState } from "preact/hooks";


export default function Saludo({mensaje}){
    const smsRandon = () => mensaje[(Math.floor(Math.random() * mensaje.length))];

    const [saludo, setSaludo] = useState(mensaje[0]);

    return (
        <div>
            <h3>{saludo} ¡Gracias por tu visita!</h3>
            <button onClick={() => setSaludo(smsRandon())}>
                Nuevo Saludo
            </button>
        </div>
    );
}

