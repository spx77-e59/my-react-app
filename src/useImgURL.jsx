import { useEffect, useState } from "react";

const useImageURL = () => {
  const [imgURL, setImgURL] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/photos", { mode: "cors" })
      .then((response) => {
        if (response.status >= 400) {
          throw new Error("server error");
        }

        return response.json();
      })
      .then((response) => setImgURL(response[1].url))
      .catch((error) => setError(error))
      .finally(() => setLoading(false));
  }, []);

  return { imgURL, error, loading };
};

export default useImageURL;
