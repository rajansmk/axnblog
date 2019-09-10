
export class Category {
    public catid: number;
  public name: string;
  public categorycount:string;
 
  constructor(catid:number,name: string,categorycount:string) {
    this.catid = catid;
    this.name = name;
    this.categorycount = categorycount;
  }
}
