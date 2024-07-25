import { useUser } from "../hooks/useUser.ts";
import Spinner from "./Spinner.tsx";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const FullPage = styled.div`
  height: 100vh;
  background-color: var(--color-grey-50);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const navigate = useNavigate();
  // 1. Load the authentication user
  const { isPending, isAuthenticated } = useUser();

  // 2. If the user is not authenticated, redirect to the login page
  useEffect(() => {
    if (!isAuthenticated && !isPending) {
      navigate("/login");
    }
  }, [isAuthenticated, navigate, isPending]);

  // 3. While loading, show a loading spinner
  if (isPending)
    return (
      <FullPage>
        <Spinner />
      </FullPage>
    );

  // 4. If the user is authenticated, render the App
  if (isAuthenticated) return children;
};

export default ProtectedRoute;
