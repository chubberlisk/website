export default class DatamuseApiGateway {
  async retrieveTingPuns() {
    const response = await fetch(
      "https://api.datamuse.com/words?sp=*ting&max=1000",
    );
    const words = await response.json();

    return words.map((word) => word.word);
  }
}
