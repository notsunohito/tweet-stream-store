import mongoose from 'mongoose';

mongoose.connect('mongodb://localhost/tweet_stream_store');

export const Tweet = mongoose.model('Tweet', new mongoose.Schema({}, {strict: false}));
