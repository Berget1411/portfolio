import { useLocale, useTranslations } from "next-intl";
import LocaleSwitcherSelect from "@/components/locale-switcher/LocaleSwitcherSelect";

export default function LocaleSwitcher() {
  const t = useTranslations("LocaleSwitcher");
  const locale = useLocale();

  return (
    <LocaleSwitcherSelect
      defaultValue={locale}
      items={[
        {
          value: "en",
          label: t("en"),
        },
        {
          value: "sv",
          label: t("sv"),
        },
      ]}
      label={t("label")}
    />
  );
}
