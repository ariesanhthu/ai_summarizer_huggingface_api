import { NextResponse } from "next/server";
import { client } from "@gradio/client";
import fs from "fs";
import path from "path";

export async function GET() {
    try {
        // Đọc file ảnh từ thư mục public
        const imagePath = path.join(process.cwd(), "public", "im.jpg");

        if (!fs.existsSync(imagePath)) {
            throw new Error("Image file not found at public/im.jpg");
        }

        const imageBuffer = fs.readFileSync(imagePath);
        const exampleImage = new Blob([imageBuffer], { type: "image/jpeg" });

        // Kết nối API Gradio
        const app = await client("Nymbo/Virtual-Try-On");

        console.log("🔹 API Connected. Sending request...");

        // Gửi ảnh đến API Virtual Try-On
        const result = await app.predict("/tryon", [
            { background: exampleImage, layers: [], composite: exampleImage }, // 🔹 Sử dụng ảnh làm background
            exampleImage, // Blob trong 'Garment' Image component
            "Hello!!", // String trong 'parameter_17' Textbox component
            true, // Boolean trong 'Yes' Checkbox component
            true, // Boolean trong 'Yes' Checkbox component
            20, // Giá trị hợp lệ cho 'Denoising Steps'
            20, // Giá trị hợp lệ cho 'Seed'
        ]);

        console.log("✅ API Response:", result.data);

        return NextResponse.json({ success: true, data: result.data.map((item : any) => ({ url: item.url })) });
    } catch (error) {
        console.error("❌ Error calling Virtual Try-On API:", error);
        return NextResponse.json({ success: false, error: "error.message" }, { status: 500 });
    }
}

