import WorldWind from '@nasaworldwind/worldwind';
import { useEffect, useRef, useState } from 'react';

import { useWorldWindow } from '../../hooks/useWorldWindow';
import { DEFAULT_BACKGROUND_COLOR } from './globe.constants';
import { IGlobeProps } from './globe.types';

const defaultGlobeProps = {
    backgroundColor: DEFAULT_BACKGROUND_COLOR,
    canvasId: 'worldwind-globe',
    is2D: false,
};

export const Globe = ({
    backgroundColor = defaultGlobeProps.backgroundColor,
    canvasId: defaultCanvasIdOrFromUser = defaultGlobeProps.canvasId,
    layers,
    is2D = defaultGlobeProps.is2D,
}: IGlobeProps) => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const [wwdRef, setWwdRef] = useWorldWindow();

    const style = {
        backgroundColor,
        height: '100%',
        width: '100%',
    };
    const [canvasId] = useState(defaultCanvasIdOrFromUser);

    // const [] = useState(defaultBaseUrl); // baseUrl
    // const [] = useState(1); // nextLayerId
    // const [] = useState(new Map()); // categoryTimestamps
    // const [] = useState(null); // roundGlobe
    // const [] = useState(null); // flatGlobe

    useEffect(() => {
        // TODO: test re-render behavior w/ and w/o default
        setWwdRef(canvasId);
    }, [canvasId]);

    useEffect(() => {
        if (wwdRef.current) {
            const layers = [
                { layer: new WorldWind.BMNGLayer(), enabled: true },
                { layer: new WorldWind.BMNGLandsatLayer(), enabled: false },
                { layer: new WorldWind.OpenStreetMapImageLayer(), enabled: true },
                { layer: new WorldWind.BingAerialWithLabelsLayer(), enabled: true },
                { layer: new WorldWind.AtmosphereLayer(), enabled: true },
                { layer: new WorldWind.CompassLayer(), enabled: true },
                { layer: new WorldWind.CoordinatesDisplayLayer(wwdRef.current), enabled: true },
                { layer: new WorldWind.ViewControlsLayer(wwdRef.current), enabled: true },
            ];

            for (let i = 0; i < layers.length; i++) {
                layers[i].layer.enabled = layers[i].enabled;
                wwdRef.current.addLayer(layers[i].layer);
            }
            if (is2D) wwdRef.current.globe = new WorldWind.Globe2D();
            wwdRef.current.redraw();
        }
    }, [is2D, wwdRef]);

    return (
        <canvas id={canvasId} ref={canvasRef} style={style}>
            Your browser does not support HTML5 Canvas.
        </canvas>
    );
};
