"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState, useEffect } from "react";
import scrollToSection from "@/utils/scrollToSection";
import { RemoveScroll } from "react-remove-scroll";
import { Button } from "@/components/ui/button";
import { useTranslations } from "next-intl";
import useActiveSection from "@/hooks/useActiveSection";
import { twMerge } from "tailwind-merge";
export default function Menu({
  navbarTabs,
  menuOpen,
  setMenuOpen,
}: {
  navbarTabs: { label: string; href: string }[];
  menuOpen: boolean;
  setMenuOpen: (menuOpen: boolean) => void;
}) {
  const [isWideScreen, setIsWideScreen] = useState(false);
  const activeSection = useActiveSection(navbarTabs.map((tab) => tab.href));

  useEffect(() => {
    const handleResize = () => {
      setIsWideScreen(window.innerWidth > 640);
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (isWideScreen) setMenuOpen(false);
  }, [isWideScreen, setMenuOpen]);

  const handleClick = (href: string) => {
    scrollToSection(href);
    setMenuOpen(false);
  };

  return (
    <AnimatePresence>
      {menuOpen && !isWideScreen && (
        <RemoveScroll removeScrollBar={false}>
          <motion.div
            className="fixed bottom-0 left-0 right-0 top-0 z-[1] bg-background px-8 pt-[130px]"
            initial={{ x: "100%" }}
            animate={{ x: "0" }}
            exit={{ x: "100%" }}
            transition={{ bounce: false }}
          >
            <motion.ul
              className="main-width flex flex-col items-center gap-4"
              initial={{ x: "20%", opacity: 0 }}
              animate={{ x: "0", opacity: 1 }}
              exit={{ x: "20%", opacity: 0 }}
              transition={{ duration: 1 }}
            >
              {navbarTabs.map((tab) => (
                <motion.li
                  key={tab.href}
                  className={twMerge(
                    "cursor-pointer text-2xl opacity-50 transition-all hover:opacity-100",
                    activeSection === tab.href && "font-bold opacity-100",
                  )}
                  onClick={() => handleClick(tab.href)}
                >
                  {tab.label}
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
        </RemoveScroll>
      )}
    </AnimatePresence>
  );
}
