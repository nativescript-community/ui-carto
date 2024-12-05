#!/usr/bin/env bash

for i in "$@"; do
  case $i in
    -p|--platform)
      PLATFORM="$2"
      shift # past argument
      shift # past value
      ;;
    -*|--*)
      echo "Unknown option $1"
      exit 1
      ;;
    *)
      ;;
  esac
done

echo "PLATFORM  = ${PLATFORM}"

if [[ -z "${CARTO_SDK_VERSION}" ]]; then
  CARTO_SDK_VERSION="5.0.0-rc.5"
else
  CARTO_SDK_VERSION="${CARTO_SDK_VERSION}"
fi


if [ "$PLATFORM" = "android" ]; then
  wget https://github.com/Akylas/mobile-sdk/releases/download/v$CARTO_SDK_VERSION/carto-mobile-sdk-android-$CARTO_SDK_VERSION.aar
  mv carto-mobile-sdk-android-$CARTO_SDK_VERSION.aar ./packages/ui-carto/platforms/android
else
  wget https://github.com/Akylas/mobile-sdk/releases/download/v$CARTO_SDK_VERSION/carto-mobile-sdk-ios-$CARTO_SDK_VERSION.zip
  unzip -o -d ./packages/ui-carto/platforms/ios carto-mobile-sdk-ios-$CARTO_SDK_VERSION.zip
fi
