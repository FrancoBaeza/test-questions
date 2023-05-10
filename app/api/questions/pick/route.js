import dbConnect from "@/utils/dbConnect";
import { NextResponse } from "next/server";
import { pickQuestion } from "@/backend/controllers/questionController";

export async function GET () {
    try {
        await dbConnect();
        return await pickQuestion();
    } catch (error) {
        console.log('[DEBUG] Error: ', error)
        return NextResponse.json({ success: false, error });
    }
}