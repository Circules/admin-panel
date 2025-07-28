import mongoose from 'mongoose';

const Schema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    desc: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
}, {
    timestamps: true
});

const Project = mongoose.model('Project', Schema); //collection name 'Product' with that schema
//products

const Event = mongoose.model('Event', Schema); //collection name 'Event' with that schema
//events

const Member = mongoose.model('Member', Schema); //collection name 'Product' with that schema
//products
export {Project,Event,Member};