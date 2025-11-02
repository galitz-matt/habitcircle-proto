import { UserPrismaMapper } from "@/server/infrastructure/db/mappers/user.prisma-mapper";
import { User } from "@/server/domain/entities/user.entity";

jest.mock("@/server/domain/entities/user.entity");

describe("UserMapper", () => {
  const mockRecord = {
    id: "user-1",
    createdAt: new Date("2025-01-01"),
    username: "matt",
    password: "hashedpass",
  };

  const mockUser = {
    id: "user-1",
    createdAt: new Date("2025-01-01"),
    getUsername: jest.fn().mockReturnValue("matt"),
    getPasswordHash: jest.fn().mockReturnValue("hashedpass"),
  } as unknown as User;

  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe("toDomain", () => {
    it("rehydrates a User domain entity from a Prisma record", () => {
      const rehydrated = { id: "user-1", domainType: "User" };
      (User.rehydrate as jest.Mock).mockReturnValue(rehydrated);

      const result = UserPrismaMapper.toDomain(mockRecord);

      expect(User.rehydrate).toHaveBeenCalledWith(
        mockRecord.id,
        mockRecord.createdAt,
        mockRecord.username,
        mockRecord.password
      );
      expect(result).toBe(rehydrated);
    });
  });

  describe("toPrisma", () => {
    it("converts a User domain entity to a Prisma-compatible record", () => {
      const result = UserPrismaMapper.toPersistence(mockUser);

      expect(result).toEqual({
        id: "user-1",
        createdAt: new Date("2025-01-01"),
        username: "matt",
        password: "hashedpass",
      });

      expect(mockUser.getUsername).toHaveBeenCalledTimes(1);
      expect(mockUser.getPasswordHash).toHaveBeenCalledTimes(1);
    });
  });
});
