import admin from "firebase-admin";
import { createObjectCsvWriter } from "csv-writer";
import { createRequire } from "module";
const require = createRequire(import.meta.url);
const serviceAccount = require("../CSV-Export/utb-stock-3850e-d944bab0e2d9.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

const db = admin.firestore();

const collectionName = "products";
const subcollectionName = "subproducts";

const csvWriter = createObjectCsvWriter({
  path: "stockUTB.csv",
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

export async function exportCSV() {
  db.collection(collectionName)
    .get()
    .then(async (snapshot) => {
      const mainCollectionData = snapshot.docs.map((doc) => doc.data());

      // Récupérer les données de la sous-collection pour chaque document
      const subcollectionDataPromises = snapshot.docs.map((doc) =>
        getSubcollectionData(doc.ref, subcollectionName)
      );
      const allSubcollectionData = await Promise.all(subcollectionDataPromises);

      // Ajoutez les données de la sous-collection aux données de la collection principale
      const combinedData = [];
      mainCollectionData.forEach((docData, index) => {
        // Ajoutez une ligne pour chaque élément de la sous-collection avec les données de la collection principale
        if (allSubcollectionData[index].length > 0) {
          allSubcollectionData[index].forEach((subDocData) => {
            combinedData.push({
              ...docData,
              subproductName: subDocData.title,
              subtotal: subDocData.total,
              subtotalMeters: subDocData.totalMeters,
            });
          });
        } else {
          // Si la sous-collection est vide, ajoutez les données de la collection principale seulement
          combinedData.push({
            ...docData,
            subproductName: "",
            subtotal: "",
            subtotalMeters: "",
          });
        }
      });

      console.log("Données récupérées:", combinedData);
      return csvWriter.writeRecords(combinedData);
    })
    .then(() => {
      console.log("Fichier CSV écrit avec succès");
    })
    .catch((error) => {
      console.error("Erreur lors de l'écriture du fichier CSV:", error);
    });
}
