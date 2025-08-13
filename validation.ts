interface CampoFormulario {
    nombre: string
    tipo: "texto" | "numero" | "email"
    valor: string | number
}

function validarCampos(campos: CampoFormulario[]): string[] {
    const camposInvalidos: string[] = [];

    for (const campo of campos) {
        let esValido = true;

        switch (campo.tipo) {
            case "texto":
                if (typeof campo.valor !== "string" || campo.valor.trim().length === 0) {
                    esValido = false;
                }
                break;
            
            case "numero":
                if (typeof campo.valor !== "number" || isNaN(campo.valor)) {
                    esValido = false;
                }
                break;
            
            case "email":
                if (typeof campo.valor !== "string") {
                    esValido = false;
                } else {
                    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                    if (!emailRegex.test(campo.valor)) {
                        esValido = false;
                    }
                }
                break;
        }

        if (!esValido) {
            camposInvalidos.push(campo.nombre);
        }
    }

    return camposInvalidos;
}


const camposFormulario: CampoFormulario[] = [
    {
        nombre: "nombre",
        tipo: "texto",
        valor: "Juan Pérez"
    },
    {
        nombre: "edad",
        tipo: "numero",
        valor: 25
    },
    {
        nombre: "email",
        tipo: "email",
        valor: "juan@ejemplo.com"
    },
    {
        nombre: "telefono",
        tipo: "texto",
        valor: "" 
    },
    {
        nombre: "precio",
        tipo: "numero",
        valor: "no es un número" 
    },
    {
        nombre: "correo_invalido",
        tipo: "email",
        valor: "correo_sin_arroba" 
    }
];


const camposInvalidos = validarCampos(camposFormulario);

console.log("\nCampos inválidos:");
if (camposInvalidos.length === 0) {
    console.log("Todos los campos son válidos ");
} else {
    console.log("Campos con errores:");
    camposInvalidos.forEach(nombre => {
        console.log(`${nombre}`);
    });
}
