// RCTCustomWebViewManager.m
#import "RCTCustomWebViewManager.h"

@interface RCTCustomWebViewManager () <RCTWebViewDelegate>

@end

@implementation RCTCustomWebViewManager { }
RCT_EXPORT_MODULE()
RCT_REMAP_VIEW_PROPERTY(keyboardDisplayRequiresUserAction, _webView.keyboardDisplayRequiresUserAction, BOOL)

- (UIView *)view
{
  RCTWebView *webView = [RCTWebView new];
  webView.delegate = self;
  return webView;
}

@end
