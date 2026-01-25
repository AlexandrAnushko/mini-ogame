import { prisma } from "@/lib/db";
import bcrypt from "bcryptjs";

export async function POST(req: Request) {
  const { email, password } = await req.json();

  const existing = await prisma.user.findUnique({ where: { email } });
  if (existing) {
    return new Response("User already exists", { status: 400 });
  }

  const hashed = await bcrypt.hash(password, 10);

  const user = await prisma.user.create({
    data: { email, password: hashed },
  });

  // start planet for user
  const planet = await prisma.planet.create({
    data: {
      name: "Homeworld",
      userId: user.id,
      resources: { create: { metal: 500, crystal: 300, deuterium: 0 } },
      buildings: {
        create: {
          metalMineLevel: 1,
          crystalMineLevel: 1,
          deuteriumSynthLevel: 0,
        },
      },
    },
  });

  return Response.json({ user: { id: user.id, email: user.email }, planet });
}
