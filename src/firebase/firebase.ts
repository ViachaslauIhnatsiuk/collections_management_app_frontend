import { initializeApp } from 'firebase/app';
import { getStorage, ref, getDownloadURL, uploadBytes } from 'firebase/storage';

const firebaseConfig = {
  apiKey: 'AIzaSyDj0gREB4__TmcIZSUAvUqBDoGWfTfbaf4',
  authDomain: 'collections-management-app.firebaseapp.com',
  projectId: 'collections-management-app',
  storageBucket: 'collections-management-app.appspot.com',
  messagingSenderId: '316216177502',
  appId: '1:316216177502:web:1208f0d4c3b520a06855cf',
};

const app = initializeApp(firebaseConfig);
const storage = getStorage(app);

export { storage, ref, getDownloadURL, uploadBytes };
