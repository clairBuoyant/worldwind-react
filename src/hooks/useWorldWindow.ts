import { WorldWindow } from '@nasaworldwind/worldwind';
import { useRef } from 'react';

export const useWorldWindow = () => {
    const worldWindowRef = useRef<WorldWindow | null>(null);

    const setWorldWindowRef = (canvasId: string) => {
        if (!worldWindowRef.current) worldWindowRef.current = new WorldWindow(canvasId);
    };

    return [worldWindowRef, setWorldWindowRef] as const;
};
