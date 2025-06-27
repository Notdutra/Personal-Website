import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="text-center">
        <h1 className="mb-4 text-6xl font-bold text-white">404</h1>
        <p className="mb-4 text-xl text-gray-300">Page Not Found</p>
        <Link
          href="/"
          className="inline-block rounded bg-teal-600 px-6 py-2 text-white transition-colors hover:bg-teal-700"
        >
          Go Home
        </Link>
      </div>
    </div>
  );
}
