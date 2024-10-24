import { useTranslations } from "next-intl";

export default function About() {
  const t = useTranslations("about");
  return (
    <section className="max-w-[600px]">
      <h2 className="text-2xl font-bold">{t("title")}</h2>
      <p>{t("body")}</p>
    </section>
  );
}
