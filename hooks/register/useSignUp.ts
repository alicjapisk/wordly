import { supabase } from "@/lib/supabase";
import { useState } from "react";

export default function useSignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isSuccess, setSuccess] = useState(false);
  const [modalVisible, setModalVisible] = useState(true);

  const handleSignUp = async (email: string, password: string) => {
    setLoading(true);
    setError(null);
    setSuccess(false);
    try {
      const { data, error } = await supabase.auth.signUp({
        email,
        password,
      });

      if (error) throw error;

      const user = data.user;
      if (user) {
        if (user.identities && user.identities.length) {
        } else {
          setError("User exists");
          return;
        }
      }
      setSuccess(true);
      setModalVisible(true);
    } catch (error: unknown) {
      if (error instanceof Error) {
        setError(error.message);
      } else {
        setError(String(error));
      }
    }
  };

  return {
    handleSignUp,
    email,
    setEmail,
    password,
    setPassword,
    isLoading,
    isSuccess,
    error,
    modalVisible,
    setModalVisible,
  };
}
