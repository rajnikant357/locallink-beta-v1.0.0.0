import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import UserDashboard from "./UserDashboard";
import ProviderDashboard from "./ProviderDashboard";

const Dashboard = () => {
  const { user, isAuthenticated } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuthenticated) {
      navigate("/auth");
    }
  }, [isAuthenticated, navigate]);

  if (!user) return null;

  return user.type === "customer" ? <UserDashboard /> : <ProviderDashboard />;
};

export default Dashboard;
