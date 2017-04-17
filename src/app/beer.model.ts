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

  constructor(data: any) {
    this.id = data.id  || null;
    this.name = data.name || null;
    this.abv = data.abv || null;
    this.ibu = data.ibu || null;
    this.label_url = data.label_url || null;
    this.description = data.description || null;
    this.type_name = data.type_name || null;
  }
}
