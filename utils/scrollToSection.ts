export default function scrollToSection(
  sectionId: string,
  offsetTop: number = 0,
) {
  const section = document.getElementById(sectionId);
  if (section) {
    window.scrollTo({
      top: section.offsetTop - offsetTop,
      behavior: "smooth",
    });
  }
}
