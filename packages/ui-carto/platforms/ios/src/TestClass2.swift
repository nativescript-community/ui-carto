
import Foundation

@objc(TestClass3)
@objcMembers
class TestClass3: NSObject {
    func test() -> String {
        return "test"
    }

    func test2() -> String {
        return self.test()
    }
}