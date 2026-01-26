import Image from "next/image";

type ResourcesBarProps = {
  metal: number;
  crystal: number;
  deuterium: number;
  //   energy: number;
};

const resources = [
  { key: "metal", label: "Металл", icon: "/resources/metal.webp" },
  { key: "crystal", label: "Кристалл", icon: "/resources/crystal.webp" },
  { key: "deuterium", label: "Дейтерий", icon: "/resources/deuterium.webp" },
  //   { key: "energy", label: "Энергия", icon: "/resources/energy.png" },
];

export function ResourcesBar(props: ResourcesBarProps) {
  return (
    <div className="flex gap-6 items-center">
      {resources.map((res) => (
        <div key={res.key} className="flex flex-col items-center">
          <div className="w-12 h-12 relative">
            <Image
              src={res.icon}
              alt={res.label}
              fill
              sizes="48px"
              className="object-contain"
            />
          </div>
          <span className="text-sm font-medium text-white">
            {props[res.key as keyof ResourcesBarProps]}
          </span>
        </div>
      ))}
    </div>
  );
}
