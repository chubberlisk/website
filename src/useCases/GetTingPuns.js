export default class GetTingPuns {
  constructor(datamuseApiGateway) {
    this.datamuseApiGateway = datamuseApiGateway;
  }

  async execute() {
    return await this.datamuseApiGateway.retrieveTingPuns();
  }
}
