import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="w-full flex items-center justify-between py-4 px-8 bg-background border-b">
      <div className="font-bold text-lg">Logo</div>
      <div className="flex gap-6">
        <Link href="/" className="hover:underline">Home</Link>
        <Link href="/about" className="hover:underline">About</Link>
      </div>
    </nav>
  );
} 