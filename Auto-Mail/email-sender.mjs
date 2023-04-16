// email-sender.mjs
import nodemailer from "nodemailer";
import cron from "node-cron";

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "vincent.durret@gmail.com", // Remplacez par votre adresse e-mail
    pass: "nsjorhbnagjqwxgy", // Remplacez par le mot de passe de votre adresse e-mail
  },
});

async function sendEmail() {
  const mailOptions = {
    from: "vincent.durret@gmail.com", // Remplacez par votre adresse e-mail
    to: "universterrassesbois@gmail.com", // Remplacez par l'adresse e-mail du destinataire
    subject: "E-mail automatique",
    text: "Bonjour Thierry, Ceci est un e-mail automatique envoyé deux fois par mois qui contient le fichier CSV. Cordialement Auto-Mail by VD ",
    attachments: [
      {
        filename: "stockUTB.csv",
        path: "../CSV-Export/stockUTB.csv", // Chemin du fichier CSV sur votre disque local
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

// const cronSchedule = "0 0 1,15 * *"; // Exécuter la tâche le 1er et le 15 du mois à 00:00

const cronSchedule = "* * * * *"; // Exécuter la tâche toutes les minutes

cron.schedule(cronSchedule, () => {
  console.log("Exécution de la tâche programmée");
  sendEmail();
});
