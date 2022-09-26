import info_all_item from './db'
import { doc, setDoc } from "firebase/firestore"; 
import { db } from '../Firebase/firebase.js'

const COLLECTION_NAME = 'products'

// delete all products

info_all_item.map((item) => {
  setDoc(doc(db, COLLECTION_NAME), {
    category: String,
    name: String,
    total: Number,
    stock: Number,
    unit: String
  });
})
