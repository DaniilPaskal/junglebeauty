import { collection, query, where, getDocs } from "firebase/firestore";
import { ref, getDownloadURL, listAll } from "firebase/storage";
import { db, storage } from "../firebase";

export async function queryCats(table, predicate = []) {
  const cats = [];
  const collectionRef = collection(db, table);
  const queryArgs = [collectionRef];
  var q;

  if (predicate.length === 3) {
    queryArgs.push(where(...predicate));
  }

  q = query(...queryArgs);
  const docRefs = await getDocs(q);

  docRefs.forEach((doc) => {
    const cat = doc.data();
    cats.push({ ...cat, id: doc.id });
  });

  return cats;
}

export async function getImage(filepath) {
  const url = getDownloadURL(
    ref(storage, `gs://junglebeauty-fb9a7.appspot.com/${filepath}`)
  );

  return url;
}

export async function getAllImages(filepath) {
  const images = [];
  const storageRef = ref(storage, filepath);
  const result = await listAll(storageRef);

  result.items.forEach((image) => {
    images.push(image.fullPath);
  });

  return images;
}

export async function getFirstImage(filepath) {
  const storageRef = ref(storage, filepath);
  const result = await listAll(storageRef);
  const image = result.items[0].fullPath;

  return image;
}

export async function getList(listName) {
  try {
    const storageRef = ref(storage, `Lists/${listName}`);
    const url = await getDownloadURL(storageRef);
    const response = await fetch(url);
    const data = await response.json();
    console.log("Fetched List Data:", data); // Debug log
    return data;
  } catch (error) {
    console.error("Error fetching list:", error); // Error log
    return [];
  }
}
