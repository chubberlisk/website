export default class GetTingPuns {
  constructor(datamuseApiGateway) {
    this.datamuseApiGateway = datamuseApiGateway;
  }

  async execute({ random = false } = {}) {
    const tingPuns = await this.datamuseApiGateway.retrieveTingPuns();

    return {
      data: {
        tingPuns: random
          ? [tingPuns[Math.floor(Math.random() * tingPuns.length)]]
          : tingPuns.sort(),
      },
      metadata: {
        sources: [
          { name: "Datamuse API", url: "https://www.datamuse.com/api/" },
        ],
      },
    };
  }
}
