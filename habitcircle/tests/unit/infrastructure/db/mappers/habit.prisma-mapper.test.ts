import { HabitPrismaMapper } from "@/server/infrastructure/db/mappers/habit.prisma-mapper";
import { Habit } from "@/server/domain/entities/habit.entity";

jest.mock("@/server/domain/entities/habit.entity");

describe("HabitMapper", () => {
  const mockRecord = {
    id: "habit-1",
    createdAt: new Date("2025-02-01"),
    name: "Meditate",
    circleId: "circle-1",
  };

  const mockHabit = {
    id: "habit-1",
    createdAt: new Date("2025-02-01"),
    circleId: "circle-1",
    getName: jest.fn().mockReturnValue("Meditate"),
  } as unknown as Habit;

  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe("toDomain", () => {
    it("rehydrates a Habit domain entity from a Prisma record", () => {
      const rehydratedHabit = { id: "habit-1", type: "Habit" };
      (Habit.rehydrate as jest.Mock).mockReturnValue(rehydratedHabit);

      const result = HabitPrismaMapper.toDomain(mockRecord);

      expect(Habit.rehydrate).toHaveBeenCalledWith(
        mockRecord.id,
        mockRecord.createdAt,
        mockRecord.name,
        mockRecord.circleId
      );
      expect(result).toBe(rehydratedHabit);
    });
  });

  describe("toPrisma", () => {
    it("converts a Habit domain entity to a Prisma-compatible record", () => {
      const result = HabitPrismaMapper.toPersistence(mockHabit);

      expect(result).toEqual({
        id: "habit-1",
        createdAt: new Date("2025-02-01"),
        name: "Meditate",
        circleId: "circle-1",
      });

      expect(mockHabit.getName).toHaveBeenCalledTimes(1);
    });
  });
});
