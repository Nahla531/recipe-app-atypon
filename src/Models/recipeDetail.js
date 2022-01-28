export default class RecipeDetails {
  id;
  image;
  title;
  image;
  summary;
  sourceUrl;
  constructor(id, image, title, summary, sourceUrl) {
    this.id = id;
    this.image = image;
    this.title = title;
    this.summary = summary;
    this.sourceUrl = sourceUrl;
  }
}
