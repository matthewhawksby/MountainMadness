import Image from "next/image";
import Link from "next/link";
import { sql } from "@vercel/postgres";
import DrawInfoFromDatabase from "./drawInfo";
import "./globals.css";

export default function Home() {
  return (
    <main>
      <section className="section">
        <Link href="/Login" className="signin">Sign in</Link>
        <p className="title">PawSwipe</p>
        <Link href="/About" className="about">About</Link>
      </section>
    </main>
  );
}
