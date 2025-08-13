interface Producto {
    id: number;
    nombre: string;
    cantidad: number;
    categoria: "alimentos" | "tecnologia" | "papeleria"
}

function lowStock(productos: Producto[]){
    for (const producto of productos) {
        switch (producto.categoria) {
            case "alimentos":
                if (producto.cantidad < 20) {
                    console.log(`Stock bajo: ${producto.nombre} tiene ${producto.cantidad} unidades`);
                }
                break;
            case "tecnologia":
                if (producto.cantidad < 5) {
                    console.log(`Stock bajo: ${producto.nombre} tiene ${producto.cantidad} unidades`);
                }
                break;
            case "papeleria":
                if (producto.cantidad < 50) {
                    console.log(`Stock bajo: ${producto.nombre} tiene ${producto.cantidad} unidades`);
                }
        }
    }
}

const productos: Producto[] = [
    { id: 1, nombre: "Manzana", cantidad: 40, categoria: "alimentos" },
    { id: 2, nombre: "Laptop", cantidad: 3, categoria: "tecnologia" },
    { id: 3, nombre: "Libro", cantidad: 45, categoria: "papeleria" },
    { id: 4, nombre: "Pan", cantidad: 10, categoria: "alimentos" },
    { id: 5, nombre: "Mouse", cantidad: 1, categoria: "tecnologia" },
    { id: 6, nombre: "Cuaderno", cantidad: 25, categoria: "papeleria" },
]

lowStock(productos)     