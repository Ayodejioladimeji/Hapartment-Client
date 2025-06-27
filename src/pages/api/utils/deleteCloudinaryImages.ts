// utils/deleteCloudinaryImages.ts
import { v2 as cloudinary } from 'cloudinary';

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME!,
    api_key: process.env.CLOUDINARY_API_KEY!,
    api_secret: process.env.CLOUDINARY_API_SECRET!,
});

export async function deleteImagesWithFilename(fileName: string) {
    // const folder = 'listings';
    // const expression = `public_id:*/${filename}`;

    // try {
    //     const result = await cloudinary.api.delete_resources_by_prefix(`${folder}/`, {
    //         type: 'upload',
    //         resource_type: 'image',
    //     });

    //     return result;
    // } catch (error: any) {
    //     console.error('Cloudinary delete error:', error);
    //     throw new Error('Failed to delete images from Cloudinary');
    // }

    try {
        // Search for resources with the target filename
        const result = await cloudinary.search
            .expression(`folder:listings AND filename:${fileName}`)
            .execute();

        const publicIds = result.resources.map((res: any) => res.public_id);

        if (publicIds.length === 0) return;

        await cloudinary.api.delete_resources(publicIds);
        console.log(`Deleted ${publicIds.length} images with filename ${fileName}`);
    } catch (err: any) {
        console.error("Cloudinary delete error:", err);
        throw new Error("Failed to delete images by filename");
      }
}
