import dbConnect from "../../../utils/dbConnect";
import { NextResponse } from 'next/server';
import { loadQuestions, getAllQuestions } from "../../../backend/controllers/questionController";

export async function POST (req, res) {    
    try {
        await dbConnect();
        return await loadQuestions(req, res);
    } catch (error) {
        console.log('[DEBUG] Error: ', error)	
        NextResponse.json({ success: false, error: error });
    }
}

export async function GET (req, res) {
    try {
        await dbConnect();
        return await getAllQuestions(req, res);
    } catch (error) {
        console.log('[DEBUG] Error: ', error)
        return NextResponse.json({ success: false, error });
    }
}