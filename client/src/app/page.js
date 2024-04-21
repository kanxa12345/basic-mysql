import Link from "next/link";

export default function Home() {
  return (
    <section className="py-24">
      <div className="container flex flex-col items-center gap-4">
        <h1 className="text-4xl font-bold">Login to see the userlist</h1>
        <Link href="/login" className="bg-red-700 text-white py-1 px-2">Login</Link>
      </div>
    </section>
  );
}
