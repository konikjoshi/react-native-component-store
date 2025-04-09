package com.componentstore

import com.facebook.react.bridge.Arguments
import com.facebook.react.bridge.WritableMap
import com.facebook.react.modules.core.DeviceEventManagerModule
import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.module.annotations.ReactModule

@ReactModule(name = ComponentStoreModule.NAME)
class ComponentStoreModule(reactContext: ReactApplicationContext) :
  NativeComponentStoreSpec(reactContext) {

  override fun getName(): String {
    return NAME
  }

 override fun Button() {
    val event: WritableMap = Arguments.createMap()
    event.putString("message", "Button pressed from native module")
    reactApplicationContext
        .getJSModule(DeviceEventManagerModule.RCTDeviceEventEmitter::class.java)
        .emit("onNativeButtonPress", event)
}

override fun Text() {
    val event: WritableMap = Arguments.createMap()
    event.putString("message", "Text component triggered from native module")
    reactApplicationContext
        .getJSModule(DeviceEventManagerModule.RCTDeviceEventEmitter::class.java)
        .emit("onNativeTextPress", event)
}

override fun Divider() {
    val event: WritableMap = Arguments.createMap()
    event.putString("message", "Divider component triggered from native module")
    reactApplicationContext
        .getJSModule(DeviceEventManagerModule.RCTDeviceEventEmitter::class.java)
        .emit("onNativeDividerTrigger", event)
}

override fun Image() {
    val event: WritableMap = Arguments.createMap()
    event.putString("message", "Image component triggered from native module")
    reactApplicationContext
        .getJSModule(DeviceEventManagerModule.RCTDeviceEventEmitter::class.java)
        .emit("onNativeImageTrigger", event)
}

  // Example method
  override fun multiply(a: Double, b: Double): Double {
    return a * b
  }

  companion object {
    const val NAME = "ComponentStore"
  }
}
