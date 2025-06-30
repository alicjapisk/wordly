import { useState } from "react";

import { useRouter } from "expo-router";
import { supabase } from "@/lib/supabase";

export function useLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [isSuccess, setSuccess] = useState(false);
  const router = useRouter();

  const handleLogin = async (email: string, password: string) => {
    setLoading(true);
    setError(null);
    setSuccess(false);
    try {
      const { error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (error) throw error;
      else {
        router.navigate("/(tabs)");
      }
      setSuccess(true);
    } catch (error: any) {
      setError(error.status);
    } finally {
      setLoading(false);
    }
  };

  return {
    email,
    setEmail,
    password,
    setPassword,
    error,
    setError,
    handleLogin,
    isLoading,
    isSuccess,
  };
}
