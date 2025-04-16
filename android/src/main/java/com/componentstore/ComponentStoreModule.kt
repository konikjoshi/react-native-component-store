package com.componentstore

import com.facebook.react.bridge.Arguments
import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.bridge.ReactContextBaseJavaModule
import com.facebook.react.bridge.ReactMethod
import com.facebook.react.bridge.WritableMap
import com.facebook.react.modules.core.DeviceEventManagerModule

class ComponentStoreModule(reactContext: ReactApplicationContext) :
  ReactContextBaseJavaModule(reactContext) {

  override fun getName(): String {
    return NAME
  }

  @ReactMethod
  fun Button() {
    val event: WritableMap = Arguments.createMap()
    event.putString("message", "Button pressed from native module")
    reactApplicationContext
      .getJSModule(DeviceEventManagerModule.RCTDeviceEventEmitter::class.java)
      .emit("onNativeButtonPress", event)
  }

  @ReactMethod
  fun Text() {
    val event: WritableMap = Arguments.createMap()
    event.putString("message", "Text component triggered from native module")
    reactApplicationContext
      .getJSModule(DeviceEventManagerModule.RCTDeviceEventEmitter::class.java)
      .emit("onNativeTextPress", event)
  }

  @ReactMethod
  fun Divider() {
    val event: WritableMap = Arguments.createMap()
    event.putString("message", "Divider component triggered from native module")
    reactApplicationContext
      .getJSModule(DeviceEventManagerModule.RCTDeviceEventEmitter::class.java)
      .emit("onNativeDividerTrigger", event)
  }

  @ReactMethod
  fun Image() {
    val event: WritableMap = Arguments.createMap()
    event.putString("message", "Image component triggered from native module")
    reactApplicationContext
      .getJSModule(DeviceEventManagerModule.RCTDeviceEventEmitter::class.java)
      .emit("onNativeImageTrigger", event)
  }

  companion object {
    const val NAME = "ComponentStore"
  }
}
