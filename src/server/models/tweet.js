import _ from 'lodash';
import mongoose from 'mongoose';

export default mongoose.model('Tweet', new mongoose.Schema({}, {strict: false}));
