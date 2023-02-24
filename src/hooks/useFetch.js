import React, { useState, useEffect } from "react";

export const useFetch = ({ url }) => {
  const [fetchedData, setFetchedData] = useState({});
  const [loading, setLoading] = useState(true);

  function fetchData() {
    fetch(url)
      .then((response) => response.json())
      .then((data) => setFetchedData(data));

    setLoading(false);
  }
  useEffect(() => {
    fetchData();
  }, []);
  return [fetchedData];
};
