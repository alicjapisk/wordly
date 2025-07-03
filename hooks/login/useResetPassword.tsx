import { useState } from "react";

import { supabase } from "../../lib/supabase";

export default function useResetPassword() {
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [isSuccess, setSuccess] = useState(false);

  const resetPassword = async (email) => {
    setLoading(true);
    setError(null);
    setSuccess(false);
    try {
      const { error } = await supabase.auth.resetPasswordForEmail(email, {
        redirectTo: "https://wordly-eta.vercel.app",
      });

      if (error) throw error;
      setSuccess(true);
    } catch (error) {
      setError(error.status);
    } finally {
      setLoading(false);
    }
  };

  return {
    resetPassword,
    isLoading,
    error,
    isSuccess,
    setSuccess,
    setError,
  };
}
