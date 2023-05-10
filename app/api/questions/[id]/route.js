import dbConnect from "@/utils/dbConnect.js";
import { NextResponse } from "next/server";
import { markQuestion } from "@/backend/controllers/questionController";

export async function POST(req, { params }) {
    try {
        await dbConnect();
        return await markQuestion(params.id);
    } catch (error) {
        console.log("[DEBUG] Error: ", error);
        NextResponse.json({ success: false, error: error });
    }
}
