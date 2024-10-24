import Profile from "@/components/profile";
import About from "@/components/about";
import Experience from "@/components/experience";
import Education from "@/components/education";
import { Separator } from "@/components/ui/separator";

export default function Home() {
  return (
    <>
      <Profile />
      <Separator className="mb-12 mt-6" />
      <About />
      <Experience />
      <Education />
    </>
  );
}
