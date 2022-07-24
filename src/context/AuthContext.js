import { useContext, createContext, useState, useEffect } from "react";
import { auth, db } from "../firebase";
import { signInWithPopup, signOut, GoogleAuthProvider } from "firebase/auth";
import {
  collection,
  addDoc,
  onSnapshot,
  query,
  setDoc,
  doc,
  serverTimestamp,
  deleteDoc,
} from "firebase/firestore";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState();
  const [posts, setPosts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    if (!localStorage.user) {
      //entering firebase🔥 auth logic
      auth.onAuthStateChanged((user) => {
        if (user) {
          const { displayName, email, photoURL } = user;
          const currUser = {
            displayName,
            email,
            photoURL,
          };
          console.log("HelloUser", currUser);
          setUser(currUser);
          // localStorage.setItem("user", JSON.stringify(user));
        } else {
          console.log("sign in!");
        }
      });
    } else {
      // setting user from LS
      setUser(JSON.parse(localStorage.getItem("user")));
    }
  }, []);

  useEffect(() => {
    const q = query(collection(db, "bs-stories"));

    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const temp_posts = [];
      querySnapshot.forEach((doc) => {
        // console.log(doc.data());
        temp_posts.push({ id: doc.ref.id, ...doc.data() });
      });
      setPosts(temp_posts);
    });

    return unsubscribe;
  }, []);

  const signin = () => {
    console.log("signin fired!");
    let provider = new GoogleAuthProvider();
    console.log("Provider", provider);
    signInWithPopup(auth, provider);
  };

  const signout = () => {
    console.log("signout fired!");
    setUser();
    signOut(auth);
  };

  const addpost = async (post) => {
    console.log("POst", post, db);
    post.createdAt = serverTimestamp();
    console.log(post);
    for (let i in post) {
      if (!post[i] && i !== "likes") {
        console.log("Invalid input!", i);
        return;
      }
    }
    await addDoc(collection(db, "bs-stories"), post);
    console.log("new doc added");
  };

  const delete_post = (post) => {
    console.log(post);
    deleteDoc(doc(db, "bs-stories", post.id));
  };

  const addlike = (id, likes) => {
    const storyRef = doc(db, "bs-stories", id);
    setDoc(storyRef, { likes }, { merge: true });
    console.log("doc was updated?");
  };

  const adddislike = (id, dislikes) => {
    const storyRef = doc(db, "bs-stories", id);
    setDoc(storyRef, { dislikes }, { merge: true });
    console.log("doc was updated?");
  };

  const value = {
    user,
    posts,
    signin,
    signout,
    addpost,
    delete_post,
    addlike,
    adddislike,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
