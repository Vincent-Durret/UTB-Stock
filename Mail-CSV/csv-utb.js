import { exportCSV } from "../CSV-Export/export-csv.mjs";
import { sendCSVEmail } from "../Auto-Mail/email-sender.mjs";
import cron from "node-cron";
import cronParser from "cron-parser";

function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function main() {
  await exportCSV();
  console.log("Attente de 10 secondes avant l'envoi du mail...");
  await delay(10000);
  await sendCSVEmail();
}

function getTimeRemaining(cronExpression) {
  const now = new Date();
  const interval = cronParser.parseExpression(cronExpression);
  const nextScheduledDate = interval.next().toDate();
  const timeDifference = nextScheduledDate - now;
  const remainingHours = Math.floor(timeDifference / 1000 / 60 / 60);
  const remainingMinutes = Math.floor((timeDifference / 1000 / 60) % 60);
  const remainingSeconds = Math.floor((timeDifference / 1000) % 60);

  return `${remainingHours}h ${remainingMinutes}m ${remainingSeconds}s`;
}

// Exemple de planning avec Cron
//const cronSchedule = "* * * * *"; // Exécuter la tâche toutes les minutes
const cronSchedule = "0 0 30 * *"; // Exécuter la tâche à minuit (00:00) le 30e jour de chaque mois

const timeRemaining = getTimeRemaining(cronSchedule);
console.log(
  `En attente de l'exécution de la tâche planifiée le 30 du mois... Temps restant : ${timeRemaining}`
);

cron.schedule(cronSchedule, () => {
  console.log("Exécution de la tâche programmée");
  main();
});
