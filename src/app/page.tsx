import Image from "next/image";
import NavList from "@/components/Header/navbar/NavList";
import HeroPage from "@/components/Header/navbar/HeroPage/HeroPage";
import Hero2 from "@/components/hero2/Hero2";
import RecipeCompanies from "@/components/foodCompanies/RecipeCompanies";

const Home: React.FC = () => {
  return (
    <main className="relative">
      <section className="">
        <div>
          <NavList />
        </div>
        <div>
          <HeroPage />
        </div>
        <div className="flex justify-center items-center">
          <Image
            className="xl:w-full w-full xl:h-[700px]"
            src="/p6.jpg"
            width={300}
            height={300}
            alt="heroImage"
          />
        </div>
      </section>
      <div>
        <Hero2 />
      </div>
      <div>
        <RecipeCompanies />
      </div>
    </main>
  );
};

export default Home;
