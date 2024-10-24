import { useTranslations } from "next-intl";

export default function About() {
  const t = useTranslations("about");
  return (
    <section className="mb-12 max-w-[600px]" id="about">
      <h2 className="text-2xl font-bold">{t("title")}</h2>
      <p>{t("body")}</p>
    </section>
  );
}
