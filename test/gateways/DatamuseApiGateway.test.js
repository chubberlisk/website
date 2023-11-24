import DatamuseApiGateway from "@/gateways/DatamuseApiGateway";

const datamuseApiGateway = new DatamuseApiGateway();

describe("#retrieveTingPuns", () => {
  beforeEach(() => {
    fetchMock.resetMocks();
    fetchMock.mockResponse(
      JSON.stringify([
        {
          word: "supporting",
          score: 2036,
        },
        {
          word: "babysitting",
          score: 1938,
        },
        {
          word: "testing",
          score: 899,
        },
      ]),
    );
  });

  it("requests words containing 'ting' from Datamuse API", async () => {
    await datamuseApiGateway.retrieveTingPuns();

    expect(fetchMock.mock.calls.length).toEqual(1);
    expect(fetchMock.mock.calls[0][0]).toEqual(
      "https://api.datamuse.com/words?sp=*ting&max=1000",
    );
  });

  it("returns Ting puns", async () => {
    const tingPuns = await datamuseApiGateway.retrieveTingPuns();

    expect(tingPuns).toEqual(["supporting", "babysitting", "testing"]);
  });
});
