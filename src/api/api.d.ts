declare module '@nasaworldwind/worldwind' {
    export class AtmosphereLayer extends Layer {}

    export class BingAerialWithLabelsLayer extends Layer {}

    export class BMNGLayer extends Layer {}

    export class BMNGLandsatLayer extends Layer {}

    export class CompassLayer extends Layer {}

    export class CoordinatesDisplayLayer extends Layer {
        constructor(wwd: any);
    }

    export class OpenStreetMapImageLayer extends Layer {
        constructor(displayName?: string);
    }

    export class ViewControlsLayer extends Layer {
        constructor(wwd: any);
    }

    export class Layer {
        enabled: boolean;
    }

    export class WmsLayer {}

    export class WorldWind {}

    export class WorldWindow {
        globe: any;

        constructor(canvasId: string);

        addLayer(layer: any): any;

        redraw(): void;
    }

    export class Globe2D {}

    export class Vec3 {
        constructor(...args: any);
    }
}
