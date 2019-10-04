export class Comments {
    public commentid:number;
    public comment:string;
    public created_date:string;
    public fullname:string;
    public img:string;

    constructor(commentid:number,comment:string,created_date:string,fullname:string,img:string) {
        this.commentid=commentid;
        this.comment=comment;
        this.created_date=created_date;
        this.fullname=fullname;
        this.img=img;
        
      }

}
