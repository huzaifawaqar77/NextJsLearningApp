// nextjs imports
import Image from "next/image";

// images imports
import Sapiens from "./sapiens.svg";
import Link from "next/link";

const HomePage = () => {
  return (
    <section className="my-10">
      <div className="grid md:grid-cols-2 sm:grid-cols-1 lg:grid-cols-2 place-content-center ">
        <div>
          <h2 className="my-4">
            Unlock The <span className="text-purple-600">Power</span> Of
            Learning
          </h2>
          <h4 className="font-semibold text-xl text-slate-600">
            Welcome to Learnfast - Your Gateway to Knowledge
          </h4>
          <p>
            Experience a seamless learning journey with our user-friendly
            platform.
          </p>
          <Link href="/courses">
            <button className="cta bg-purple-500">Explore Courses</button>
          </Link>
        </div>
        <Image
          src={Sapiens}
          alt="Sapiens"
          width={600}
          height={600}
          quality={100}
          placeholder="blur"
          blurDataURL="none"
        />
      </div>
      <div className="flex flex-wrap gap-10">
        <div className="shadow shadow-lg border-2 rounded-md bg-blue-600 hover:bg-blue-800 py-2 px-4 text-white transform skew-y-6 hover:skew-y-0 cursor-pointer transition-all">
          <h3 className="text-white">Easy to follow</h3>
        </div>
        <div className="shadow shadow-lg border-2 rounded-md bg-purple-600 hover:bg-purple-800 py-2 px-4 text-white cursor-pointer">
          <h3 className="text-white">Intuitive</h3>
        </div>
        <div className="shadow shadow-lg border-2 rounded-md bg-orange-600 hover:bg-orange-800 py-2 px-4 text-white transform -skew-y-6 hover:transform hover:skew-y-0 cursor-pointer transition-all">
          <h3 className="text-white">Short Videos</h3>
        </div>
      </div>
    </section>
  );
};

export default HomePage;
