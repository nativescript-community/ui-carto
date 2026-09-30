import { Http } from '@nativescript/core';

const DEM = 'https://tiles.mapterhorn.com/{z}/{x}/{y}.webp';

/** The ground under a viewpoint, off the terrarium DEM tile itself: the summit names rank by the eye's altitude. */
export async function groundElevation(lat: number, lon: number): Promise<number> {
    try {
        const tiles = 2 ** 12;
        const x = ((lon + 180) / 360) * tiles;
        const y = ((1 - Math.log(Math.tan((lat * Math.PI) / 180) + 1 / Math.cos((lat * Math.PI) / 180)) / Math.PI) / 2) * tiles;
        const image = await Http.getImage(DEM.replace('{z}', '12').replace('{x}', String(Math.floor(x))).replace('{y}', String(Math.floor(y))));
        const [r, g, b] = pixel(image, x % 1, y % 1);
        return r * 256 + g + b / 256 - 32768;
    } catch (error) {
        return 0;
    }
}

/** One texel's RGB, at a fraction of the image: a Bitmap on Android, a CGImage drawn into 1x1 on iOS. */
function pixel(image: { android: any; ios: any }, u: number, v: number): number[] {
    if (image.android) {
        const bitmap = image.android;
        const value = bitmap.getPixel(Math.floor(u * bitmap.getWidth()), Math.floor(v * bitmap.getHeight()));
        return [(value >> 16) & 0xff, (value >> 8) & 0xff, value & 0xff];
    }
    const native: any = globalThis;
    const cgImage = image.ios.CGImage;
    const width = native.CGImageGetWidth(cgImage);
    const height = native.CGImageGetHeight(cgImage);
    const buffer = new Uint8Array(4);
    const space = native.CGColorSpaceCreateDeviceRGB();
    const context = native.CGBitmapContextCreate(buffer, 1, 1, 8, 4, space, native.CGImageAlphaInfo.kCGImageAlphaNoneSkipLast);
    // One pixel of context, with the image shifted so the wanted texel lands on it.
    native.CGContextDrawImage(context, native.CGRectMake(-Math.floor(u * width), -(height - 1 - Math.floor(v * height)), width, height), cgImage);
    return [buffer[0], buffer[1], buffer[2]];
}
