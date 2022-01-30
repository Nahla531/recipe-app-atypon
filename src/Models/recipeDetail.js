export default class RecipeDetails {
  id;
  image;
  title;
  summary;
  constructor(id, image, title, summary) {
    this.id = id;
    this.image = image;
    this.title = title;
    this.summary = summary;
  }
}
