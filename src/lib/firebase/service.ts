import {collection, getDocs, getFirestore} from "firebase/firestore";
import app from "./init";

const firestore = getFirestore(app)

export async function retrieveData(collectionName: string){
    try{

        const snapShot = await getDocs(collection(firestore, collectionName))
    
        // console.log("coba", snapShot)
        const data = snapShot.docs.map((doc)=>({
            id:doc.id,
            ...doc.data()
        }))
    
        console.log("data", data)
    
        return data
    }catch(error){
        console.log("error data", error)
    }
}
