import { prisma } from "@/lib/db";
import { cookies } from "next/headers";
import jwt from "jsonwebtoken";

export default async function BuildingsPage() {
  const cookieStore = await cookies();
  const token = cookieStore.get("token")?.value;

  if (!token) {
    return <div>Not authorized</div>;
  }

  let userId: string;

  try {
    const data = jwt.verify(token, process.env.JWT_SECRET!) as {
      userId: string;
    };
    userId = data.userId;
  } catch {
    return <div>Invalid token</div>;
  }

  // get user's planet and buildings
  const planet = await prisma.planet.findFirst({
    where: { userId },
    include: {
      buildings: true,
    },
  });

  if (!planet || !planet.buildings) {
    return <div>No buildings found</div>;
  }

  const b = planet.buildings;

  return (
    <div style={{ maxWidth: 400, margin: "40px auto" }}>
      <h1>Buildings — {planet.name}</h1>

      <div style={{ marginTop: 20 }}>
        <BuildingRow name="Metal Mine" level={b.metalMineLevel} />
        <BuildingRow name="Crystal Mine" level={b.crystalMineLevel} />
        <BuildingRow
          name="Deuterium Synthesizer"
          level={b.deuteriumSynthLevel}
        />
      </div>
    </div>
  );
}

function BuildingRow({ name, level }: { name: string; level: number }) {
  return (
    <div
      style={{
        padding: "10px 0",
        borderBottom: "1px solid #ccc",
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <div>
        <strong>{name}</strong>
        <div>Level: {level}</div>
      </div>

      <button>Upgrade</button>
    </div>
  );
}
