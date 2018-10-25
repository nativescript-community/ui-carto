#!/bin/bash
set -e
set -o pipefail

CURRENT_DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"
SOURCE_DIR="$CURRENT_DIR/../src"
PLUGIN_DIR="$CURRENT_DIR/plugin"
PACK_DIR="$CURRENT_DIR/package"
ROOT_DIR="$CURRENT_DIR/.."
PUBLISH=--publish

# pass native android or ios as arguments to skip native building
ARGS={$1""}

install(){
    cd $ROOT_DIR
    # npm i
}

pack() {
    echo 'package...'
    # node_modules/.bin/rimraf "$TO_SOURCE_DIR"
    # node_modules/.bin/rimraf "$PACK_DIR"

    cd $ROOT_DIR
    echo 'Building /src...'
    # node_modules/.bin/tsc

    # if [[ $ARGS != *"native"* ]]; then
        
    #     if [ $ARGS != *"android"* ]; then
    #         # compile native android
    #         echo 'Building native android...'
    #         ./build-android.sh
    #     else
    #         echo 'Building native android was skipped...'
    #     fi

    #     if [ $ARGS != *"ios"* ]; then
    #         # compile native ios
    #         echo 'Building native ios...'
    #         ./build-ios.sh
    #     else
    #         echo 'Building native ios was skipped...'
    #     fi
    # else
    #     echo "Native build was skipped, using existing native binaries..."
    # fi

    # copy src
    echo 'Copying src typings'
    cd $SOURCE_DIR
    echo ../node_modules/.bin/cpy '**/*.d.ts' '../plugin' --parents
    ../node_modules/.bin/cpy '**/*.d.ts' '../plugin' --parents
    # echo node_modules/.bin/cpy "$SOURCE_DIR/**/*.d.ts" "$PLUGIN_DIR"
    # node_modules/.bin/ncp "$SOURCE_DIR/*.d.ts" "$PLUGIN_DIR"

    # copy LICENSE to src
    echo 'Copying README & LICENSE to /src...'
    # node_modules/.bin/ncp "$ROOT_DIR"/LICENSE.md "$PLUGIN_DIR"/LICENSE.md
    # node_modules/.bin/ncp "$ROOT_DIR"/README.md "$PLUGIN_DIR"/README.md


    echo 'Creating package...'
    # create package dir
    mkdir "$PACK_DIR"

    # create the package
    cd "$PACK_DIR"
    npm pack "$PLUGIN_DIR"
    echo "Package created in $PACK_DIR"

    # delete source directory used to create the package
    cd $CURRENT_DIR
    # node_modules/.bin/rimraf "$TO_SOURCE_DIR"
}

install && pack
