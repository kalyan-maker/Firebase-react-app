import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  sendPasswordResetEmail,
  updatePassword,
  confirmPasswordReset,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth";
import React, { createContext, useContext, useEffect, useState } from "react";
import { app } from "../firebase/firebase";

const AuthContext = createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [loading, setLoading] = useState(true);
  const [currentUser, setCurrentUser] = useState();

  useEffect(() => {
    const auth = getAuth(app);
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
      setLoading(false);
    });

    return unsubscribe;
  }, []);

  // signup function
  async function signup(email, password, username) {
    const auth = getAuth(app);
    await createUserWithEmailAndPassword(auth, email, password);

    // update profile
    const user = auth.currentUser;
    await updateProfile(auth.currentUser, {
      displayName: username,
      email: user.email,
      PhotoURL: user.photoURL,
    });

    setCurrentUser({
      ...user,
    });
  }

  //forget
  function forgotPassword(email) {
    const auth = getAuth(app);
    return sendPasswordResetEmail(auth, email, {
      url: `https://localhost:3000`,
    });
  }

  //reset password
  function resetPassword(oobCode, newPassword, confirmPassword) {
    const auth = getAuth(app);
    return confirmPasswordReset(auth, oobCode, newPassword, confirmPassword);
  }

  // login function
  function login(email, password) {
    const auth = getAuth(app);
    return signInWithEmailAndPassword(auth, email, password);
  }

  // logout function
  function logout() {
    const auth = getAuth(app);
    return signOut(auth);
  }

  //update function
  function update(newPassword) {
    const auth = getAuth(app);
    const user = auth.currentUser;
    updatePassword(user, newPassword);
  }

  const value = {
    currentUser,
    signup,
    login,
    logout,
    forgotPassword,
    resetPassword,
    update,
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
}
