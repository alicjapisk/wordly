import { useState } from "react";

import { supabase } from "../../lib/supabase";
import { useLocalSearchParams } from "expo-router";

function useGetSets() {
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [isSuccess, setSuccess] = useState(false);
  const { course_id } = useLocalSearchParams();

  const getSets = async () => {
    setLoading(true);
    setError(null);
    setSuccess(false);

    const { data, error } = await supabase
      .from("sets")
      .select()
      .eq("course_id", course_id);

    if (error) {
      setError(error.status);
    } else {
      setSuccess(true);
    }
    setLoading(false);

    return data;
  };

  return {
    getSets,
    isLoading,
    error,
    isSuccess,
  };
}

export default useGetSets;
