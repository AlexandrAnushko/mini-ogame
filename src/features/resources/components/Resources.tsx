"use client";

import { useState } from "react";
import Image from "next/image";

type Building = {
  id: string;
  name: string;
  description: string;
  cost: {
    metal: number;
    crystal: number;
    deuterium: number;
  };
  icon: string;
  image: string;
};

const buildings: Building[] = [
  {
    id: "metal-mine",
    name: "Шахта металла",
    description: "Производит металл — основной ресурс для строительства.",
    cost: { metal: 60, crystal: 15, deuterium: 0 },
    icon: "/buildings/metal-mine.webp",
    image: "/buildings/metal-mine.webp",
  },
  {
    id: "crystal-mine",
    name: "Шахта кристалла",
    description: "Производит кристалл — важный ресурс для технологий.",
    cost: { metal: 48, crystal: 24, deuterium: 0 },
    icon: "/buildings/crystal-mine.webp",
    image: "/buildings/crystal-mine.webp",
  },
  {
    id: "deuterium-synth",
    name: "Синтезатор дейтерия",
    description: "Производит дейтерий — топливо для флота.",
    cost: { metal: 225, crystal: 75, deuterium: 0 },
    icon: "/buildings/deuterium-synth.webp",
    image: "/buildings/deuterium-synth.webp",
  },
];

export default function Resources() {
  const [selected, setSelected] = useState<Building | null>(null);

  return (
    <div className="p-6 flex flex-col gap-6">
      {/* Верхнее окно */}
      <div className="relative w-full h-64 rounded-lg overflow-hidden border border-white/10 bg-black/40">
        {selected ? (
          <>
            <Image
              src={selected.image}
              alt={selected.name}
              fill
              className="object-cover opacity-40"
              unoptimized
            />

            <div className="relative z-10 p-6 text-white">
              <h2 className="text-2xl font-bold mb-2">{selected.name}</h2>
              <p className="text-sm text-white/80 mb-4">
                {selected.description}
              </p>

              <div className="flex gap-4 mb-4">
                <span>Металл: {selected.cost.metal}</span>
                <span>Кристалл: {selected.cost.crystal}</span>
                <span>Дейтерий: {selected.cost.deuterium}</span>
              </div>

              <button className="px-4 py-2 bg-green-600 hover:bg-green-700 rounded-md text-sm font-medium">
                Улучшить
              </button>
            </div>
          </>
        ) : (
          <div className="flex items-center justify-center h-full text-white/60 text-lg">
            Выберите здание ниже
          </div>
        )}
      </div>

      {/* Грид карточек */}
      <div className="grid grid-cols-3 gap-4">
        {buildings.map((b) => {
          console.log("ICON:", b.icon);

          return (
            <button
              key={b.id}
              onClick={() => setSelected(b)}
              className="bg-[#0d1117] border border-white/10 rounded-lg p-4 flex flex-col items-center gap-3 hover:bg-white/10 transition"
            >
              <div className="relative w-16 h-16">
                <Image
                  src={b.icon}
                  alt={b.name}
                  fill
                  className="object-contain"
                  unoptimized
                />
              </div>
              <span className="text-white text-sm font-medium">{b.name}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
