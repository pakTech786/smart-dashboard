const mongoose = require('mongoose');

const applicationSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Users', 
        required: true
    },
    status: {
        type: String,
        enum: ['active', 'stopped'], 
        default: 'active'
    },
    log: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'ActivityLog', // Assuming ActivityLog model is defined
    }],
    instances: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Instances'
    }]
});

module.exports = mongoose.model('Applications', applicationSchema);
