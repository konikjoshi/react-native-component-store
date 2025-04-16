#import "ComponentStore.h"
#import <React/RCTLog.h>

@implementation ComponentStore

RCT_EXPORT_MODULE();

- (NSArray<NSString *> *)supportedEvents {
  return @[
    @"onNativeButtonPress",
    @"onNativeTextPress",
    @"onNativeDividerTrigger",
    @"onNativeImageTrigger"
  ];
}

RCT_EXPORT_METHOD(Button) {
  [self sendEventWithName:@"onNativeButtonPress" body:@{@"message": @"Button pressed from native module"}];
}

RCT_EXPORT_METHOD(Text) {
  [self sendEventWithName:@"onNativeTextPress" body:@{@"message": @"Text component triggered from native module"}];
}

RCT_EXPORT_METHOD(Divider) {
  [self sendEventWithName:@"onNativeDividerTrigger" body:@{@"message": @"Divider component triggered from native module"}];
}

RCT_EXPORT_METHOD(Image) {
  [self sendEventWithName:@"onNativeImageTrigger" body:@{@"message": @"Image component triggered from native module"}];
}

@end
