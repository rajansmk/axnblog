
export class Blog {
    public blogid: number;
  public blog_desc: string;
  public blog_header: string;
  public blog_headerdesc:string;
  public blog_keywords:string;
  public created_date:string;
  public catid:number;
  public groupid:number;
 
  constructor(blogid:number, blog_desc:string, blog_header: string,blog_headerdesc:string,blog_keywords:string,created_date:string,catid:number,groupid:number) {
    this.blogid = blogid;
    this.blog_desc = blog_desc;
    this.blog_header = blog_header;
    this.blog_headerdesc = blog_headerdesc;
    this.blog_keywords = blog_keywords;
    this.created_date = created_date;
    this.catid = catid;
    this.groupid = groupid;
  }
}

