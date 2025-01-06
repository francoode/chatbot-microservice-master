
import { ClientOptions } from "@nestjs/microservices";
import { CHAT_QUEUE, MESSAGE_QUEUE, USER_QUEUE } from "../consts/all-const.helper";

export const userServiceClient: ClientOptions = {
  transport: 5,
  options: {
    urls: [`amqp://user:password@rabbitmq:5672`],
    queue: USER_QUEUE,
  },
};

export const chatServiceClient: ClientOptions = {
  transport: 5,
  options: {
    urls: [`amqp://user:password@rabbitmq:5672`],
    queue: CHAT_QUEUE,
  },
};

export const messageServiceClient: ClientOptions = {
  transport: 5,
  options: {
    urls: [`amqp://user:password@rabbitmq:5672`],
    queue: MESSAGE_QUEUE,
  },
};