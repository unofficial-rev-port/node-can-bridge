"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setSparkMaxHeartbeatData = exports.setThreadPriority = exports.closeHALStreamSession = exports.readHALStreamSession = exports.openHALStreamSession = exports.writeDfuToBin = exports.stopNotifier = exports.waitForNotifierAlarm = exports.intializeNotifier = exports.sendHALMessage = exports.sendCANMessage = exports.getCANDetailStatus = exports.closeStreamSession = exports.readStreamSession = exports.openStreamSession = exports.receiveMessage = exports.unregisterDeviceFromHAL = exports.registerDeviceToHAL = exports.getDevices = exports.ThreadPriority = void 0;
var util_1 = require("util");
var addon = require('bindings')('addon');
var ThreadPriority;
(function (ThreadPriority) {
    ThreadPriority[ThreadPriority["Low"] = 0] = "Low";
    ThreadPriority[ThreadPriority["BelowNormal"] = 1] = "BelowNormal";
    ThreadPriority[ThreadPriority["Normal"] = 2] = "Normal";
    ThreadPriority[ThreadPriority["AboveNormal"] = 3] = "AboveNormal";
    ThreadPriority[ThreadPriority["High"] = 4] = "High";
    ThreadPriority[ThreadPriority["PriorityMax"] = 5] = "PriorityMax";
    ThreadPriority[ThreadPriority["PriorityError"] = 6] = "PriorityError";
})(ThreadPriority = exports.ThreadPriority || (exports.ThreadPriority = {}));
exports.getDevices = util_1.promisify(addon.getDevices);
exports.registerDeviceToHAL = addon.registerDeviceToHAL;
exports.unregisterDeviceFromHAL = util_1.promisify(addon.unregisterDeviceFromHAL);
exports.receiveMessage = addon.receiveMessage;
exports.openStreamSession = addon.openStreamSession;
exports.readStreamSession = addon.readStreamSession;
exports.closeStreamSession = addon.closeStreamSession;
exports.getCANDetailStatus = addon.getCANDetailStatus;
exports.sendCANMessage = addon.sendCANMessage;
exports.sendHALMessage = addon.sendHALMessage;
exports.intializeNotifier = addon.intializeNotifier;
exports.waitForNotifierAlarm = util_1.promisify(addon.waitForNotifierAlarm);
exports.stopNotifier = addon.stopNotifier;
exports.writeDfuToBin = util_1.promisify(addon.writeDfuToBin);
exports.openHALStreamSession = addon.openHALStreamSession;
exports.readHALStreamSession = addon.readHALStreamSession;
exports.closeHALStreamSession = addon.closeHALStreamSession;
exports.setThreadPriority = addon.setThreadPriority;
exports.setSparkMaxHeartbeatData = addon.setSparkMaxHeartbeatData;
