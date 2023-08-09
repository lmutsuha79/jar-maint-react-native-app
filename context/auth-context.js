import { router, useSegments } from "expo-router";
import React, { useEffect } from "react";

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

  return (
    <AuthContext.Provider
      value={{
        signIn: () => {
          console.log("Signing in");
        },
        singOut: () => {
          console.log("Signing out");
        },
        name: "jiji"
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
}
