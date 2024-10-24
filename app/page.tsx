import { useTranslations } from "next-intl";
import Profile from "@/components/profile";
import About from "@/components/about";
import Experience from "@/components/experience";
import { Separator } from "@/components/ui/separator";

export default function Home() {
  const t = useTranslations("Home");
  return (
    <>
      <Profile />
      <Separator className="mb-12 mt-6" />
      <About />
      <Experience />
    </>
  );
}
