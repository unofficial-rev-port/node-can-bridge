"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.closeStreamSession = exports.readStreamSession = exports.openStreamSession = exports.receiveMessage = exports.unregisterDeviceFromHAL = exports.registerDeviceToHAL = exports.getDevices = void 0;
var util_1 = require("util");
var addon = require('bindings')('addon');
exports.getDevices = util_1.promisify(addon.getDevices);
exports.registerDeviceToHAL = util_1.promisify(addon.registerDeviceToHAL);
exports.unregisterDeviceFromHAL = util_1.promisify(addon.unregisterDeviceFromHAL);
exports.receiveMessage = util_1.promisify(addon.receiveMessage);
exports.openStreamSession = util_1.promisify(addon.openStreamSession);
exports.readStreamSession = util_1.promisify(addon.readStreamSession);
exports.closeStreamSession = util_1.promisify(addon.closeStreamSession);
