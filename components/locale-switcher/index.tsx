import LocaleSwitcherSelect from "./LocaleSwitcherSelect";
import { useLocale, useTranslations } from "next-intl";

export function LocaleSwitcher() {
  const t = useTranslations("localeSwitcher");
  const locale = useLocale();

  const items = [
    {
      value: "en",
      label: t("en"),
    },
    {
      value: "sv",
      label: t("sv"),
    },
  ];

  return (
    <LocaleSwitcherSelect
      defaultValue={locale}
      items={items}
      label={t("label")}
    />
  );
}
