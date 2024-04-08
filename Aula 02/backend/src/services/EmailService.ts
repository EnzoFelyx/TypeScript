interface IMailTo {
    name: string;
    email: string;
}

interface IMailMessage {
    subject: string;
    body: string;
    attachment?: string[];
}

interface IMessageDTO{
    to: IMailTo;
    message: IMailMessage;
}

//DTO -> Data Transfer Object



class EmailService {
    sendMai({ to, message }: IMessageDTO) {
        console.log(`Email enviado para ${to.name}: ${message.subject}`);
    }
}

export default EmailService;