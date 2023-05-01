// email-sender.mjs
import nodemailer from "nodemailer";
import cron from "node-cron";
import fs from "fs/promises";

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "vincent.durret@gmail.com", // Remplacez par votre adresse e-mail
    pass: "nsjorhbnagjqwxgy", // Remplacez par le mot de passe de votre adresse e-mail
  },
});

export async function sendCSVEmail() {
  const mailOptions = {
    from: "vincent.durret@gmail.com", // Remplacez par votre adresse e-mail
    to: "universterrassesbois@gmail.com", // Remplacez par l'adresse e-mail du destinataire
    subject: "E-mail automatique",
    text: "Bonjour Thierry, Ceci est un e-mail automatique envoyé deux fois par mois qui contient le fichier CSV. Cordialement Auto-Mail by VD ",
    attachments: [
      {
        filename: "stockUTB.csv",
        path: "./stockUTB.csv", // Chemin du fichier CSV sur votre disque local
      },
    ],
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    console.log("E-mail envoyé:", info.messageId);
  } catch (error) {
    console.error("Erreur lors de l'envoi de l'e-mail:", error);
  }
}
