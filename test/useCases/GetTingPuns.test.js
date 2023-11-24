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

it("returns metadata", async () => {
  const response = await getTingPuns.execute();

  expect(response.metadata).toEqual({
    sources: [
      {
        name: "Datamuse API",
        url: "https://www.datamuse.com/api/",
      },
    ],
  });
});
