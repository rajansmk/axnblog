
export class Category {
    public catid: number;
  public name: string;
  public categorycount:string;
  public allcount:string;
 
  constructor(catid:number,name: string,categorycount:string,allcount:string) {
    this.catid = catid;
    this.name = name;
    this.categorycount = categorycount;
    this.allcount = allcount;
  }
}
