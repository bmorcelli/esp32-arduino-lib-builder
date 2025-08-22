import { signInWithEmailAndPassword } from 'firebase/auth';
import { collection, getDocs } from 'firebase/firestore';
import { auth, db } from './firebase';

export async function login(username, password) {
  if (!username || !password) {
    throw new Error('Missing credentials');
  }
  const { user } = await signInWithEmailAndPassword(auth, username, password);
  return user;
}

export async function fetchCatalog() {
  const snapshot = await getDocs(collection(db, 'firmwares'));
  return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
}
