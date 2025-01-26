"use client";

import { User, Plus } from "lucide-react";
import Link from "next/link";
import { TypographyH1 } from "../../components/typography";
import { ModeToggle } from "./mode-toggle";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 bg-black bg-opacity-50 z-10">
      <div className="max-w-4xl mx-auto px-4 py-2 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-white">
          <TypographyH1>ApT</TypographyH1>
        </Link>
        <div className="flex space-x-4">
          <button
            aria-label="Add new video"
            className="bg-primary text-primary-foreground rounded-full p-2"
          >
            <Plus className="w-6 h-6" />
          </button>
          <button
            aria-label="User profile"
            className="bg-secondary text-secondary-foreground rounded-full p-2"
          >
            <User className="w-6 h-6" />
          </button>
          <ModeToggle />
        </div>
      </div>
    </header>
  );
}
