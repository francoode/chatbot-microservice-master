"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.messageServiceClient = exports.chatServiceClient = exports.userServiceClient = void 0;
const all_const_helper_1 = require("../consts/all-const.helper");
exports.userServiceClient = {
    transport: 5,
    options: {
        urls: [`amqp://user:password@rabbitmq:5672`],
        queue: all_const_helper_1.USER_QUEUE,
    },
};
exports.chatServiceClient = {
    transport: 5,
    options: {
        urls: [`amqp://user:password@rabbitmq:5672`],
        queue: all_const_helper_1.CHAT_QUEUE,
    },
};
exports.messageServiceClient = {
    transport: 5,
    options: {
        urls: [`amqp://user:password@rabbitmq:5672`],
        queue: all_const_helper_1.MESSAGE_QUEUE,
    },
};
