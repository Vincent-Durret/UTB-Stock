import info_all_item from "./db.js";
import { doc, setDoc, collection } from "firebase/firestore";
import { db } from "../Firebase/firebase.js";

const COLLECTION_NAME = "products";

// delete all products

info_all_item.map((item) => {

  setDoc(doc(collection(db, COLLECTION_NAME)), item);
});
