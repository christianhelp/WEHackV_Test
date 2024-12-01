import { createRouteHandler } from "uploadthing/next";
import { auth } from "@clerk/nextjs";
import { ourFileRouter } from "./core";
import { NextRequest } from "next/server";


// Export routes for Next App Router
export const { GET, POST } = createRouteHandler({
	router: ourFileRouter,
	// Apply an (optional) custom config:
	// config: { ... },
});