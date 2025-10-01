import { createContext, useContext, useState, useEffect, ReactNode } from "react";

interface User {
  id: string;
  name: string;
  email: string;
  type: "customer" | "provider";
}

interface AuthContextType {
  user: User | null;
  signIn: (email: string, password: string) => Promise<boolean>;
  signUp: (name: string, email: string, password: string, type: "customer" | "provider") => Promise<boolean>;
  signOut: () => void;
  isAuthenticated: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);

  // Load user from localStorage on mount
  useEffect(() => {
    const savedUser = localStorage.getItem("locallink_user");
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
  }, []);

  const signIn = async (email: string, password: string): Promise<boolean> => {
    // Demo credentials
    if (email === "user@gmail.com" && password === "user123") {
      const userData = {
        id: "user-1",
        name: "John Doe",
        email: "user@gmail.com",
        type: "customer" as const,
      };
      setUser(userData);
      localStorage.setItem("locallink_user", JSON.stringify(userData));
      return true;
    } else if (email === "provider@gmail.com" && password === "provider123") {
      const userData = {
        id: "provider-1",
        name: "Rajesh Kumar",
        email: "provider@gmail.com",
        type: "provider" as const,
      };
      setUser(userData);
      localStorage.setItem("locallink_user", JSON.stringify(userData));
      return true;
    }
    return false;
  };

  const signUp = async (name: string, email: string, password: string, type: "customer" | "provider"): Promise<boolean> => {
    const userData = {
      id: `${type}-${Date.now()}`,
      name,
      email,
      type,
    };
    setUser(userData);
    localStorage.setItem("locallink_user", JSON.stringify(userData));
    return true;
  };

  const signOut = () => {
    setUser(null);
    localStorage.removeItem("locallink_user");
  };

  return (
    <AuthContext.Provider value={{ user, signIn, signUp, signOut, isAuthenticated: !!user }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
