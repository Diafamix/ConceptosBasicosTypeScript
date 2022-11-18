/*
    ===== Código de TypeScript =====
*/

export interface Producto {
    desc: string;
    precio: number;
}

const telefono: Producto = {
    desc: 'Nokia A1',
    precio: 150
}

const tablet: Producto = {
    desc: 'Ipad Air',
    precio: 350
}

export function calculaISV( producto: Producto[] ): [number, number] {
    let total = 0;

    producto.forEach( ( {precio} ) => {
        total += precio;
    })

    return [total, total * 0.15];
}

const articulos = [ telefono, tablet ];
const [ total, isv ] = calculaISV( articulos );

console.log('ISV: ', isv);
console.log('Total: ', total);