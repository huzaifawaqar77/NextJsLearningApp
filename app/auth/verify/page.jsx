import Link from "next/link";
const Verify = () => {
  return (
    <section className="text-center my-20">
      <h2>Thanks for registering as a valuable user to us.</h2>
      <p className="text-xl">
        Please confirm your email address before you start using our application
        :)
      </p>
      <h3 className="font-semibold text-purple-700">
        <Link href="/login">Get Back To Login</Link>
      </h3>
    </section>
  );
};

export default Verify;
