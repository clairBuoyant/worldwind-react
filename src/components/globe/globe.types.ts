export interface IGlobeProps {
    /**
     * Background color CSS string
     */
    backgroundColor?: string;

    /**
     * The id of an existing canvas to attach the Globe
     */
    canvasId?: string;

    /**
     * An array of layer type strings, WorldWind.Layer objects, and/or layer
     * configuration objects, e.g., {layer: String|WorldWind.Layer, options: Object}
     */
    layers?: any[];

    /**
     * Latitude +/-90 degrees
     */
    latitude?: number;

    /**
     * Longitude +/-180 degrees
     */
    longitude?: number;

    /**
     * Altitude in meters above sea level (MSL)
     */
    altitude?: number;

    /**
     * A projection identifier string
     */
    projection?: string;

    /**
     * A callback function to push state up to the parent
     */
    onUpdate?: Function;

    /**
     * Set Globe projection to 2D.
     */
    is2D?: boolean;
}
