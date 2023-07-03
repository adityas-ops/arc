'use client';

import Features from "@/components/Features";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import More from "@/components/More";
import Work from "@/components/Work";


export default function Home() {
  return (
    <>
    <Header/>
      <Hero/>
      <Features/>
      <Work/>
      <More/>
    </>
  )
}
