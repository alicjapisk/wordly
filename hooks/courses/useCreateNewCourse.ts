import { useState } from "react";

import { supabase } from "../../lib/supabase";
import useSession from "../useSession";

function useCreateNewCourse() {
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [isSuccess, setSuccess] = useState(false);
  const { session } = useSession();

  const createCourse = async (title, courseLang, baseLang, description) => {
    setLoading(true);
    setError(null);
    setSuccess(false);

    const { error } = await supabase.from("courses").insert({
      user_id: session?.user?.id,
      title,
      course_lang: courseLang,
      base_lang: baseLang,
      description,
    });

    if (error) {
      setError(error.status);
    } else {
      setSuccess(true);
    }
    setLoading(false);
  };

  return {
    createCourse,
    isLoading,
    error,
    isSuccess,
  };
}

export default useCreateNewCourse;
