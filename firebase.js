import { getApp, getApps,initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
    apiKey: process.env.API_KEY,
    authDomain: process.env.AUTH_DOMAIN,
   projectId: process.env.PROJECTID,
      storageBucket: process.env.STORAGEBUCKET,
      messagingSenderId: process.env.MESSAGER_ID,
      appId: process.env.APP_ID,
      measurementId: process.env.MEASUREMENT_ID
};


// export const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const app = initializeApp(firebaseConfig);

// export const auth = initializeAuth(app, {errorMap: debugErrorMap})

// export const storage = getStorage();

export const auth = getAuth(app);
// const analytics = getAnalytics(app);
export const db = getFirestore(app);

export default firebaseConfig;