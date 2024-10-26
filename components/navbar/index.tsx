"use client";
import { useState } from "react";
import { twMerge } from "tailwind-merge";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import { useTranslations } from "next-intl";
import { HiMenuAlt4 } from "react-icons/hi";
import { IoMdClose } from "react-icons/io";
import scrollToSection from "@/utils/scrollToSection";
import useActiveSection from "@/hooks/useActiveSection";

import { LocaleSwitcher } from "@/components/locale-switcher";
import { ThemeToggler } from "@/components/theme-toggle";
import { Button } from "@/components/ui/button";
import Menu from "@/components/navbar/menu";

export default function Navbar() {
  const t = useTranslations("navbar");
  const NAVBAR_TABS = [
    {
      label: t("home"),
      href: "start",
    },
    {
      label: t("about"),
      href: "about",
    },
    {
      label: t("experience"),
      href: "experience",
    },
    {
      label: t("education"),
      href: "education",
    },
    {
      label: t("projects"),
      href: "projects",
    },
    {
      label: t("technologies"),
      href: "technologies",
    },
  ];

  const [menuOpen, setMenuOpen] = useState(false);
  const activeSection = useActiveSection(NAVBAR_TABS.map((tab) => tab.href));

  // framer motion scroll animation
  const { scrollY } = useScroll();
  const [show, setShow] = useState(true);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious();

    if (previous) {
      if (latest > previous && latest > 150) {
        setShow(false);
      } else {
        setShow(true);
      }
    }
  });

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const handleClick = (href: string) => {
    scrollToSection(href);
    setMenuOpen(false);
  };

  return (
    <>
      <motion.header
        className={twMerge(
          "sticky top-0 z-20 flex w-full items-center justify-center backdrop-blur-md",
        )}
        variants={{
          visible: { y: 0 },
          hidden: { y: "-100%" },
        }}
        animate={show ? "visible" : "hidden"}
        transition={{ duration: 0.35, ease: "easeInOut" }}
      >
        <nav className="card flex w-full max-w-[800px] items-center justify-between border-b border-gray-200 px-6 py-4 dark:border-gray-800">
          <ul className="flex gap-4 max-sm:hidden">
            {NAVBAR_TABS.map((tab) => (
              <li
                key={tab.href}
                onClick={() => handleClick(tab.href)}
                className={twMerge(
                  "cursor-pointer opacity-50 transition-all hover:opacity-100",
                  activeSection === tab.href && "font-bold opacity-100",
                )}
              >
                {tab.label}
              </li>
            ))}
          </ul>
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleMenu}
            className="sm:hidden"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
          >
            {menuOpen ? <IoMdClose size={32} /> : <HiMenuAlt4 size={32} />}
          </Button>

          <div className="relative flex items-center gap-4">
            <LocaleSwitcher />
            <Button size="sm" onClick={() => scrollToSection("contact")}>
              {t("contact")}
            </Button>
            <div>
              <ThemeToggler />
            </div>
          </div>
        </nav>
      </motion.header>

      <Menu
        navbarTabs={NAVBAR_TABS}
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
      />
    </>
  );
}
