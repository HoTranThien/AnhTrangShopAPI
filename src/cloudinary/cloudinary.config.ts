import { v2 as cloudinary } from 'cloudinary';
import 'dotenv/config'

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
  });

//   const storage = new CloudinaryStorage({
//     cloudinary,
//     // params: [{
//     //     folder: "string",
//     //     resource_type: 'auto',
//     //     allowedFormats: ['jpeg', 'png', 'jpg'],
//     // }]
// });
  
// const upload = multer({ storage: storage });
// export default upload;
export default cloudinary;