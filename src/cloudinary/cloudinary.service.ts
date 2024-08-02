import cloudinary from "./cloudinary.config";
import { Injectable } from "@nestjs/common";
import path from "path";
import { Readable } from "stream";

@Injectable()
export class CloudinaryService{

  private PostOne(img, list:string[]){
    return new Promise((res,rej) => {
      const theTransformStream = cloudinary.uploader.upload_stream(
        {folder:"AnhTrangShop"},
        (err, result) => {     
          if (err) return rej(err);
          list.push(result.url)
          res(result);
        }
      );
      let str = Readable.from(img.buffer);
      str.pipe(theTransformStream);
  })}

  async PostImgs(imgs:Express.Multer.File[]){
      let list:string[] = [];
      let result = await imgs.reduce((pre,cur)=>
        pre.then(()=> this.PostOne(cur,list))
      ,Promise.resolve());
      return list;

  }


  async DeleteImgs(imgs:string[]){
    for(let i =0 ; i < imgs.length;i++){
      let filename = this.findpublic_id(imgs[i]);
      await cloudinary.uploader.destroy(filename);
    }
    return {result:"OK"};
}

  findpublic_id(path:string){
    path = path.substring(0,path.lastIndexOf('.'));
    let arr = path.split('/');
    return arr[arr.length-2].concat('/',arr[arr.length-1]);
  }
}