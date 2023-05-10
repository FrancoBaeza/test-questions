import { NextResponse } from 'next/server';
import catchAsync from './catchAsync.js';
import AppError from './appError.js';

export const createOne = (Model) =>
  catchAsync(async (req, res, next) => {
    const doc = await Model.create(req.body);
    res.status(201).json({ status: 'success', data: { data: doc } });
  });

export const updateOne = (Model) =>
  catchAsync(async (req, res, next) => {
    const doc = await Model.findById(req.params.id);

    if (!doc) {
      throw(new AppError('No document found with that id', 404));
    }
    const updatedDoc = await Object.assign(doc, req.body).save();

    res.status(200).json({ status: 'success', data: { data: updatedDoc } });
  });

export const deleteOne = (Model) =>
  catchAsync(async (req, res, next) => {
    const doc = await Model.findByIdAndDelete(req.params.id);

    if (!doc) {
      throw(new AppError('No document found with that id', 404));
    }

    res.status(204).json({ status: 'success', data: null });
  });

export const getOne = (Model, popOptions) =>
  catchAsync(async (req, res, next) => {
    let query = Model.findById(req.params.id);
    if (popOptions) query = query.populate(popOptions);
    const doc = await query;

    if (!doc) {
      throw(new AppError('No document found with that id', 404));
    }

    res.status(200).json({
      status: 'success',
      data: {
        data: doc,
      },
    });
  });

export const getAll = (Model) =>
  catchAsync(async (req, res, next) => {
    const doc = await Model.find();

    return NextResponse.json({
      status: 200,
      results: doc.length,
      data: {
        data: doc,
      },
    });
  });
