import React, { useState, useEffect } from "react";
import axios from "axios";

const WorldApi = ({ country }) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchCountry = async () => {
      try {
        const res = await axios.get(`https://restcountries.com/v3.1/name/${country}`);
        setData(res.data[0]);
      } catch (err) {
        console.log(err);
      }
    };

    if (country !== "") {
      fetchCountry();
    }
  }, [country]);

  return (
    <div className="input-wrapper">
      {data && (
        <>
          <h1>{data.name.common}</h1>
        </>
      )}
    </div>
  );
};

export default WorldApi;