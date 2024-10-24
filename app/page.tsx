import { useTranslations } from "next-intl";
import Profile from "@/components/profile";
import About from "@/components/about";
import { Separator } from "@/components/ui/separator";

export default function Home() {
  const t = useTranslations("Home");
  return (
    <>
      <Profile />
      <Separator className="my-6" />
      <About />
    </>
  );
}
