export class Bloghome {
    public blogid: number;
  public blog_header: string;
  public blog_headerdesc:string;
  public blog_keywords:string;
  public created_date:string;
  public name:string;
 
  constructor(blogid:number,blog_header: string,blog_headerdesc:string,blog_keywords:string,created_date:string,name:string) {
    this.blogid = blogid;
    this.blog_header = blog_header;
    this.blog_headerdesc = blog_headerdesc;
    this.blog_keywords = blog_keywords;
    this.created_date=created_date;
    this.name = name;
  }
}
