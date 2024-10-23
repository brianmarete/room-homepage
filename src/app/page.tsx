import About from "@/app/ui/components/About";
import Hero from "@/app/ui/components/Hero";
import Nav from "./ui/components/Nav";

export default function Home() {
  return (
    <div className="min-h-screen relative">
      <Nav />
      <Hero />
      <About />
    </div>
  );
}
