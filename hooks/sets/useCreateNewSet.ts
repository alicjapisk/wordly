import { useState } from "react";

import { supabase } from "../../lib/supabase";
import { useLocalSearchParams } from "expo-router";

function useCreateNewSet() {
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [isSuccess, setSuccess] = useState(false);
  const { course_id } = useLocalSearchParams();

  const createSet = async (title) => {
    setLoading(true);
    setError(null);
    setSuccess(false);

    const { error } = await supabase.from("sets").insert({
      course_id: course_id,
      title,
    });

    if (error) {
      setError(error.status);
    } else {
      setSuccess(true);
    }
    setLoading(false);
  };

  return {
    createSet,
    isLoading,
    error,
    isSuccess,
  };
}

export default useCreateNewSet;
