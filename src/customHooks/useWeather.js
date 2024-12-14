import { useState, useEffect } from 'react';

export function useWeather(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    if (!url) return;
    setLoading(true);
    fetch(url)
      .then((res) => {
        if (!res.ok) {
          throw new Error('Error al obtener los datos del clima');
        }
        return res.json();
      })
      .then((response) => setData(response))
      .catch((error) => console.log(error))
      .finally(() => setLoading(false));
  }, [url]);

  return { data, loading };
}
