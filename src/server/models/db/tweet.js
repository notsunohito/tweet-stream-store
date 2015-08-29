import mongoose from 'mongoose';


export const Tweet = mongoose.model('Tweet', new mongoose.Schema({}, {strict: false}));
