"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.requireJsonContent = void 0;
const requireJsonContent = (request, response, next) => {
    if (request.headers['content-type'] !== 'application/json') {
        response.status(400).send('Server requires application/json');
    }
    else {
        next();
    }
};
exports.requireJsonContent = requireJsonContent;
