type PagoTarjeta = {
    método: "tarjeta"
    númeroTarjeta: string
    cvv: string
}

type PagoTransferencia = {
    método: "transferencia"
    banco: string
    númeroCuenta: string
}

type PagoEfectivo = {
    método: "efectivo"
}

type Pago = PagoTarjeta | PagoTransferencia | PagoEfectivo;

interface ValidacionResult {
    válido: boolean
    errores: string[]
}

function validarPago(pago: Pago): ValidacionResult {
    const errores: string[] = [];

    switch (pago.método) {
        case "tarjeta":
            if (!pago.númeroTarjeta || pago.númeroTarjeta.trim() === "") {
                errores.push("El número de tarjeta es obligatorio");
            } else if (pago.númeroTarjeta.length < 13 || pago.númeroTarjeta.length > 19) {
                errores.push("El número de tarjeta debe tener entre 13 y 19 dígitos");
            }

            if (!pago.cvv || pago.cvv.trim() === "") {
                errores.push("El CVV es obligatorio");
            } else if (pago.cvv.length < 3 || pago.cvv.length > 4) {
                errores.push("El CVV debe tener 3 o 4 dígitos");
            } else if (!/^\d+$/.test(pago.cvv)) {
                errores.push("El CVV debe contener solo números");
            }
            break;

        case "transferencia":
            if (!pago.banco || pago.banco.trim() === "") {
                errores.push("El banco es obligatorio");
            }

            if (!pago.númeroCuenta || pago.númeroCuenta.trim() === "") {
                errores.push("El número de cuenta es obligatorio");
            } else if (pago.númeroCuenta.length < 8) {
                errores.push("El número de cuenta debe tener al menos 8 dígitos");
            } else if (!/^\d+$/.test(pago.númeroCuenta)) {
                errores.push("El número de cuenta debe contener solo números");
            }
            break;

        case "efectivo":
           
            break;

        default:
            errores.push("Método de pago no válido");
    }

    return {
        válido: errores.length === 0,
        errores: errores
    };
}


function mostrarResultadoValidacion(pago: Pago, resultado: ValidacionResult): void {
    console.log(`\n Validando pago con método: ${pago.método}`);
    
    if (resultado.válido) {
        console.log("Pago válido");
    } else {
        console.log("Pago inválido:");
        resultado.errores.forEach(error => {
            console.log(`   - ${error}`);
        });
    }
}


console.log("SISTEMA DE VALIDACIÓN DE PAGOS");
console.log("=" .repeat(50));


const pagosVálidos: Pago[] = [
    {
        método: "tarjeta",
        númeroTarjeta: "4532015112830366",
        cvv: "123"
    },
    {
        método: "transferencia",
        banco: "Banco Nacional",
        númeroCuenta: "1234567890123456"
    },
    {
        método: "efectivo"
    }
];

console.log("CASOS VÁLIDOS:");
pagosVálidos.forEach((pago, index) => {
    const resultado = validarPago(pago);
    mostrarResultadoValidacion(pago, resultado);
});


const pagosInválidos: Pago[] = [
    {
        método: "tarjeta",
        númeroTarjeta: "", 
        cvv: "12" 
    },
    {
        método: "tarjeta",
        númeroTarjeta: "12345678901234567890", 
        cvv: "abc" 
    },
    {
        método: "transferencia",
        banco: "", 
        númeroCuenta: "123"
    },
    {
        método: "transferencia",
        banco: "Banco Test",
        númeroCuenta: "abc123def"
    }
];

console.log("\n CASOS INVÁLIDOS:");
pagosInválidos.forEach((pago, index) => {
    const resultado = validarPago(pago);
    mostrarResultadoValidacion(pago, resultado);
});

