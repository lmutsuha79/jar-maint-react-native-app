import { router, useSegments } from "expo-router";
import React, { useEffect } from "react";
import { FIREBASE_AUTH } from "../firebaseConfig";
import { signInWithEmailAndPassword } from "firebase/auth";

const AuthContext = React.createContext(null);

// This hook can be used to access the user info.
export function useAuth() {
  return React.useContext(AuthContext);
}

// This hook will protect the route access based on user authentication.
function useProtectedRoute(user) {
  const segments = useSegments();

  useEffect(() => {
    const inAuthGroup = segments[0] === "(auth)";

    // user try to entre screens and is not signed in
    if (!inAuthGroup && !user) {
      // Redirect to the sign-in page.
      router.replace("/(auth)/sign-in");
    }
    // user is signed in and he want to visit the sign-in / sign-up pages.
    if (user && inAuthGroup) {
      // Redirect away from the sign-in page.
      router.replace("/");
    }
  }, [user, segments]);
}

export function Provider(props) {
  const [user, setAuth] = React.useState(null);

  useProtectedRoute(user);

  const signIn = async (email, password) => {
    try {
      const userCredential = await signInWithEmailAndPassword(
        FIREBASE_AUTH,
        email,
        password
      );
      const user = userCredential.user;
      return { user, error: null };
    } catch (error) {
      const errorCode = error.code;
      const errorMessage = error.message;
      return { user: null, error: error };
    }
  };

  return (
    <AuthContext.Provider
      value={{
        signIn: signIn,
        singOut: () => {
          console.log("Signing out");
        },
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
}
