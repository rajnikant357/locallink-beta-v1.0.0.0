import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import UserDashboard from "./UserDashboard";
import ProviderDashboard from "./ProviderDashboard";

const Dashboard = () => {
  const { user, isAuthenticated, loading } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!loading && !isAuthenticated) {
      navigate("/auth");
    }
  }, [isAuthenticated, loading, navigate]);

  if (loading || !user) return null;

  return user.type === "customer" ? <UserDashboard /> : <ProviderDashboard />;
};

export default Dashboard;
