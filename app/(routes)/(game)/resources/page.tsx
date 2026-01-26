import { prisma } from "@/lib/db";
import { cookies } from "next/headers";
import jwt from "jsonwebtoken";
import Resources from "@/features/resources/components/Resources";

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

  return <Resources />;
}
