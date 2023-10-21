import Link from "next/link";

const NotFound = () => {
  return (
    <main className="my-10 text-center">
      <h2 className="my-4">We hit a brickwall :(</h2>
      <p className="my-4">The page you were looking for, could not be found</p>
      <h3 className="my-4">
        Go back to{" "}
        <Link className="text-orange-600" href={"/"}>
          Home Page
        </Link>{" "}
      </h3>
    </main>
  );
};

export default NotFound;
