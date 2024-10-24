import Image, { StaticImageData } from "next/image";

export default function ExperienceCard({
  title,
  undertitle,
  date,
  desc1,
  desc2,
  image,
}: {
  title: string;
  undertitle: string;
  date: string;
  desc1: string;
  desc2: string;
  image: StaticImageData;
}) {
  return (
    <div className="flex items-start gap-8">
      <div className="group relative h-[60px] w-[60px] flex-shrink-0">
        <div className="animate-tilt absolute -inset-0.5 rounded-full bg-gradient-to-r from-orange-600 to-rose-600 opacity-75 blur-lg transition duration-1000 group-hover:opacity-100 group-hover:duration-200"></div>
        <Image
          src={image}
          alt={title}
          width={60}
          height={60}
          className="relative z-10 h-full w-full rounded-[0.5rem]"
        />
      </div>
      <div>
        <div className="flex flex-col gap-1">
          <h3 className="m-0 text-lg font-bold">{title}</h3>
          <p className="m-0 text-sm">{undertitle}</p>
          <p className="m-0 mb-3 text-sm opacity-70">{date}</p>
        </div>
        <ul className="list-style-none ml-4 max-w-[600px] list-disc text-sm">
          <li>{desc1}</li>
          <li>{desc2}</li>
        </ul>
      </div>
    </div>
  );
}
