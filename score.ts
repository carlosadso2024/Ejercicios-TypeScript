interface Calificación {
    estudianteId: number
    materia: string
    categoría: "tareas" | "quices" | "examen"
    nota: number
}

interface PromedioCategoría {
    tareas: number
    quices: number
    examen: number
}

function calcularPromedioPorCategoría(calificaciones: Calificación[], estudianteId: number): PromedioCategoría {
    const promedios: PromedioCategoría = {
        tareas: 0,
        quices: 0,
        examen: 0
    };

    const contadores = {
        tareas: 0,
        quices: 0,
        examen: 0
    };

    
    const calificacionesEstudiante = calificaciones.filter(cal => cal.estudianteId === estudianteId);

  
    for (const calificacion of calificacionesEstudiante) {
        switch (calificacion.categoría) {
            case 'tareas':
                promedios.tareas += calificacion.nota;
                contadores.tareas++;
                break;
            case 'quices':
                promedios.quices += calificacion.nota;
                contadores.quices++;
                break;
            case 'examen':
                promedios.examen += calificacion.nota;
                contadores.examen++;
                break;
        }
    }


    promedios.tareas = contadores.tareas > 0 ? promedios.tareas / contadores.tareas : 0;
    promedios.quices = contadores.quices > 0 ? promedios.quices / contadores.quices : 0;
    promedios.examen = contadores.examen > 0 ? promedios.examen / contadores.examen : 0;

    return promedios;
}


const calificaciones: Calificación[] = [
    { estudianteId: 1, materia: "Matemáticas", categoría: "tareas", nota: 8.5 },
    { estudianteId: 1, materia: "Matemáticas", categoría: "tareas", nota: 9.0 },
    { estudianteId: 1, materia: "Matemáticas", categoría: "quices", nota: 7.5 },
    { estudianteId: 1, materia: "Matemáticas", categoría: "quices", nota: 8.0 },
    { estudianteId: 1, materia: "Matemáticas", categoría: "examen", nota: 8.8 },
    
    { estudianteId: 1, materia: "Historia", categoría: "tareas", nota: 9.2 },
    { estudianteId: 1, materia: "Historia", categoría: "quices", nota: 8.5 },
    { estudianteId: 1, materia: "Historia", categoría: "examen", nota: 9.0 },
    
   
    { estudianteId: 2, materia: "Matemáticas", categoría: "tareas", nota: 7.0 },
    { estudianteId: 2, materia: "Matemáticas", categoría: "quices", nota: 6.5 },
    { estudianteId: 2, materia: "Matemáticas", categoría: "examen", nota: 7.8 },
    

    { estudianteId: 2, materia: "Física", categoría: "tareas", nota: 8.0 },
    { estudianteId: 2, materia: "Física", categoría: "examen", nota: 8.5 }
];


console.log("CALIFICACIONES DE ESTUDIANTES:");
console.log("=" .repeat(50));


const calificacionesEstudiante1 = calificaciones.filter(cal => cal.estudianteId === 1);
console.log("\n Estudiante ID: 1");
calificacionesEstudiante1.forEach(cal => {
    console.log(`  ${cal.materia} - ${cal.categoría}: ${cal.nota}`);
});

const promediosEstudiante1 = calcularPromedioPorCategoría(calificaciones, 1);
console.log("\nPROMEDIOS Estudiante 1:");
console.log(`  Tareas: ${promediosEstudiante1.tareas.toFixed(2)}`);
console.log(`  Quices: ${promediosEstudiante1.quices.toFixed(2)}`);
console.log(`  Examen: ${promediosEstudiante1.examen.toFixed(2)}`);


const calificacionesEstudiante2 = calificaciones.filter(cal => cal.estudianteId === 2);
console.log("\n Estudiante ID: 2");
calificacionesEstudiante2.forEach(cal => {
    console.log(`  ${cal.materia} - ${cal.categoría}: ${cal.nota}`);
});

const promediosEstudiante2 = calcularPromedioPorCategoría(calificaciones, 2);
console.log("\nPROMEDIOS Estudiante 2:");
console.log(`  Tareas: ${promediosEstudiante2.tareas.toFixed(2)}`);
console.log(`  Quices: ${promediosEstudiante2.quices.toFixed(2)}`);
console.log(`  Examen: ${promediosEstudiante2.examen.toFixed(2)}`);

