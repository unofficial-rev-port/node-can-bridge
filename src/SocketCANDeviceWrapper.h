#include <rev/Drivers/SocketCAN/SocketCANDevice.h>
#include <napi.h>
#include <typeinfo>
#include <iostream>

class NapiWinUSBDevice : public Napi::ObjectWrap<NapiSocketCANDevice> {
  public:
    static Napi::Object Init(Napi::Env env, Napi::Object exports);
    NapiSocketCANDevice(const Napi::CallbackInfo& info);
    Napi::Value GetName(const Napi::CallbackInfo& info);
    void SetDevice(std::unique_ptr<rev::usb::CANDevice>);

  private:
    std::unique_ptr<rev::usb::CANDevice> device;
};

Napi::Object NapiSocketCANDevice::Init(Napi::Env env, Napi::Object exports) {
    Napi::Function func = DefineClass(env, "NapiSocketCANDevice", {
        InstanceMethod("GetName", &NapiSocketCANDevice::GetName)
    });

    Napi::FunctionReference* constructor = new Napi::FunctionReference();
    *constructor = Napi::Persistent(func);
    exports.Set("NapiSocketCANDevice", func);

    return exports;
}

NapiSocketCANDevice::NapiSocketCANDevice(const Napi::CallbackInfo& info) : Napi::ObjectWrap<NapiSocketCANDevice>(info) {
    Napi::Env env = info.Env();
    std::cout << "Creating device " << std::endl;
}

Napi::Value NapiSocketCANDevice::GetName(const Napi::CallbackInfo& info){
    Napi::Env env = info.Env();
    return Napi::String::New(env, this->device->GetName());
}
