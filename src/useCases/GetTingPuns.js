export default class GetTingPuns {
  constructor(datamuseApiGateway) {
    this.datamuseApiGateway = datamuseApiGateway;
  }

  async execute() {
    const tingPuns = await this.datamuseApiGateway.retrieveTingPuns();

    return {
      data: { tingPuns },
      metadata: {
        source: { name: "Datamuse API", url: "https://www.datamuse.com/api/" },
      },
    };
  }
}
