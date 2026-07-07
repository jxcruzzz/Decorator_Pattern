namespace decoratorPattern {

    // Component: Define el contrato que todos deben de cumplir.
    interface Notification {
        send(message: string): void;
    }

    // Concrete Component: Implementa la funcionalidad basica.
    class BaiscNotification implements Notification {
        send(message: string): void {
            console.log("Enviando notificación basica: " + message);
        }
    }

    // Base Decorator: Define la interfaz que debe de seguir los decoradores, el metodo send().
    abstract class NotificationDecorator implements Notification {
        protected notification: Notification;

        constructor(notification: Notification) {
            this.notification = notification;
        }

        send(message: string): void {
            this.notification.send(message);
        }
    }

    // Concrete Decorators: 
    class EmailDecorator extends NotificationDecorator {

        private sendEmail(message: string): void {
            console.log("Enviando correo electronico: " + message);
        }

        override send(message: string): void {
            super.send(message);
            this.sendEmail(message);
        }
    }

    class SMSDecorator extends NotificationDecorator {

        private sendSMS(message: string): void {
            console.log("Enviando mensaje SMS: " + message);
        }

        override send(message: string): void {
            super.send(message);
            this.sendSMS(message);
        }
    }

    // Implemetacion de los nuevos Decorator: WhatsApp y Discord
    class WhatsAppDecorator extends NotificationDecorator {

        private sendWhatsApp(message: string): void {
            console.log("Enviando mensaje por WhatsApp: " + message);
        }

        override send(message: string): void {
            super.send(message);
            this.sendWhatsApp(message);
        }
    }

    class DiscordDecorator extends NotificationDecorator {
        private sendDiscord(message: string): void {
            console.log("Enviando mensaje por Discord: " + message)
        }

        override send(message: string): void {
            super.send(message);
            this.sendDiscord(message);
        }
    }

    function main() {
        let notification: Notification = new BaiscNotification();

        notification = new EmailDecorator(notification);
        notification = new SMSDecorator(notification);
        notification = new WhatsAppDecorator(notification);
        notification = new DiscordDecorator(notification);

        notification.send("\nALERTA: Notificación basica enviada.")
    }

    main();
}
