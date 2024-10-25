import { IconType } from "react-icons";
export default function TechnologyCard({
  icon: Icon,
  name,
}: {
  icon: IconType;
  name: string;
}) {
  return (
    <div className="group relative h-32 w-32 max-md:h-28 max-md:w-28 max-sm:h-20 max-sm:w-20">
      <div className="absolute -inset-0.5 h-32 w-32 animate-tilt rounded-lg bg-gradient-to-r from-orange-600 to-rose-600 opacity-75 blur-md transition duration-1000 group-hover:opacity-100 group-hover:duration-200 max-sm:h-28 max-sm:w-28 max-[400px]:h-20 max-[400px]:w-20"></div>
      <div className="z-1 relative flex h-32 w-32 flex-col items-center justify-center rounded-[0.5rem] border border-border bg-card p-4 max-sm:h-28 max-sm:w-28 max-sm:p-0 max-[400px]:h-20 max-[400px]:w-20">
        <Icon size={36} className="max-sm:h-6 max-sm:w-6" />
        <p className="mad:md:text-base m-0 mt-2 text-lg font-semibold max-sm:text-sm">
          {name}
        </p>
      </div>
    </div>
  );
}
