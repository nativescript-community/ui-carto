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

if [[ -z "${MASSIF_SDK_VERSION}" ]]; then
  MASSIF_SDK_VERSION="6.0.0"
else
  MASSIF_SDK_VERSION="${MASSIF_SDK_VERSION}"
fi


if [ "$PLATFORM" = "android" ]; then
  wget https://github.com/massif-maps/MassifMaps/releases/download/v$MASSIF_SDK_VERSION/massif-android-$MASSIF_SDK_VERSION.aar
  mv massif-android-$MASSIF_SDK_VERSION.aar ./packages/ui-massifmaps/platforms/android
else
  wget https://github.com/massif-maps/MassifMaps/releases/download/v$MASSIF_SDK_VERSION/massif-ios-$MASSIF_SDK_VERSION.zip
  unzip -o -d ./packages/ui-massifmaps/platforms/ios massif-ios-$MASSIF_SDK_VERSION.zip
fi
