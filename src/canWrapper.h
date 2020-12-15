#ifndef CAN_LIB
#define CAN_LIB
#include <napi.h>

void getDevices(const Napi::CallbackInfo& info);
Napi::Number registerDeviceToHAL(const Napi::CallbackInfo& info);
void unregisterDeviceFromHAL(const Napi::CallbackInfo& info);
Napi::Object receiveMessage(const Napi::CallbackInfo& info);
Napi::Object receiveHalMessage(const Napi::CallbackInfo& info);
Napi::Number openStreamSession(const Napi::CallbackInfo& info);
Napi::Array readStreamSession(const Napi::CallbackInfo& info);
Napi::Number closeStreamSession(const Napi::CallbackInfo& info);
Napi::Object getCANDetailStatus(const Napi::CallbackInfo& info);
Napi::Number sendCANMessage(const Napi::CallbackInfo& info);
Napi::Number sendCANMessageThroughHal(const Napi::CallbackInfo& info);
Napi::Number sendHALMessage(const Napi::CallbackInfo& info);
void intializeNotifier(const Napi::CallbackInfo& info);
void waitForNotifierAlarm(const Napi::CallbackInfo& info);
void stopNotifier(const Napi::CallbackInfo& info);
void writeDfuToBin(const Napi::CallbackInfo& info);
Napi::Number openHALStreamSession(const Napi::CallbackInfo& info);
Napi::Array readHALStreamSession(const Napi::CallbackInfo& info);
void closeHALStreamSession(const Napi::CallbackInfo& info);
void setThreadPriority(const Napi::CallbackInfo& info);
void setSparkMaxHeartbeatData(const Napi::CallbackInfo& info);
#endif