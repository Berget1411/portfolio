import ContactForm from "./ContactForm";
import { useTranslations } from "next-intl";

export default function Contact() {
  const t = useTranslations("contact");
  return (
    <section className="mb-12 mt-24">
      <h2 className="mb-12 text-center text-2xl font-bold">{t("title")}</h2>
      <ContactForm />
    </section>
  );
}
