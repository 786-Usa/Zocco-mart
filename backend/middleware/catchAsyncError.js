import ErrorHandler from "../utils/ErrorHandler";


const catchAsyncError = (fn) => {
    return (req, res, next) => {
        Promise.resolve(fn(req, res, next)).catch((err) => {
            next(new ErrorHandler(err.message, 500));
        });
    };
};

export default catchAsyncError;