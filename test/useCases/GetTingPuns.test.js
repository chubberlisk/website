import GetTingPuns from "@/useCases/GetTingPuns";

const datamuseApiGateway = {
  retrieveTingPuns: jest
    .fn()
    .mockResolvedValue(["testing", "computing", "setting"]),
};

const getTingPuns = new GetTingPuns(datamuseApiGateway);

it("retrieves Ting puns", async () => {
  await getTingPuns.execute();

  expect(datamuseApiGateway.retrieveTingPuns).toHaveBeenCalled();
});

it("returns all Ting puns", async () => {
  const response = await getTingPuns.execute();

  expect(response.data.tingPuns).toHaveLength(3);
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

it("orders Ting puns alphabetically", async () => {
  const response = await getTingPuns.execute();

  expect(response.data.tingPuns).toEqual(["computing", "setting", "testing"]);
});

describe("when random parameter is true", () => {
  it("returns one Ting pun at random", async () => {
    const response = await getTingPuns.execute({ random: true });

    expect(response.data.tingPuns).toHaveLength(1);
  });
});
