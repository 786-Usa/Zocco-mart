import React from "react";
import { useEffect } from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import { useActivateMutation } from "../features/api/apiSlice";

const ActivationPage = () => {
  const { activationToken } = useParams();
  const [activate, { isLoading, isError, isSuccess }] = useActivateMutation();
  const navigate = useNavigate();
  
  useEffect(() => {
    if (activationToken) {
      activate(activationToken);
    }
  }, [activationToken]);

  if (isLoading) {
    return <p style={{ fontSize: "2em", marginBottom: "1em" }}>Loading...</p>;
  }
  if(isSuccess){
    setTimeout(() => {
      navigate("/login");
    }, 3000);
    return (
      <div  style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
      }}>
        <p style={{ color: "green", fontSize: "1.5em" }}>Account activated successfully! Redirecting to login...</p>

      </div>
    );
  }

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
      }}
    >
      <h1 style={{ fontSize: "2rem", marginBottom: "1rem" }}>
        Activating your account...
      </h1>
      {isSuccess ? (
        <p style={{ color: "green" }}>Account activated successfully! You can now login.</p>
      ) : isError ? (
        <p style={{ color: "red" }}>Failed to activate account. Please try again.</p>
      ) : (
        <p>Please wait while we activate your account.</p>
      )}
    </div>
  );
};

export default ActivationPage;
