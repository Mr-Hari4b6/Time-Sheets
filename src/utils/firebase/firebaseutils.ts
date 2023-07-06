import {initializeApp} from 'firebase/app';
import {
    getAuth,
    signInWithRedirect,
    signInWithPopup,
    GoogleAuthProvider,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword
   } 
    from 'firebase/auth';

import {getFirestore,doc,getDoc,setDoc} from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBd2byxAF_3wnXE6wMf0Peypuz0pNhKYdE",
  authDomain: "infrastructure-ui-xrg.firebaseapp.com",
  projectId: "infrastructure-ui-xrg",
  storageBucket: "infrastructure-ui-xrg.appspot.com",
  messagingSenderId: "1009843447040",
  appId: "1:1009843447040:web:aaf17056a54c1bf97e3fe5",
  measurementId: "G-0FW0KHTSVB"
  };
  
  // Initialize Firebase
  const firebaseApp = initializeApp(firebaseConfig);

  const googleProvider =new GoogleAuthProvider();

  googleProvider.setCustomParameters({
    prompt:'select_account'
  });

  export const auth = getAuth();
  export const signInWithGooglePopup = () => signInWithPopup(auth, googleProvider);
  export const signInWithGoogleRedirect = () => signInWithRedirect(auth, googleProvider);
  export const db = getFirestore();
  
  export const createAuthUserWithEmailAndPassword = async (email,password) => {
    if(!email || !password) return ;
    return await createUserWithEmailAndPassword(auth,email,password);
  }
  export const signInUserWithEmailAndPassword = async (email,password) => {
    if(!email || !password) return ;
    return await signInWithEmailAndPassword(auth,email,password);
  }
  export const createUserDocumentFromAuth = async (userAuth,displayName) => {
     if(!userAuth) return;
     const userDocRef = doc(db,'users',userAuth.uid);
     const userSnapShot =await getDoc(userDocRef);
     if(!userSnapShot.exists()) {
        const {email} = userAuth;
        const createdAt = new Date();
        try {
              await setDoc(userDocRef,{
                displayName,
                email,
                createdAt
            });
        } catch (error) {
           console.log('error while creating user -' ,error);
        }

     }
    return userDocRef;
  }

  export const createUserTimeSheetRecord = async (userAuth,{displayName,email,department,projectDetails,tasksDetails,firstHalf,addOn,secondHalf}) =>{
    const userDocRef =  doc(db,'users','ySF6Y7Sv0LMsl9q3MEnK1yiS1pg2');
    const userSnapShot =await getDoc(userDocRef);
    console.log("-----",userSnapShot,userDocRef);
    if(!userSnapShot.exists()) {
      const createdAt = new Date();
      try {
            await setDoc(userDocRef,{
              createdAt,
              displayName,
              email,
              department,
              projectDetails,
              tasksDetails,
              firstHalf,
              addOn,
              secondHalf
          });
      } catch (error) {
         console.log('error while inserting user record-' ,error);
      }
  }
}