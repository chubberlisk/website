export default class GetWritings {
  constructor(writingsGateway) {
    this.writingsGateway = writingsGateway;
  }

  execute() {
    return this.writingsGateway.retrieveWritings();
  }
}
