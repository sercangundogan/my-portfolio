import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto flex min-h-[60vh] max-w-6xl flex-col justify-center px-4 py-20 sm:px-6 lg:px-8">
      <p className="font-mono text-xs tracking-[0.14em] text-muted-2 uppercase">404</p>
      <h1 className="mt-4 text-4xl tracking-tight">Page not found</h1>
      <p className="mt-4 max-w-md text-muted">
        That route does not exist. Head back home or browse the selected work.
      </p>
      <div className="mt-8 flex gap-4 text-sm">
        <Link href="/" className="underline-offset-4 hover:underline">
          Home
        </Link>
        <Link href="/work" className="underline-offset-4 hover:underline">
          Work
        </Link>
      </div>
    </div>
  );
}
