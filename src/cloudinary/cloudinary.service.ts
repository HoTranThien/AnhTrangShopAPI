import cloudinary from "./cloudinary.config";
import { CloudinaryDTO } from "./dto/cloudinary.dto";
import { Injectable } from "@nestjs/common";
import { Readable } from "stream";

@Injectable()
export class CloudinaryService{
  async PostImg(imgs:Array<Express.Multer.File>){
    //let img = "C:/Users/ttho1/OneDrive/Desktop/My Project/anh-trang-shop-api/src/assets/zalo.png";
    //let collection:string[] = [];
    // for(let i =0 ; i < imgs.path.length;i++){
    //   await cloudinary.single('file')
    //   collection.push(imgs.path[i]);
    // }
    //console.log(imgs.originalname);
    //let a = await cloudinary.uploader.upload(img,{folder:"AnhTrangShop"});

    // return new Promise((res, rej) => {
    //   const theTransformStream = cloudinary.uploader.upload_stream({folder:"AnhTrangShop"},
    //     (err, result) => {
    //       if (err) return rej(err);
    //       res(result);
    //     }
    //   );
    //   let str = Readable.from(imgs[0].buffer);
    //   str.pipe(theTransformStream);

        // for (let i=0; i<imgs.length;i++)
        //   {
        //     const theTransformStream = cloudinary.uploader.upload_stream({folder:"AnhTrangShop"});
        //     let str = Readable.from(imgs[i].buffer).pipe(theTransformStream);
        //   }
    return new Promise((res, rej) => {
      for (let i=0; i<imgs.length;i++){
        const theTransformStream = cloudinary.uploader.upload_stream({folder:"AnhTrangShop"},
          (err, result) => {
            if (err) return rej(err);
            res(result);
          }
        );
        let str = Readable.from(imgs[i].buffer).pipe(theTransformStream);
      }

    });

  }

  async DeleteImg(imgs:CloudinaryDTO){
    for(let i =0 ; i < imgs.path.length;i++){
      //await cloudinary.uploader.destroy(imgs.path[i]);
    }
    return "Updated product";
}
}