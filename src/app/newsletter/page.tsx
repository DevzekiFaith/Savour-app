"use client";

import React, { useState, useEffect } from 'react';
import Image from "next/image";
import Link from "next/link";

interface Product {
  id: number;
  Ingredients: string;
  Instruction: string;
  Title: string;
  Image: string; // Assuming Image URL is included in the Product type
  description: string;
  thumbnail_url: any;
  keywords:string;
  instructions: any;
  price: number;
}

const NewsLetter: React.FC = () => {
  const [data, setData] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const fetchData = async () => {
    const url = "https://tasty.p.rapidapi.com/recipes/list?from=0&size=20&tags=under_30_minutes";
    const options = {
      method: 'GET',
      headers: {
        'x-rapidapi-key': '700b407630mshf781745d27fc61bp15157bjsn8791e7681e15',
        'x-rapidapi-host': 'tasty.p.rapidapi.com'
      }
    };

    try {
      const response = await fetch(url, options);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const result = await response.json();
      setData(result.results);
      localStorage.setItem("Product", JSON.stringify(result)) // Assuming the API returns a results array
    } catch (error: any) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <section className="bg-[#fbf5f3ea] ">
      <div className="pt-[6rem]">
        <h1 className="uppercase font-extrabold text-[4rem] ml-[3rem]">
          Newsletter Section
        </h1>
        <div className="grid grid-cols-4 gap-2">
          {data.map((item) => (
            <div key={item.id} className="p-3 w-[20rem] border border-white bg-gray-100 shadow-2xl cursor-pointer mb-4 object-contain overflow-hidden">
              {item.thumbnail_url && (
                <Image
                  className="w-[100%] shadow-2xl shadow-slate-900 h-[20rem]"
                  src={item.thumbnail_url}
                  alt={item.Title}
                  width={300}
                  height={300}
                />
              )}
              <Link href={`/recipes/${item.id}`}>
                <h3 className='font-extrabold text-[18px]'>Food description</h3>
                <p className="font-bold p-3">{item.description}</p>
                {/* <p className="font-bold">${item.price}</p> */}
                <p className="font-bold">{item.instructions.keywords}</p>
                {/* <p className="font-bold p-3 w-[100px]">{item.thumbnail_url}</p> */}

              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewsLetter;
