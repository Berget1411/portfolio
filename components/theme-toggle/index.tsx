"use client";
import { useState, useEffect } from "react";
import { IoSunnyOutline, IoMoonOutline } from "react-icons/io5";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";

export function ThemeToggler() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
    console.log("Initial theme:", theme);
  }, [theme]);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    console.log("Switching to:", newTheme);
    setTheme(newTheme);
  };

  if (!mounted)
    return (
      <Button variant='ghost' size='icon' className='w-10 h-10 p-0'></Button>
    );

  return (
    <Button onClick={toggleTheme} variant='ghost' size='icon'>
      {theme === "dark" ? (
        <IoSunnyOutline className='text-black dark:text-white ' />
      ) : (
        <IoMoonOutline className='text-black dark:text-white' />
      )}
    </Button>
  );
}
