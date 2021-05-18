import { useEffect, useState } from "react";

const useFetch = (url) => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const getFetch = async () => {
      try {
        const res = await fetch(url);
        if (!res.ok) {
          throw new Error("something went wrong");
        }
        const dataJson = await res.json();
        for (const key in dataJson) {
          const dataArray = [];
          const getData = {
            id: key,
            name: dataJson[key].name,
            description: dataJson[key].description,
            price: dataJson[key].price,
          };
          dataArray.push(getData);
          //   setData(dataArray);
          setData((data) => [...data, ...dataArray]);
        }
      } catch (err) {
        throw new Error(err.message);
      }
    };
    getFetch();
  }, [url]);

  return data;
};

export default useFetch;
