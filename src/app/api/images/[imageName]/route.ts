/* eslint-disable @typescript-eslint/no-explicit-any */
import path from "path";
import fs from "fs/promises";
import { NextResponse } from "next/server";

export async function GET(request: any, { params }: any) {
  const { imageName } = params;
  const imagePath = path.join(process.cwd(), "public", "images", imageName);

  try {
    const exists = await fs
      .access(imagePath)
      .then(() => true)
      .catch(() => false);
    if (!exists) {
      return new NextResponse(JSON.stringify({ error: "Image not found" }), {
        status: 404,
        headers: { "Content-Type": "application/json" },
      });
    }

    const imageBuffer = await fs.readFile(imagePath);
    const fileExtension = path.extname(imagePath).toLowerCase();
    let contentType = "";

    switch (fileExtension) {
      case ".jpg":
      case ".jpeg":
        contentType = "image/jpeg";
        break;
      case ".png":
        contentType = "image/png";
        break;
      case ".gif":
        contentType = "image/gif";
        break;
      case ".webp":
        contentType = "image/webp";
        break;
      default:
        return new NextResponse(
          JSON.stringify({ error: "Unsupported image format" }),
          {
            status: 400,
            headers: { "Content-Type": "application/json" },
          }
        );
    }

    return new NextResponse(imageBuffer, {
      status: 200,
      headers: { "Content-Type": contentType },
    });
  } catch (error) {
    console.error("Error serving image:", error);
    return new NextResponse(JSON.stringify({ error: "Failed to load image" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}

export async function HEAD(request: any, { params }: any) {
  const { imageName } = params;
  const imagePath = path.join(process.cwd(), "public", "images", imageName);

  try {
    const exists = await fs
      .access(imagePath)
      .then(() => true)
      .catch(() => false);
    if (!exists) {
      return new NextResponse(null, { status: 404 });
    }

    const fileExtension = path.extname(imagePath).toLowerCase();
    let contentType = "";

    switch (fileExtension) {
      case ".jpg":
      case ".jpeg":
        contentType = "image/jpeg";
        break;
      case ".png":
        contentType = "image/png";
        break;
      case ".gif":
        contentType = "image/gif";
        break;
      case ".webp":
        contentType = "image/webp";
        break;
      default:
        return new NextResponse(null, { status: 400 });
    }

    return new NextResponse(null, {
      status: 200,
      headers: { "Content-Type": contentType },
    });
  } catch (error) {
    console.error("Error checking image:", error);
    return new NextResponse(null, { status: 500 });
  }
}
