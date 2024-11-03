"use client";
import ContactForm from "./ContactForm";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
export default function Contact() {
  const t = useTranslations("contact");
  return (
    <section className="mb-12 mt-24" id="contact">
      <motion.h2
        className="mb-12 text-center text-2xl font-bold"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        {t("title")}
      </motion.h2>
      <ContactForm />
    </section>
  );
}
