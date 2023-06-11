import { Social } from "@/typings";
import Hero from "@/components/Hero";
import Head from "next/head";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Stripe from "@/components/Stripe";

type Props = {
  socials: Social[];
};

export default function Home({ socials }: Props) {
  return (
    <div className="bg-[#F8CC5D] text-white h-screen snap-y snap-mandatory overflow-x-hidden z-0 ">
      <div className="bg-white">
        <Header />
      </div>
      <section id="hero" className="">
        <Hero />
      </section>
      <section id="stripe">
        <div className="bg-[#45565E]">
          <Stripe />
        </div>
      </section>
      <footer>
        <div className="bg-[#F8F4F9]">
          <Footer />
        </div>
      </footer>
    </div>
  );
}
