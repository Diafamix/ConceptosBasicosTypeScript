/*
    ===== Código de TypeScript =====
*/

interface Reproductor {
    volumen: number;
    segundo: number;
    cancion: string;
    detalles: Detalles;
}

interface Detalles {
    autor: string;
    anio: number;
}

const reproductor: Reproductor = {
    volumen: 90,
    segundo: 36,
    cancion: 'Mess',
    detalles: {
        autor: 'Ed Sheeran',
        anio: 2015
    }
}

// Desestructuracion del objeto
// const { volumen, segundo, cancion, detalles: { autor } } = reproductor;    Este codigo no es tan facil de leer
const { volumen, segundo, cancion, detalles } = reproductor;
const { autor } = detalles;

console.log('El volumen actual es : ', volumen);
console.log('El segundo actual es: ', segundo);
console.log('La cancion actual es: ', cancion);
console.log('El autor es: ', autor);

console.log(reproductor)

