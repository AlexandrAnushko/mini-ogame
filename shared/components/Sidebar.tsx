import Link from "next/link";
import { cn } from "../utils/cn";

type SidebarItem = {
  label: string;
  href: string;
  icon: React.ReactNode;
};

const items: SidebarItem[] = [
  { label: "Обзор", href: "/overview", icon: <span>🏠</span> },
  { label: "Постройки", href: "/buildings", icon: <span>🏗️</span> },
  { label: "Исследования", href: "/research", icon: <span>🔬</span> },
  { label: "Верфь", href: "/shipyard", icon: <span>🚀</span> },
  { label: "Флот", href: "/fleet", icon: <span>🛰️</span> },
  { label: "Оборона", href: "/defense", icon: <span>🛡️</span> },
  { label: "Торговля", href: "/trade", icon: <span>💱</span> },
  { label: "Галактика", href: "/galaxy", icon: <span>🌌</span> },
  { label: "Сообщения", href: "/messages", icon: <span>✉️</span> },
];

export function Sidebar() {
  return (
    <aside className="w-56 bg-[#0d1117] border-r border-white/10 text-white h-screen p-4 flex flex-col gap-2">
      {items.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className={cn(
            "flex items-center gap-3 px-3 py-2 rounded-md",
            "hover:bg-white/10 transition-colors",
          )}
        >
          <span className="text-lg">{item.icon}</span>
          <span className="text-sm font-medium">{item.label}</span>
        </Link>
      ))}
    </aside>
  );
}
