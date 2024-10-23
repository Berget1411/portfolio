const OFFSET = 0;
const SMALL_OFFSET = 30;
export default function scrollToSection(sectionId: string) {
  const windowSize = window.innerWidth;
  const isSmallScreen = windowSize < 768;

  const section = document.getElementById(sectionId);
  if (section) {
    window.scrollTo({
      top: section.offsetTop - (isSmallScreen ? SMALL_OFFSET : OFFSET),
      behavior: "smooth",
    });
  }
}
