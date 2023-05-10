import { NextResponse } from "next/server";

const catchAsync = (fn) => (req, res, next) => {
  fn(req, res, next).catch((err) => {

    if(err.appError){
      //handle error when provoked by appError
      res.status(err.statusCode).json({ status: err.status, message: err.message });

      NextResponse.json({
        status: err.statusCode,
        message: err.message
      });
    } else {
      const message = err.errors.description.properties.message;

      NextResponse.json({
        status: 400,
        message: 'Something went wrong'
      });
    }
  });
};

export default catchAsync;