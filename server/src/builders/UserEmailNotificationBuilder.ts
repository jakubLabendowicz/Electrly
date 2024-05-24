import path from "path";
var nodemailer = require('nodemailer');
const hbs = require('nodemailer-express-handlebars');
import { Prisma, PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export class UserEmailNotificationBuilder {
    userEmailNotification: {
        userId?: string,
        subject: string,
        template: string,
        context: any,
    };

    constructor() {
        this.userEmailNotification = {
            userId: '',
            subject: '',
            template: '',
            context: {},
        };
    }

    withUserId(userId: string) {
        this.userEmailNotification.userId = userId;
        return this;
    }

    withSubject(subject: string) {
        this.userEmailNotification.subject = 'Forest - ' +  subject;
        return this;
    }

    withTemplate(template: string) {
        this.userEmailNotification.template = template;
        return this;
    }

    withContext(context: any) {
        this.userEmailNotification.context = context;
        return this;
    }

    get() {
        return this.userEmailNotification;
    }

    async save() {
        return await prisma.userEmailNotification.create({
            data: this.userEmailNotification,
        });
    }

    async send() {
        let user = await prisma.user.findUnique({
            where: {
                id: this.userEmailNotification.userId,
            }
        });
        let transporterOptions = {
            service: 'gmail',
            auth: {
                user: process.env.NODEMAILER_AUTH_USER as string,
                pass: process.env.NODEMAILER_AUTH_PASS as string,
            }
        };
        let hbsOptions = {
            viewEngine: {
              extName: '.handlebars',
              layoutsDir: path.resolve(__dirname, '../emails/views/'),
              defaultLayout: false,
              partialsDir: path.resolve(__dirname, '../emails/components/'),
            },
            viewPath: path.resolve(__dirname, '../emails/views/'),
            extName: '.handlebars',
        };
        let mailOptions = {
            from: 'noreply.forest.development@gmail.com',
            to: (user as any).email,
            subject: this.userEmailNotification.subject,
            template: this.userEmailNotification.template,
            context: this.userEmailNotification.context,
            attachments: [
                {
                    filename: 'logo.png',
                    path: path.resolve(__dirname, '../emails/assets/logo.png'),
                    cid: 'logo'
                }
            ],
        }
        nodemailer
            .createTransport(transporterOptions)
            .use('compile', hbs(hbsOptions))
            .sendMail(mailOptions).then( async(info: any) => {
                return await prisma.userEmailNotification.create({
                    data: this.userEmailNotification,
                });
            });
    }
}