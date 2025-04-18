import Link from "next/link";
import { cn } from "@/lib/utils";

export default function Navbar() {
  return (
    <nav className="w-full px-4 sm:px-8 md:px-16 py-6 shadow-md bg-white">
      <div className="flex justify-between items-center">
        <Link href="/" className="text-xl font-bold">
          YourName.dev
        </Link>
        <div className="space-x-6 text-sm font-medium">
          <Link href="/projects" className={cn("hover:text-cyan-600")}>
            Projects
          </Link>
          <Link href="/about" className={cn("hover:text-cyan-600")}>
            About
          </Link>
        </div>
      </div>
    </nav>
  );
}
