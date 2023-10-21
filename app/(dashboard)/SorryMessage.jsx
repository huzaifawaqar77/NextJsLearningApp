const SorryMessage = () => {
  return (
    <>
      <h2 className="text-orange-700 my-6 text-center">
        :) We are extremely sorry to announce that individual registrations are
        currently closed due to a heavy load of new users.
      </h2>
      <p className="text-center">
        You can send your email to the owner and provide along a reason why we
        should sign you up.
      </p>
      <form className="my-10 flex justify-center flex-col ">
        <div className="flex justify-between items-center border-2 border-slate-800 rounded-full p-4">
          <input
            type="email"
            placeholder="Your Email"
            className="bg-transparent active:bg-transparent focus:outline-none "
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
            />
          </svg>
        </div>
        <textarea
          placeholder="State your reason here"
          className="p-4 text-xl bg-transparent active:bg-transparent border-2 border-slate-600 rounded-md h-48 my-4"
        />
        <button className="px-6 py-2 rounded-md bg-slate-600 text-white font-bold my-6">
          Submit
        </button>
      </form>
    </>
  );
};

export default SorryMessage;
