type TipoCambio = 'nombre' | 'correo' | 'contraseña';

interface CambioUsuario {
    id: number
    tipo: TipoCambio
}

interface ResumenCambios {
    nombre: number
    correo: number
    contraseña: number
    total: number
}

function generarResumenCambios(cambios: CambioUsuario[]): ResumenCambios {
    const resumen: ResumenCambios = {
        nombre: 0,
        correo: 0,
        contraseña: 0,
        total: cambios.length
    };

    for (const cambio of cambios) {
        switch (cambio.tipo) {
            case 'nombre':
                resumen.nombre++;
                break;
            case 'correo':
                resumen.correo++;
                break;
            case 'contraseña':
                resumen.contraseña++;
                break;
        }
    }

    return resumen;
}


const historialCambios: CambioUsuario[] = [
    {
        id: 1,
        tipo: 'nombre',
    },
    {
        id: 2,
        tipo: 'correo',
        
    },
    {
        id: 3,
        tipo: 'contraseña',
        
    },
    {
        id: 4,
        tipo: 'nombre',
        
    },
    {
        id: 5,
        tipo: 'correo',
      
    },
    {
        id: 6,
        tipo: 'contraseña',
       
    }
];



const resumen = generarResumenCambios(historialCambios);

console.log("RESUMEN DE CAMBIOS:");
console.log(`Total de cambios: ${resumen.total}`);
console.log(`Cambios de nombre: ${resumen.nombre}`);
console.log(`Cambios de correo: ${resumen.correo}`);
console.log(`Cambios de contraseña: ${resumen.contraseña}`);


