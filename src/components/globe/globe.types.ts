import type { Layer } from '@nasaworldwind/worldwind';

export interface ILayer {
    /**
     * Indicates whether layer is rendered.
     */
    enabled: boolean;

    /**
     * Layer configuration object.
     */
    layer: string | Layer;
}

export interface IGlobeProps {
    /**
     * Altitude in meters above sea level (MSL)
     */
    altitude?: number;

    /**
     * Background color CSS string
     */
    backgroundColor?: string;

    /**
     * The id of an existing canvas to attach the Globe
     */
    canvasId?: string;

    /**
     * Set Globe projection to 2D.
     */
    is2D?: boolean;

    /**
     * Latitude +/-90 degrees
     */
    latitude?: number;

    /**
     * An array of layer type strings, WorldWind.Layer objects, and/or layer
     * configuration objects, e.g., {layer: String|WorldWind.Layer, options: Object}
     */
    layers?: ILayer[];

    /**
     * Longitude +/-180 degrees
     */
    longitude?: number;

    /**
     * A callback function to push state up to the parent
     */
    onUpdate?: Function;

    /**
     * A projection identifier string
     */
    projection?: string;
}
