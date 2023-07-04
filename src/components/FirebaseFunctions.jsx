import { useEffect } from 'react';
import { collection, doc, query, where, getDocs, setDoc, updateDoc } from 'firebase/firestore';
import { ref, getDownloadURL, listAll } from 'firebase/storage';
import { db, storage } from '../firebase';

export async function QueryCats(table, predicate = []) {
    const cats = [];
    const collectionRef = collection(db, table);
    const queryArgs = [collectionRef, where('show', '==', 'true')];
    var q;

    if (predicate.length === 3) {
        queryArgs.push(where(...predicate));   
    }

    q = query(...queryArgs);
    const docRefs = await getDocs(q);

    docRefs.forEach(doc => {
        const cat = doc.data();
        cats.push({...cat, id: doc.id});
    })
    
    return cats;
}

export function InsertCat(table, cat) {
    const { name, date } = cat;
    const id = GetCatID(name, date);

    const addCat = async () => {
        const docRef = doc(db, table, id);

        await setDoc(docRef, {});
    
        Object.keys(cat).map(async (key) => {
            await updateDoc(docRef, {
                [key]: cat[key]
            })
        });
    };

    useEffect(() => {
        addCat();
    }, []);
}

export function GetCatID(name, date) {
    const id = `${name}${date ? `.${date}` : ``}`;
    
    return id;
}

export function UpdateCats(id, table, field, newValue) {
    const docRef = doc(db, table, id);

    const updateCat = async () => {
        await updateDoc(docRef, {
            [field]: [newValue]
        })
    };

    useEffect(() => {
        updateCat();
    }, []);
}

export async function GetImage(filepath) {
    const url = getDownloadURL(ref(storage, `gs://junglebeauty-fb9a7.appspot.com/${filepath}`));

    return url;
}

export async function GetAllImages(filepath) {
    const images = [];
    const storageRef = ref(storage, filepath);
    const result = await listAll(storageRef);
    
    result.items.forEach(image => {
        images.push(image.fullPath);
    })

    return images;
  }

export async function GetFirstImage(filepath) {
    const storageRef = ref(storage, filepath);
    const result = await listAll(storageRef);
    const image = result.items[0].fullPath;

    return image;
}