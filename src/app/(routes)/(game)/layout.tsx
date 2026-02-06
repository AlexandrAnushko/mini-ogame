import { ResourcesBar } from "@/features/resources/components/ResourcesBar";
import { Sidebar } from "@/shared/components/Sidebar";

export default function GameLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex flex-col items-center">
      <header>
        <ResourcesBar metal={34} crystal={28} deuterium={3} />
      </header>

      <main className="flex">
        <Sidebar />
        {children}
      </main>
    </div>
  );
}
