
export class Blog {
    public blogid: number;
  public blog_desc: string;
  public blog_header: string;
  public blog_headerdesc:string;
  public blog_keywords:string;
  public created_date:string;
  public catid:number;
  public groupid:number;
  public meta_keywords:string;
  public displayheader:string;
  public posttypeid:number
  public preurl:string;
  public nexturl:string;
 
  constructor(blogid:number, blog_desc:string, blog_header: string,blog_headerdesc:string,blog_keywords:string,created_date:string,catid:number,groupid:number,meta_keywords:string,displayheader:string,posttypeid:number,preurl:string,nexturl:string) {
    this.blogid = blogid;
    this.blog_desc = blog_desc;
    this.blog_header = blog_header;
    this.blog_headerdesc = blog_headerdesc;
    this.blog_keywords = blog_keywords;
    this.created_date = created_date;
    this.catid = catid;
    this.groupid = groupid;
    this.meta_keywords = meta_keywords;
    this.displayheader=displayheader;
    this.posttypeid=posttypeid;
    this.preurl=preurl;
    this.nexturl=nexturl;
  }
}

