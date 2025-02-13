import { v2 as cloudinary } from "cloudinary";
import dotenv from "dotenv";

dotenv.config();

// 🔹 Configure Cloudinary
cloudinary.config({ 
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME, 
  api_key: process.env.CLOUDINARY_API_KEY, 
  api_secret: process.env.CLOUDINARY_API_SECRET 
});

const uploadOnCloudinary = async (fileBuffer) => {
    try {
        if (!fileBuffer) return null;

        // Convert Buffer to Base64 for Cloudinary upload
        const base64String = `data:application/pdf;base64,${fileBuffer.toString("base64")}`;

        // 🔹 Upload the file to Cloudinary
        const response = await cloudinary.uploader.upload(base64String, {
            resource_type: "raw",
            folder: "internship_uploads", // Change this as needed
        });

        console.log("File uploaded to Cloudinary:", response.secure_url);
        return response.secure_url;
    } catch (error) {
        console.error("Cloudinary Upload Error:", error);
        return null;
    }
};

export { uploadOnCloudinary };
