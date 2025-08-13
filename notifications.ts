type Email = {

    correo: string
    subject: string
    body: string

}

type SMS = {

    telefono: number
    mensaje: string

}

type Push = {

    aplicacion: string
    cuerpo: string

}

type Notifications = Email | SMS | Push

function sendNotification(notify: Notifications) {
    if ('correo' in notify) {
        console.log(`Enviando correo a ${notify.correo} con asunto ${notify.subject} y cuerpo ${notify.body}`)
    }
    else if ('telefono' in notify) {
        console.log(`Enviando SMS al numero ${notify.telefono} con mensaje ${notify.mensaje}`);
        
    }
    else {
         console.log(`Enviando notificacion Push a la aplicacion ${notify.aplicacion} con mensaje ${notify.cuerpo}`);
    }
}

const notificacion1: Email = {
    correo: "carlosmario.a@hotmail.com",
    subject: 'Test',
    body: 'Test'
}
const notificacion2: SMS = {
    telefono: 3136700509,
    mensaje: "test"
}
const notificacion3: Push = {
    aplicacion: "Facebook",
    cuerpo: "Solicitud de amistad"
}

sendNotification(notificacion1);
sendNotification(notificacion2);
sendNotification(notificacion3);