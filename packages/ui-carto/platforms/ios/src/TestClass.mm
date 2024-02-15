#include "TestClass.h"

@implementation TestClass
-(NSString*) test{
    return @"test";
}
-(NSString*) test2 {
    return [self test];
}
@end