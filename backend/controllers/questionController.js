import fs from "fs";
import { NextResponse } from "next/server";
import Question from "../models/Question";
import catchAsync from "../util/catchAsync";


export const loadQuestions = async () => {
    // read the file "questions.txt" and introduce every line into an array
    const questions = fs.readFileSync("questions.txt", "utf8").split("\n");
    console.log("[DEBUG] Questions: ", questions);

    // delete all the questions from the database
    await Question.deleteMany({});

    // create a new question for each question in the array
    questions.forEach(async (question) => {
        // split the question string into two by "|" the first part is the question value and the second part is the question itself
        question = question.split("|");
        console.log("[DEBUG] Question: ", question);

        // create a new question in the database
        await Question.create({
            value: Number(question[0]),
            text: question[1],
        });
    });

    // return a success message
    return NextResponse.json({
        status: 200,
        message: "Questions loaded successfully",
    });
};

export const getAllQuestions = async () => {
    // get all the questions from the database
    const questions = await Question.find({});

    // return the questions
    return NextResponse.json({
        status: 200,
        results: questions.length,
        data: {
            data: questions,
        },
    });
};

export const markQuestion = async (id) => {
    

    // update the answered field of the question
    const updatedQuestion = await Question.findByIdAndUpdate(
        id,
        { answered: true },
        { new: true, runValidators: true }
    );

    // return the updated question
    return NextResponse.json({
        status: 200,
        data: { 
            data: updatedQuestion,
        },
    });
}

export const pickQuestion = async () => {
    // get all the questions that are not answered
    const questions = await Question.find({ answered: false });

    if(questions.length === 0) {
        return NextResponse.json({
            status: 200,
            message: "No questions left",
        });
    }

    // choose a random question from the array
    const randomQuestion = questions[Math.floor(Math.random() * questions.length)];

    // mark the questions a answered
    await markQuestion(randomQuestion._id);

    // return the random question
    return NextResponse.json({
        status: 200,
        data: {
            data: randomQuestion,
        },
    });
}