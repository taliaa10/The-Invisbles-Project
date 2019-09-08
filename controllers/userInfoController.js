const UserInfo = require('../models/infoModel');
const User = require('../models/userModel');
const catchAsync = require('../utils/catchAsync');
const AppError = require('../utils/appError');

exports.createUserInfo = catchAsync(async (req, res, next) => {
    const user = await UserInfo.create(req.body);
    console.log(user)
    res.status(201).json({
      status: 'success',
      data: {
        userInfo: user
      }
    });
  });

// exports.createUserInfo = UserInfo => catchAsync(async (req,res,next) => {
//     const newUserInfo = await UserInfo.findByIdAndUpdate(req.params.id, req.body, {
//         new: true,
//         runValidators: true
//     });

//     console.log(newUserInfo);
    
//     if(!newUserInfo) {
//         return next(new AppError('No user found with that ID', 404));
//     }

//     res.status(201).json({
//         status: 'success',
//         data: {
//             userInfo: newUserInfo
//         }
//     });
// });

exports.getOne = catchAsync(async (req, res, next) => {
    let query = await User.findById(req.params.id);
    console.log(query)
    if (!query) {
      return next(new AppError('No document found with that ID', 404));
    }

    res.status(200).json({
      status: 'success',
      data: {
        user: query
      }
    });
});