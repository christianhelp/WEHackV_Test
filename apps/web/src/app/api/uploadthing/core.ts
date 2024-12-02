import { createUploadthing, type FileRouter } from "uploadthing/next";
import { UploadThingError } from "uploadthing/server";
import { getAuth } from "@clerk/nextjs/server";

const f = createUploadthing();

const auth = (req: Request) => ({ id: "fakeId" }); // Fake auth function

// FileRouter for your app, can contain multiple FileRoutes
export const ourFileRouter = {
	pdfUploaderPrivate: f({ pdf: { maxFileSize: "4MB", maxFileCount: 1, minFileCount:1 } })
	// Set permissions and file types for this FileRoute
		.middleware(async ({ req }) => {
			const { userId } = getAuth(req);

			if (!userId) {
			  throw new UploadThingError("You need to be logged in to upload files");
			}

			console.log("token env value is: ", process.env.UPLOADTHING_TOKEN);

			return { userId: userId };
		})
		.onUploadComplete(async ({ metadata, file }) => {
			// This code RUNS ON YOUR SERVER after upload
			console.log("Upload complete for userId:", metadata.userId);

			console.log("file url", file.url);

			// !!! Whatever is returned here is sent to the clientside `onClientUploadComplete` callback
			return { uploadedBy: metadata.userId, fileUrl:file.url };
		}),
} satisfies FileRouter;

export type OurFileRouter = typeof ourFileRouter;
