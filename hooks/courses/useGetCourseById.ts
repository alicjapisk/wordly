import { useState } from "react";
import { supabase } from "../../lib/supabase";

function useGetCourseById() {
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [course, setCourse] = useState<any>(null);

  const getCourseById = async (id: string) => {
    setLoading(true);
    setError(null);

    const { data, error } = await supabase
      .from("courses")
      .select()
      .eq("id", id)
      .single();

    if (error) {
      setError(error.message);
    } else {
      setCourse(data);
    }

    setLoading(false);
    return data;
  };

  return {
    getCourseById,
    course,
    isLoading,
    error,
  };
}

export default useGetCourseById;
