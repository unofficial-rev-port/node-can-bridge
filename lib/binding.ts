import {promisify} from "util";
import * as path from "path";

export interface CanMessage {
    data: number[];
    messageID: number;
    timeStamp: number;
}

export interface CanDeviceInfo {
    descriptor: string;
    name: string;
    driverName: string;
    available: boolean;
}

export interface CanDeviceStatus {
    busOff: number;
    txFull: number;
    receiveErr: number;
    transmitErr: number;
    percentBusUtilization: number;
    lastErrorTime: number;
}

export enum ThreadPriority {
    Low,
    BelowNormal,
    Normal,
    AboveNormal,
    High,
    PriorityMax,
    PriorityError
}

export class CanBridge {
    getDevices: () => Promise<CanDeviceInfo[]>;
    registerDeviceToHAL: (descriptor:string, messageId:Number, messageMask:number) => number;
    unregisterDeviceFromHAL: (descriptor:string) => Promise<number>;
    receiveMessage: (descriptor:string, messageId:number, messageMask:number) => CanMessage;
    openStreamSession: (descriptor:string, messageId:number, messageMask:number, maxSize:number) => number;
    readStreamSession: (descriptor:string, sessionHandle:number, messagesToRead:number) => CanMessage[];
    closeStreamSession: (descriptor:string, sessionHandle:number) => number;
    getCANDetailStatus: (descriptor:string) => CanDeviceStatus;
    sendCANMessage: (descriptor:string, messageId: number, messageData: number[], repeatPeriod: number) => number;
    sendHALMessage: (messageId: number, messageData: number[], repeatPeriod: number) => number;
    initializeNotifier: () => void;
    waitForNotifierAlarm: (time:number) => Promise<number>;
    stopNotifier: () => void;
    writeDfuToBin: (dfuFileName:string, binFileName:string) => Promise<number>;
    openHALStreamSession: (messageId: number, messageMask:number, numMessages:number) => number;
    readHALStreamSession: (streamHandle:number, numMessages:number) => CanMessage[];
    closeHALStreamSession: (streamHandle:number) => void;
    setThreadPriority: (descriptor: string, priority: ThreadPriority) => void;
    setSparkMaxHeartbeatData: (descriptor: string, heartbeatData: number[]) => void;
    startRevCommonHeartbeat: (descriptor: string) => void;
    stopHeartbeats: (descriptor: string, sendDisabledHeartbeatsFirst: boolean) => void;
    ackHeartbeats: () => void;

    constructor() {
        const addon = require('node-gyp-build')(path.join(__dirname, '..'));

        this.getDevices = promisify(addon.getDevices);
        this.registerDeviceToHAL = addon.registerDeviceToHAL;
        this.unregisterDeviceFromHAL = promisify(addon.unregisterDeviceFromHAL);
        this.receiveMessage = addon.receiveMessage;
        this.openStreamSession = addon.openStreamSession;
        this.readStreamSession = addon.readStreamSession;
        this.closeStreamSession = addon.closeStreamSession;
        this.getCANDetailStatus = addon.getCANDetailStatus;
        this.sendCANMessage = addon.sendCANMessage;
        this.sendHALMessage = addon.sendHALMessage;
        this.initializeNotifier = addon.initializeNotifier;
        this.waitForNotifierAlarm = promisify(addon.waitForNotifierAlarm);
        this.stopNotifier = addon.stopNotifier;
        this.writeDfuToBin = promisify(addon.writeDfuToBin);
        this.openHALStreamSession = addon.openHALStreamSession;
        this.readHALStreamSession = addon.readHALStreamSession;
        this.closeHALStreamSession = addon.closeHALStreamSession;
        this.setThreadPriority = addon.setThreadPriority;
        this.setSparkMaxHeartbeatData = addon.setSparkMaxHeartbeatData;
        this.startRevCommonHeartbeat = addon.startRevCommonHeartbeat;
        this.ackHeartbeats = addon.ackHeartbeats;
        this.stopHeartbeats = addon.stopHeartbeats;
    }
}






















