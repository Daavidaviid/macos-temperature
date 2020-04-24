#import "AppDelegate.h"

#import <React/RCTBridge.h>
#import <React/RCTBundleURLProvider.h>
#import <React/RCTLog.h>

#define WINDOW_WIDTH 400
#define WINDOW_HEIGHT 500

@interface AppDelegate () <RCTBridgeDelegate>

@property NSStatusItem * statusItem;

@end

@implementation AppDelegate

- (void)awakeFromNib {
  [super awakeFromNib];

  _bridge = [[RCTBridge alloc] initWithDelegate:self launchOptions:nil];
}

- (void)applicationDidFinishLaunching:(NSNotification *)aNotification {
  // Insert code here to initialize your application
  
  // Window configuration
  NSWindow * mainWindow = [[NSApplication sharedApplication] mainWindow];
  [mainWindow setContentSize:NSSizeFromCGSize(CGSizeMake(WINDOW_WIDTH, WINDOW_HEIGHT))];
  [mainWindow setMinSize:NSSizeFromCGSize(CGSizeMake(WINDOW_WIDTH, WINDOW_HEIGHT))];
  [mainWindow setPreservesContentDuringLiveResize:true];
  [mainWindow setShowsToolbarButton:false];
  [mainWindow center];
  
  // Adding tab bar icon
  // https://caseybrant.com/2019/02/20/macos-menu-bar-extras.html
  NSStatusBar * statusBar = NSStatusBar.systemStatusBar;
  self.statusItem = [statusBar statusItemWithLength:NSSquareStatusItemLength];
  [self.statusItem.button setTitle:@"🥵"];
  [self.statusItem.button setToolTip:@"Temperature Manager"];
  
  NSMenu * statusBarMenu = [[NSMenu alloc] init];
  [statusBarMenu setTitle:@"Menu"];
  [statusBarMenu insertItemWithTitle:@"Dummy 1" action:@selector(onItemPressed) keyEquivalent:@"" atIndex:0];
  [statusBarMenu insertItemWithTitle:@"Dummy 2" action:@selector(onItemPressed) keyEquivalent:@"" atIndex:1];
  [statusBarMenu insertItemWithTitle:@"Dummy 3" action:@selector(onItemPressed) keyEquivalent:@"" atIndex:2];
  
  [self.statusItem setMenu:statusBarMenu];
  
}

- (void)applicationWillTerminate:(NSNotification *)aNotification {
  // Insert code here to tear down your application
}

/* Callbacks */
-(void)onItemPressed
{
  RCTLog(@"Pressed on an item");
  NSWindow * mainWindow = [[NSApplication sharedApplication] mainWindow];
  [mainWindow center];
}

#pragma mark - RCTBridgeDelegate Methods

- (NSURL *)sourceURLForBridge:(__unused RCTBridge *)bridge {
  return [[RCTBundleURLProvider sharedSettings] jsBundleURLForBundleRoot:@"index" fallbackResource:@"main"]; // .jsbundle;
}

@end
