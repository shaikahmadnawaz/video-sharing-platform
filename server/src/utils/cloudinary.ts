import { v2 as cloudinary, UploadApiResponse } from "cloudinary";
import fs from "fs";
import dotenv from "dotenv";
dotenv.config({ path: "./.env" });

interface CloudinaryConfig {
  cloud_name: string;
  api_key: string;
  api_secret: string;
}

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME as string,
  api_key: process.env.CLOUDINARY_API_KEY as string,
  api_secret: process.env.CLOUDINARY_API_SECRET as string,
} as CloudinaryConfig);

const uploadOnCloudinary = async (
  localFilePath: string
): Promise<UploadApiResponse | null> => {
  try {
    if (!localFilePath) {
      return null;
    }

    // Upload to Cloudinary
    const response = await cloudinary.uploader.upload(localFilePath, {
      resource_type: "auto",
    });
    // file is uploaded to Cloudinary
    // console.log("file uploaded to Cloudinary", response.url);
    fs.unlinkSync(localFilePath); // delete the file from the node server
    return response;
  } catch (error) {
    fs.unlinkSync(localFilePath); // delete the file from the node server
    console.error(error);
    return null;
  }
};

export { uploadOnCloudinary };
