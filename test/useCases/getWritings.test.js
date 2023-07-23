import GetWritings from "@/useCases/getWritings";

const writingsGateway = {
  retrieveWritings: jest.fn().mockReturnValue({
    writings: [
      { content: "Writing 1" },
      { content: "Writing 2" },
      { content: "Writing 3" },
    ],
  }),
};

const getWritings = new GetWritings(writingsGateway);

it("retrieves all writings", () => {
  getWritings.execute();

  expect(writingsGateway.retrieveWritings).toHaveBeenCalled();
});

it("returns all writings", () => {
  const writings = getWritings.execute();

  expect(writings.writings).toHaveLength(3);
});
