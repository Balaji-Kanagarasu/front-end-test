"use client";
import AuthForm from "@/components/AuthForm";
import { baseInstance } from "@/services";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import { useRouter } from "next/navigation";
import { useState } from "react";

const Login: React.FC = () => {
  const route: AppRouterInstance = useRouter();
  const [message, setMessage] = useState(""); // Key to contain error message or username
  const [isSuccess, setIsSuccess] = useState(false); // Key to identify the API response is success or failure.

  /**
   * Handles the login process by sending a POST request with the provided username and password.
  
   * @param {Object} data - An object containing the username and password.
   */
  const handleLogin = async (data: { username: string; password: string }) => {
    try {
      const res = await baseInstance.post("/auth/login", data, {
        headers: { "Content-Type": "application/json" },
      });

      setMessage(res.data?.message ?? res.data?.username);
      if (res.status === 200) {
        setIsSuccess(true);
        route.push("/products");
      } else {
        setIsSuccess(false);
      }
    } catch (error) {
      setIsSuccess(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900">
      <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-md">
        {isSuccess ? (
          <>
            <p className="text-green-500 text-center text-lg font-semibold">
              Welcome!
            </p>
          </>
        ) : (
          <AuthForm mode="Login" onSubmit={handleLogin} />
        )}
        {message && (
          <p
            className={`text-center mt-4 ${
              isSuccess ? "text-green-500" : "text-red-500"
            }`}
          >
            {message}
          </p>
        )}
      </div>
    </div>
  );
};
export default Login;
