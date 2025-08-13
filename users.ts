interface Usuario {
    nombre: string
    edad: number
    activo: boolean
    rol: "admin" | "editor" | "visitante"
}

function obtenerUsuariosElegibles(usuarios: Usuario[]): Usuario[] {
    return usuarios.filter(usuario => 
        usuario.edad >= 18 && 
        usuario.activo && 
        usuario.rol !== "visitante"
    );
}


const usuarios: Usuario[] = [
    {
        nombre: "Ana García",
        edad: 25,
        activo: true,
        rol: "admin"
    },
    {
        nombre: "Carlos López",
        edad: 17,
        activo: true,
        rol: "editor"
    },
    {
        nombre: "María Rodríguez",
        edad: 30,
        activo: false,
        rol: "editor"
    },
    {
        nombre: "Juan Pérez",
        edad: 22,
        activo: true,
        rol: "visitante"
    },
    {
        nombre: "Laura Silva",
        edad: 28,
        activo: true,
        rol: "editor"
    },
    {
        nombre: "Pedro Martínez",
        edad: 35,
        activo: true,
        rol: "admin"
    },
    {
        nombre: "Sofia Torres",
        edad: 16,
        activo: true,
        rol: "visitante"
    },
    {
        nombre: "Diego Herrera",
        edad: 40,
        activo: false,
        rol: "admin"
    }
];


const usuariosElegibles = obtenerUsuariosElegibles(usuarios);

console.log("\nUSUARIOS ELEGIBLES (Mayores de edad, activos, no visitantes):");
console.log("=" .repeat(70));
if (usuariosElegibles.length === 0) {
    console.log("No hay usuarios que cumplan los criterios");
} else {
    usuariosElegibles.forEach((usuario, index) => {
        console.log(`${index + 1}. ${usuario.nombre} (${usuario.edad} años) - ${usuario.rol}`);
    });
}

