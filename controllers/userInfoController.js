const userInfo = require('../models/infoModel');
const catchAsync = require('../utils/catchAsync');

exports.createUserInfo = catchAsync(async (req,res,next) => {
    const newUserInfo = await userInfo.create(req.body);

    res.status(201).json({
        status: 'success',
        data: {
            userInfo: newUserInfo
        }
    });
});