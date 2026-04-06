import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

const ActivationPage = () => {
  const { activationToken } = useParams();
  const [success, setSuccess] = useState(false);
    const [error, setError] = useState("");

  useEffect(() => {
    if (activationToken) {
      const activateAccount = async () => {
        try {
          const response = await fetch(
            "http://localhost:8000/api/v1/activate",
            {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({ activationToken }),
            },
          );
          const data = await response.json();
          console.log(data);
          if (data.success) {
            setSuccess(true);
          }
        } catch (error) {
          console.error(error);
            setError("Failed to activate account. Please try again.");
        }
      };
      activateAccount();
    }
  }, [activationToken]);

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
      {success ? (
        <p style={{ color: "green" }}>Account activated successfully!</p>
      ) : error ? (
        <p style={{ color: "red" }}>{error}</p>
      ) : (
        <p>Please wait while we activate your account.</p>
      )}
    </div>
  );
};

export default ActivationPage;
