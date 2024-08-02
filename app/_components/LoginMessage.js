/** @format */

function LoginMessage() {
  return (
    <div className="grid bg-primary-800 place-items-center p-4 sm:p-8 h-full">
      <p className="text-center text-lg sm:text-xl md:text-2xl">
        Please{" "}
        <a
          href="/login"
          className="underline text-accent-500 hover:text-accent-400 transition-colors"
        >
          login
        </a>{" "}
        to reserve this
        {/* Use a non-breaking space to keep "cabin right now" together */}
        <span className="whitespace-nowrap"> cabin right now</span>
      </p>
    </div>
  );
}

export default LoginMessage;
