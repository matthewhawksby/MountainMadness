import Image from "next/image";
import Link from "next/link";
import { sql } from "@vercel/postgres";
import DrawInfoFromDatabase from "./drawInfo";
import "./globals.css";

export default function Home() {
  return (
    <main>
      <section className="section">
        <h1 className="title">PawSwipe</h1>
      </section>        
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <Link href="/Login" className="login">Log in</Link>
      <Link href="/About" className="about">About</Link>

    </main>
  );
}
