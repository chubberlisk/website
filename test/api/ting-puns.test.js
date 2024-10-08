import handler from "@/api/ting-puns";
import { getTingPuns } from "@/utils/AppContext";
import { createMocks as createHttpMocks } from "node-mocks-http";

jest.mock("@/utils/AppContext", () => ({
  getTingPuns: {
    execute: jest.fn().mockReturnValue({
      data: {
        tingPuns: ["farting", "vomiting", "exhausting"],
      },
      metadata: { sources: [{ name: "Awesome Sauce API" }] },
    }),
  },
}));

describe("when HTTP GET method", () => {
  const { req, res } = createHttpMocks({ method: "GET" });

  beforeAll(async () => {
    await handler(req, res);
  });

  it("retrieves Ting puns", () => {
    expect(getTingPuns.execute).toHaveBeenCalledWith({ random: false });
  });

  it("returns a HTTP 200 Success status", () => {
    expect(res._getStatusCode()).toEqual(200);
  });

  it("returns Ting puns within a data key", () => {
    expect(res._getJSONData()["data"]["tingPuns"]).toEqual([
      "farting",
      "vomiting",
      "exhausting",
    ]);
  });

  it("returns metadata", () => {
    expect(res._getJSONData()["metadata"]).toEqual({
      sources: [{ name: "Awesome Sauce API" }],
    });
  });

  describe("and 'random' query parameter is specified", () => {
    [null, true, "true", "yes"].map((random) => {
      it(`retrieves one Ting pun at random for ${random}`, async () => {
        const { req, res } = createHttpMocks({
          method: "GET",
          query: { random },
        });

        await handler(req, res);

        expect(getTingPuns.execute).toHaveBeenCalledWith({ random: true });
      });
    });
  });
});

describe("when an unsupported HTTP method", () => {
  ["POST", "PUT", "DELETE", "PATCH"].forEach((unsupportedHttpMethod) => {
    it(`returns a HTTP 405 Method Not Allowed status for ${unsupportedHttpMethod}`, async () => {
      const { req, res } = createHttpMocks({ method: unsupportedHttpMethod });

      await handler(req, res);

      expect(res._getStatusCode()).toEqual(405);
    });
  });
});
