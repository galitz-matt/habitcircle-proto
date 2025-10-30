import { CompletionPrismaMapper } from "@/server/db/mappers/completion.prisma-mapper";
import { Completion } from "@/server/domain/entities/completion.entity";

jest.mock("@/server/domain/entities/completion.entity");

describe("CompletionMapper", () => {
  const mockRecord = {
    id: "completion-1",
    createdAt: new Date("2025-04-01"),
    userId: "user-1",
    habitId: "habit-1",
  };

  const mockCompletion = {
    id: "completion-1",
    createdAt: new Date("2025-04-01"),
    userId: "user-1",
    habitId: "habit-1",
  } as unknown as Completion;

  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe("toDomain", () => {
    it("rehydrates a Completion domain entity from a Prisma record", () => {
      const rehydrated = { id: "completion-1", type: "Completion" };
      (Completion.rehydrate as jest.Mock).mockReturnValue(rehydrated);

      const result = CompletionPrismaMapper.toDomain(mockRecord);

      expect(Completion.rehydrate).toHaveBeenCalledWith(
        mockRecord.id,
        mockRecord.createdAt,
        mockRecord.userId,
        mockRecord.habitId
      );
      expect(result).toBe(rehydrated);
    });
  });

  describe("toPrisma", () => {
    it("converts a Completion domain entity to a Prisma-compatible record", () => {
      const result = CompletionPrismaMapper.toPersistence(mockCompletion);

      expect(result).toEqual({
        id: "completion-1",
        createdAt: new Date("2025-04-01"),
        userId: "user-1",
        habitId: "habit-1",
      });
    });
  });
});
