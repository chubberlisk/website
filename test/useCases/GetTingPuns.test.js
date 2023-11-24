import GetTingPuns from "@/useCases/GetTingPuns";

const datamuseApiGateway = {
  retrieveTingPuns: jest.fn().mockResolvedValue(["testing"]),
};

const getTingPuns = new GetTingPuns(datamuseApiGateway);

it("retrieves Ting puns", async () => {
  await getTingPuns.execute();

  expect(datamuseApiGateway.retrieveTingPuns).toHaveBeenCalled();
});

it("returns all writings", async () => {
  const tingPuns = await getTingPuns.execute();

  expect(tingPuns).toHaveLength(1);
});
