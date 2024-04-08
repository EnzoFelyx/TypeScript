"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/routes.ts
var routes_exports = {};
__export(routes_exports, {
  default: () => routes_default
});
module.exports = __toCommonJS(routes_exports);
var import_express = require("express");

// src/services/EmailService.ts
var EmailService = class {
  sendMai({ to, message }) {
    console.log(`Email enviado para ${to.name}: ${message.subject}`);
  }
};
var EmailService_default = EmailService;

// src/controllers/UserController.ts
var users = [
  { name: "Enzo", email: "enzofe@gmail.com" }
];
var UserController_default = {
  async index(req, res) {
    return res.json(users);
  },
  async create(req, res) {
    const emailService = new EmailService_default();
    emailService.sendMai({
      to: {
        name: "Enzo Felix",
        email: "enzofelix@gmail.com"
      },
      message: {
        subject: "Bem vindo ao sistema",
        body: "Seja bem-vindo"
      }
    });
    return res.send();
  }
};

// src/routes.ts
var routes = (0, import_express.Router)();
routes.get("/users", UserController_default.index);
routes.post("/users", UserController_default.create);
var routes_default = routes;
