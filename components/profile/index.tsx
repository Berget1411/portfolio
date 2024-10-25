import { FaGithub, FaLinkedin } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";
import profile from "@/public/img/profile.png";
import { useTranslations } from "next-intl";

export default function Profile() {
  const t = useTranslations("profile");
  return (
    <div className="bg-grid-black/[0.03] dark:bg-grid-white/[0.03]">
      <section className="flex items-center justify-between gap-6 py-4 max-[550px]:flex-col-reverse">
        <div>
          <h1 className="mb-3">{t("title")}</h1>
          <div className="mb-6 flex gap-3">
            <FaGithub size={20} />
            <FaLinkedin size={20} />
          </div>

          <ul className="flex flex-col gap-1">
            <li>
              {t("desc1")}{" "}
              <Link
                href="https://kth.se"
                target="_blank"
                className="font-bold transition-opacity hover:opacity-80"
              >
                @KTH
              </Link>
            </li>
            <li>
              {t("desc2")}{" "}
              <Link
                href="https://thsbusiness.se"
                target="_blank"
                className="font-bold transition-opacity hover:opacity-80"
              >
                @THS-Business
              </Link>
            </li>
          </ul>
        </div>
        <div className="group relative h-[160px] w-[160px] flex-shrink-0">
          <div className="absolute -inset-0.5 animate-tilt rounded-full bg-gradient-to-r from-orange-600 to-rose-600 opacity-75 blur-lg transition duration-1000 group-hover:opacity-100 group-hover:duration-200"></div>
          <Image
            src={profile}
            alt="Ludvig Bergtröm"
            width={160}
            height={160}
            className="z-1 relative rounded-full"
          />
        </div>
      </section>
    </div>
  );
}
