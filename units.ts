type UnidadMedida = "cm" | "m" | "km" | "in" | "ft";

interface ConversionResult {
    valor: number
    unidad: UnidadMedida
    error?: string
}

function convertirUnidad(
    valor: number, 
    unidadOrigen: UnidadMedida, 
    unidadDestino: UnidadMedida
): ConversionResult {
    
    if (valor < 0) {
        return {
            valor: 0,
            unidad: unidadDestino,
            error: "El valor no puede ser negativo"
        };
    }

    if (unidadOrigen === unidadDestino) {
        return {
            valor: valor,
            unidad: unidadDestino
        };
    }

    let valorEnMetros: number;

    switch (unidadOrigen) {
        case "cm":
            valorEnMetros = valor / 100;
            break;
        case "m":
            valorEnMetros = valor;
            break;
        case "km":
            valorEnMetros = valor * 1000;
            break;
        case "in":
            valorEnMetros = valor * 0.0254;
            break;
        case "ft":
            valorEnMetros = valor * 0.3048;
            break;
        default:
            return {
                valor: 0,
                unidad: unidadDestino,
                error: "Unidad de origen no válida"
            };
    }

  
    let resultado: number;

    switch (unidadDestino) {
        case "cm":
            resultado = valorEnMetros * 100;
            break;
        case "m":
            resultado = valorEnMetros;
            break;
        case "km":
            resultado = valorEnMetros / 1000;
            break;
        case "in":
            resultado = valorEnMetros / 0.0254;
            break;
        case "ft":
            resultado = valorEnMetros / 0.3048;
            break;
        default:
            return {
                valor: 0,
                unidad: unidadDestino,
                error: "Unidad de destino no válida"
            };
    }

    return {
        valor: Math.round(resultado * 1000000) / 1000000, 
        unidad: unidadDestino
    };
}


function formatearResultado(resultado: ConversionResult): string {
    if (resultado.error) {
        return `Error: ${resultado.error}`;
    }
    return `${resultado.valor} ${resultado.unidad}`;
}


console.log("CONVERSOR DE UNIDADES DE LONGITUD");
console.log("=" .repeat(50));


const casosPrueba = [
    { valor: 100, origen: "cm" as UnidadMedida, destino: "m" as UnidadMedida },
    { valor: 1.5, origen: "km" as UnidadMedida, destino: "m" as UnidadMedida },
    { valor: 12, origen: "in" as UnidadMedida, destino: "cm" as UnidadMedida },
    { valor: 5, origen: "ft" as UnidadMedida, destino: "m" as UnidadMedida },
    { valor: 2500, origen: "m" as UnidadMedida, destino: "km" as UnidadMedida },
    { valor: 30, origen: "cm" as UnidadMedida, destino: "in" as UnidadMedida },
    { valor: 2, origen: "m" as UnidadMedida, destino: "ft" as UnidadMedida },
    { valor: 1, origen: "km" as UnidadMedida, destino: "ft" as UnidadMedida },
    { valor: 100, origen: "in" as UnidadMedida, destino: "km" as UnidadMedida },
    { valor: 10, origen: "ft" as UnidadMedida, destino: "cm" as UnidadMedida }
];

casosPrueba.forEach((caso, index) => {
    const resultado = convertirUnidad(caso.valor, caso.origen, caso.destino);
    console.log(`${index + 1}. ${caso.valor} ${caso.origen} = ${formatearResultado(resultado)}`);
});


console.log("\nCASOS DE ERROR:");
console.log("-".repeat(30));

const casosError = [
    { valor: -5, origen: "m" as UnidadMedida, destino: "cm" as UnidadMedida },
    { valor: 10, origen: "m" as UnidadMedida, destino: "m" as UnidadMedida }
];

casosError.forEach((caso, index) => {
    const resultado = convertirUnidad(caso.valor, caso.origen, caso.destino);
    console.log(`${index + 1}. ${caso.valor} ${caso.origen} → ${caso.destino}: ${formatearResultado(resultado)}`);
});

