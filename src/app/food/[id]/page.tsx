"use client";

import React, { useState, useEffect } from "react";
// import { useRouter } from "next/router";
import Image from "next/image";

interface Product {
  id: number;
  Ingredients: string;
  Instruction: string;
  Title: string;
  Image: string;
  difficulty: string;
}

const SingleRecipePage: React.FC = () => {
  const [data, setData] = useState<Product | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);


  useEffect(() => {

    const fetchData = async () => {
      const url = `https://your-api-endpoint.com/recipes/${id}`;
      const options = {
        method: "GET",
        headers: {
          "x-rapidapi-key": "700b407630mshf781745d27fc61bp15157bjsn8791e7681e15",
          "x-rapidapi-host": "the-mexican-food-db.p.rapidapi.com",
        },
      };

      try {
        const response = await fetch(url, options);
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data: Product = await response.json();
        setData(data);
      } catch (error: any) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!data) {
    return <div>No data found</div>;
  }

  return (
    <div className="pt-[6rem] bg-[#f3ecf0] max-h-screen">
      <h1 className="uppercase font-extrabold text-[3rem] text-slate-900 ml-[2.2rem]">
        Food Recipe Detail
      </h1>
      <div className="ml-[2.2rem] mb-[3rem]">
        <div className="p-4 w-[22rem] border border-slate-200 bg-[#60565f60]">
          {data.Image && (
            <Image
              className="w-[100%] rounded-2xl"
              src={data.Image}
              alt={data.Title}
              width={300}
              height={300}
            />
          )}
          <div>
            <h2 className="font-bold mt-2">Title: {data.Title}</h2>
            <h5 className="mt-2">Difficulty: {data.difficulty}</h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleRecipePage;
