export class Bloghome {
    public blogid: number;
  public blog_header: string;
  public blog_headerdesc:string;
  public blog_keywords:string;
  public created_date:string;
  public name:string;
  public meta_keywords:string;
  public catid:number;
  public displayheader:string;
  public posttypeid:number
 
  constructor(blogid:number,blog_header: string,blog_headerdesc:string,blog_keywords:string,created_date:string,name:string,meta_keywords:string,catid:number,displayheader:string,posttypeid:number) {
    this.blogid = blogid;
    this.blog_header = blog_header;
    this.blog_headerdesc = blog_headerdesc;
    this.blog_keywords = blog_keywords;
    this.created_date=created_date;
    this.name = name;
    this.meta_keywords=meta_keywords;
    this.catid=catid;
    this.displayheader=displayheader;
    this.posttypeid=posttypeid;
  }
}
