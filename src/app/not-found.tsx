// app/not-found.js (for Next.js 13+ using the app directory)
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-black-100">
      <h1 className="text-6xl font-bold text-indigo-600 mb-6">404</h1>
      <h2 className="text-2xl text-gray-800 mb-4">Page Not Found</h2>
      <p className="text-gray-600 mb-8 text-center">
        The page you are looking for does not exist.
      </p>
      <Link
        href="/"
        className="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-3 px-6 rounded-full transition duration-300"
      >
        Go Back Home
      </Link>
    </div>
  );
}
