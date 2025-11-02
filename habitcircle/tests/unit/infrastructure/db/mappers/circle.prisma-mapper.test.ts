import { CirclePrismaMapper } from "@/server/infrastructure/db/mappers/circle.prisma-mapper";
import { Circle } from "@/server/domain/entities/circle.entity";
import { User } from "@/server/domain/entities/user.entity";
import { Habit } from "@/server/domain/entities/habit.entity";

jest.mock("@/server/domain/entities/circle.entity");
jest.mock("@/server/domain/entities/user.entity");
jest.mock("@/server/domain/entities/habit.entity");

describe("CircleMapper", () => {
  const mockUser = {
    id: "user-1",
    createdAt: new Date("2025-01-01"),
    username: "matt",
    password: "hashedpass",
  };

  const mockHabit = {
    id: "habit-1",
    createdAt: new Date("2025-02-01"),
    name: "Meditate",
    circleId: "circle-1",
  };

  const mockCircleRecord = {
    id: "circle-1",
    name: "My Circle",
    createdAt: new Date("2025-03-01"),
    ownerId: mockUser.id,
    owner: mockUser,
    members: [mockUser],
    habits: [mockHabit],
  };

  const mockCircle = {
    id: "circle-1",
    createdAt: new Date("2025-03-01"),
    name: { get: jest.fn().mockReturnValue("My Circle") },
  } as unknown as Circle;

  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe("toDomain", () => {
    it("maps a Prisma record with relations into a Circle domain entity", () => {
      const rehydratedUser = { id: "user-1", getUsername: () => "matt" };
      const rehydratedHabit = { id: "habit-1", getName: () => "Meditate" };
      const rehydratedCircle = { id: "circle-1", name: "My Circle" };

      // Mock rehydrate calls
      (User.rehydrate as jest.Mock).mockReturnValueOnce(rehydratedUser);
      (User.rehydrate as jest.Mock).mockReturnValue(rehydratedUser);
      (Habit.rehydrate as jest.Mock).mockReturnValue(rehydratedHabit);
      (Circle.rehydrate as jest.Mock).mockReturnValue(rehydratedCircle);

      const result = CirclePrismaMapper.toDomain(mockCircleRecord);

      // Verify entity rehydrations
      expect(User.rehydrate).toHaveBeenCalledTimes(2); // owner + 1 member
      expect(User.rehydrate).toHaveBeenCalledWith(
        mockUser.id,
        mockUser.createdAt,
        mockUser.username,
        mockUser.password
      );

      expect(Habit.rehydrate).toHaveBeenCalledWith(
        mockHabit.id,
        mockHabit.createdAt,
        mockHabit.name,
        mockHabit.circleId
      );

      expect(Circle.rehydrate).toHaveBeenCalledWith(
        mockCircleRecord.id,
        mockCircleRecord.createdAt,
        mockCircleRecord.name,
        rehydratedUser,
        [rehydratedUser],
        [rehydratedHabit]
      );

      // Verify returned domain object
      expect(result).toBe(rehydratedCircle);
    });
  });

  describe("toPrisma", () => {
    it("maps a Circle domain entity into a Prisma-compatible record", () => {
      const result = CirclePrismaMapper.toPersistence(mockCircle);

      expect(result).toEqual({
        id: "circle-1",
        name: "My Circle",
        createdAt: new Date("2025-03-01"),
      });

      expect(mockCircle.name.get).toHaveBeenCalledTimes(1);
    });
  });
});
