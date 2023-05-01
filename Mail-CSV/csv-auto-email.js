import admin from "firebase-admin";
import { createObjectCsvWriter } from "csv-writer";
import { createRequire } from "module";
import nodemailer from "nodemailer";
import fs from "fs";
const require = createRequire(import.meta.url);
const serviceAccount = require("./utb-stock-3850e-d944bab0e2d9.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

const db = admin.firestore();

const collectionName = "products";
const subcollectionName = "subproducts";

const csvWriter = createObjectCsvWriter({
  path: "utb-stock.csv",
  header: [
    { id: "category", title: "Categorie" },
    { id: "name", title: "Nom" },
    { id: "stock", title: "Stock" },
    { id: "unit", title: "Type" },
    { id: "stockMeters", title: "Stock en m2" },
    { id: "subproductName", title: "Nom de la Fourniture" },
    { id: "subtotal", title: "Total" },
    { id: "subtotalMeters", title: "Total en m2" },
  ],
});

async function getSubcollectionData(docRef, subcollectionName) {
  const subcollectionSnapshot = await docRef
    .collection(subcollectionName)
    .get();
  return subcollectionSnapshot.docs.map((doc) => doc.data());
}

async function exportCSV() {
  const snapshot = await db.collection(collectionName).get();
  const mainCollectionData = snapshot.docs.map((doc) => doc.data());
  const subcollectionDataPromises = snapshot.docs.map((doc) =>
    getSubcollectionData(doc.ref, subcollectionName)
  );
  const allSubcollectionData = await Promise.all(subcollectionDataPromises);
  const combinedData = mainCollectionData.map((docData, index) => {
    return { ...docData, subcollectionData: allSubcollectionData[index] };
  });

  console.log("Données récupérées:", combinedData);
  await csvWriter.writeRecords(combinedData);
  console.log("Fichier CSV écrit avec succès");
}

async function sendCSVEmail() {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "vincent.durret@gmail.com",
      pass: "nsjorhbnagjqwxgy",
    },
  });

  const mailOptions = {
    from: "vincent.durret@gmail.com",
    to: "vincent.durret@gmail.com",
    subject: "Fichier CSV",
    text: "Veuillez trouver ci-joint le fichier CSV.",
    attachments: [
      {
        filename: "utb-stock.csv",
        path: "utb-stock.csv",
      },
    ],
  };

  await transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error("Erreur lors de l'envoi de l'e-mail:", error);
    } else {
      console.log("E-mail envoyé avec succès:", info.response);
    }
  });
}

function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function main() {
  await exportCSV();
  console.log(
    "Attente de 10 secondes avant d'envoyer le fichier CSV par e-mail..."
  );
  await delay(10000);
  await sendCSVEmail();
}

main();
