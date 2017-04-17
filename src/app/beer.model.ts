/**
 * Provides a `Beer` object
 */
export class Beer {
  id: string;
  name: string;
  abv: string;
  ibu: string;
  label_url: string;
  description: string;
  type_name: string;
  // constructor(
  //   public id: string,
  //   public name: string,
  //   public abv: string,
  //   public ibu: string,
  //   public label_url: string,
  //   public description: string,
  //   public type_name: string) {
  // }
  constructor(data: any) {
    this.id = data.id;
    this.name = data.name;
    this.abv = data.abv;
    this.ibu = data.ibu;
    this.label_url = data.label_url;
    this.description = data.description;
    this.type_name = data.type_name;
  }
}
