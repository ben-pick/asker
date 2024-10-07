import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
async function main() {
  const alice = await prisma.user.upsert({
    where: {
      email: "test@email.com",
    },
    update: {},
    create: {
      email: "test@email.com",
      firstName: "Alice",
      lastName: "Pebble",
      icon: "https://picsum.photos/60/60",
      isNew: true,
      isTeacher: false,
    },
  });
  const bob = await prisma.user.upsert({
    where: {
      email: "test2@email.com",
    },
    update: {},
    create: {
      email: "test2@email.com",
      firstName: "Bob",
      lastName: "Pebble",
      icon: "https://picsum.photos/60/60",
      isNew: false,
      isTeacher: true,
    },
  });
}
main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
