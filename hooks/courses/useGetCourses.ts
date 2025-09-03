import { useState } from "react";

import { supabase } from "../../lib/supabase";
import useSession from "../useSession";

function useGetCourses() {
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [isSuccess, setSuccess] = useState(false);
  const { session } = useSession();

  const getCourses = async () => {
    setLoading(true);
    setError(null);
    setSuccess(false);

    const { data, error } = await supabase
      .from("courses")
      .select()
      .eq("user_id", session?.user.id);

    if (error) {
      setError(error.status);
    } else {
      setSuccess(true);
    }
    setLoading(false);

    return data;
  };

  return {
    getCourses,
    isLoading,
    error,
    isSuccess,
  };
}

export default useGetCourses;
