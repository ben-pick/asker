import { NewUser } from "../schemas/NewUser";
import UserCredentials from "../interfaces/UserCredentials";
import prisma from "../db";
import TokenUser from "../interfaces/TokenUser";
import { User } from "../../../shared";
class UserService {

  async register(newUser: NewUser): Promise<User | null> {
    const existingUser = await prisma.user.findUnique({
      where: {
        email: newUser.email,
      },
    });
    if (!existingUser) {
      return await prisma.user.create({
        data: {
          ...newUser,
          icon: "https://picsum.photos/60/60",
          isTeacher: false,
          isNew: false,
        },
      });
    }
    return null;
  }

  async getUser(creds: UserCredentials) : Promise<User> {
    return await prisma.user.findUniqueOrThrow({
      where: {
        email: creds.email,
      },
    });

  }

  async getUsers(users: TokenUser[]): Promise<User[]> {
    return await prisma.user.findMany({
      where: {
        id: {
          in: users.map(u => u.id)
        }
      },
    });

  }
}

export default UserService;
