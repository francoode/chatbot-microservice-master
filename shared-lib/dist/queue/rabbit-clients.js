"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.chatServiceClient = exports.userServiceClient = void 0;
exports.userServiceClient = {
    transport: 5,
    options: {
        urls: [`amqp://user:password@rabbitmq:5672`],
        queue: 'USER_QUEUE',
    },
};
exports.chatServiceClient = {
    transport: 5,
    options: {
        urls: [`amqp://user:password@rabbitmq:5672`],
        queue: 'CHAT_QUEUE',
    },
};
