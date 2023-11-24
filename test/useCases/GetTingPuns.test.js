import GetTingPuns from "@/useCases/GetTingPuns";

const datamuseApiGateway = {
  retrieveTingPuns: jest.fn().mockResolvedValue(["testing"]),
};

const getTingPuns = new GetTingPuns(datamuseApiGateway);

it("retrieves Ting puns", async () => {
  await getTingPuns.execute();

  expect(datamuseApiGateway.retrieveTingPuns).toHaveBeenCalled();
});

it("returns all Ting puns", async () => {
  const response = await getTingPuns.execute();

  expect(response.data.tingPuns).toHaveLength(1);
});
