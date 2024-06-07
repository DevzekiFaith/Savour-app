"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

interface Product {
  id: number;
  Ingredients: string;
  difficulty: string;
  title: string;
  image: string;
}

const FoodRecipe: React.FC = () => {
  const [data, setData] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [search, setSearch] = useState("");

  const fetchData = async () => {
    const url = "https://the-mexican-food-db.p.rapidapi.com/";
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
      const data: Product[] = await response.json();
      setData(data);
      localStorage.setItem("Product", JSON.stringify(data))
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
    <section className="bg-[#fbf5f3ea] min-h-screen">
      <div className="pt-[6rem]">
        <div className="w-[24rem] shadow-2xl mx-auto">
          <input
            onChange={(e) => setSearch(e.target.value)}
            className="w-full h-[3rem] p-2"
            type="text"
            placeholder="Search"
          />
        </div>
        <div>
          <h1 className="uppercase font-extrabold text-[4rem] text-center mt-6">
            Food Category
          </h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 p-6">
          {data
            .filter((item) => {
              return search.toLowerCase() === ""
                ? item
                : item.title.toLowerCase().includes(search);
            })
            .map((item) => (
              <Link href={`/recipes/${item.id}`} key={item.id}>
                <div className="p-4 border bg-gray-100 shadow-2xl cursor-pointer overflow-hidden transition-transform duration-300 hover:translate-y-1 hover:shadow-lg">
                  {item.image && (
                    <Image
                      className="w-full h-[20rem] object-cover"
                      src={item.image}
                      alt="food Image"
                      width={300}
                      height={300}
                    />
                  )}
                  <div className="mt-4">
                    <p className="font-bold text-lg">Food Name: {item.title}</p>
                    <p className="text-gray-700 mt-2">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Odio ratione facere laboriosam adipisci ullam dolorem
                      fugiat quidem delectus qui et?
                    </p>
                    <p className="font-bold mt-4">
                      Description: {item.difficulty}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
        </div>
      </div>
    </section>
  );
};

export default FoodRecipe;
