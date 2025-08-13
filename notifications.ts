
interface Notification {
    email: {
        correo: string
        subject: string
        body: string
    }
    sms: {
        phone: string
        message: string
    }
    push: {
        title: string
        body: string
    }

}

function sendNotification(notification: Notification) {
    if (notification.email) {
        console.log(`Enviando correo a ${notification.email.correo} con asunto ${notification.email.subject} y cuerpo ${notification.email.body}`);
    }
    if (notification.sms) {
        console.log(`Enviando SMS a ${notification.sms.phone} con mensaje ${notification.sms.message}`);
    }
    if (notification.push) {
        console.log(`Enviando notificación push con título ${notification.push.title} y cuerpo ${notification.push.body}`);
    }

}

const notification: Notification = {
    email: {
        correo: 'test@test.com',
        subject: 'Test',
        body: 'Test'
    },
    sms: {
        phone: '1234567890',
        message: 'Test'
    },
    push: {
        title: 'Test',
        body: 'Test'
    }
}

sendNotification(notification);