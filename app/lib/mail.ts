"use server";

import nodemailer from "nodemailer";

export async function sendMail({
    to,
    from,
    subject,
    html,
    filesData,
}: {
    to: string;
    from: string;
    subject: string;
    html: string;
    filesData: FormData;
}) {
    const SMTP_MAIL = "info@xn----8sbnljdcvhzjm2j.xn--p1ai";
    const SMTP_PASSWORD = "%g28x6kZ3";

    const transport = nodemailer.createTransport({
        host: "mail.hosting.reg.ru",
        port: 465,
        secure: true,
        auth: {
            user: SMTP_MAIL,
            pass: SMTP_PASSWORD,
        },
    });

    try {
        const testResult = await transport.verify();
        console.log("Checking mail transport... ", testResult);
    } catch (error) {
        console.log(error);
        return;
    }

    try {
        const files = filesData.getAll("files") as unknown as File[];

        const attachments = await Promise.all(
            files.map(async (file, index) => {
                const arrayBuffer = await file.arrayBuffer();

                return {
                    filename: index + "_" + file.name,
                    content: Buffer.from(arrayBuffer),
                };
            })
        );

        // console.log(attachments);
        const sendResult = await transport.sendMail({
            from,
            to,
            subject,
            html,
            attachments,
        });

        console.log("Mail sent successfully", sendResult);
        return sendResult;
    } catch (error) {
        console.log(error);
        return error;
    }
}
