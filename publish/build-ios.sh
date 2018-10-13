set -e
set -o pipefail

CURRENT_DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"

SOURCE_NAME="CartoAdditions"
IOS_SOURCE_DIR="$CURRENT_DIR/../src-native/ios"

PROJECT_NAME="$SOURCE_NAME.xcworkspace"
TARGET_NAME="$SOURCE_NAME"
FRAMEWORK_NAME="$SOURCE_NAME"

BUILD_DIR="$IOS_SOURCE_DIR/build/intermediates/${FRAMEWORK_NAME}"
BUILD_FOR_SIMULATOR_DIR="$BUILD_DIR/Release-iphonesimulator"
BUILD_OUTPUT_DIR="$IOS_SOURCE_DIR/build/outputs"

PLUGIN_TARGET_DIR="$CURRENT_DIR/../plugin/platforms"
PLUGIN_TARGET_SUBDIR="$PLUGIN_TARGET_DIR/ios"

CARTO_FRAMEWORK="$IOS_SOURCE_DIR/Pods/CartoMobileSDK/CartoMobileSDK.framework"

cd $IOS_SOURCE_DIR

if [ -d "$BUILD_DIR" ]; then
    rm -rf "$BUILD_DIR"
fi

echo "install pod" 
pod install
cp -r $IOS_SOURCE_DIR/FrameworkFix/* $CARTO_FRAMEWORK

echo "Build for iphonesimulator $PROJECT_NAME"
xcodebuild -workspace $PROJECT_NAME -scheme $TARGET_NAME \
    -configuration Release \
    -sdk iphonesimulator \
    GCC_PREPROCESSOR_DEFINITIONS='$GCC_PREPROCESSOR_DEFINITIONS ' \
    CONFIGURATION_BUILD_DIR=$BUILD_FOR_SIMULATOR_DIR \
    clean build -quiet

echo "Build for iphoneos $PROJECT_NAME"
xcodebuild -workspace $PROJECT_NAME -scheme $TARGET_NAME \
    -configuration Release \
    -sdk iphoneos \
    GCC_PREPROCESSOR_DEFINITIONS='$GCC_PREPROCESSOR_DEFINITIONS ' \
    clean build archive -quiet

DEVICE_DIR="$(xcodebuild -workspace $PROJECT_NAME -scheme $TARGET_NAME -configuration Release \
    -showBuildSettings | grep -v PODS_CONFIGURATION_BUILD_DIR | grep CONFIGURATION_BUILD_DIR | sed 's/.*= //')"
echo "DEVICE_DIR \"$DEVICE_DIR\""
echo "BUILD_OUTPUT_DIR \"$BUILD_OUTPUT_DIR\""

if [ -d "$BUILD_OUTPUT_DIR/$FRAMEWORK_NAME.framework" ]; then
    rm -rf "$BUILD_OUTPUT_DIR/$FRAMEWORK_NAME.framework"
fi

mkdir -p "$BUILD_OUTPUT_DIR/$FRAMEWORK_NAME.framework"


cp -R "$DEVICE_DIR/$FRAMEWORK_NAME.framework" "$BUILD_OUTPUT_DIR"

echo "Build fat framework"
xcrun -sdk iphoneos lipo -create \
    $BUILD_FOR_SIMULATOR_DIR/$FRAMEWORK_NAME.framework/$FRAMEWORK_NAME \
    $DEVICE_DIR/$FRAMEWORK_NAME.framework/$FRAMEWORK_NAME \
-o "$BUILD_OUTPUT_DIR/$FRAMEWORK_NAME.framework/$FRAMEWORK_NAME"

rm -rf $BUILD_DIR

echo "$FRAMEWORK_NAME.framework was built in $BUILD_OUTPUT_DIR"

if [ ! -d $PLUGIN_TARGET_DIR ]; then
    mkdir $PLUGIN_TARGET_DIR
fi

if [ ! -d $PLUGIN_TARGET_SUBDIR ]; then
    mkdir $PLUGIN_TARGET_SUBDIR
fi

cp -R "$CARTO_FRAMEWORK" $PLUGIN_TARGET_SUBDIR
cp -R "$BUILD_OUTPUT_DIR/$FRAMEWORK_NAME.framework" $PLUGIN_TARGET_SUBDIR

echo "iOS Framework was copied to $PLUGIN_TARGET_SUBDIR"

cd $CURRENT_DIR
