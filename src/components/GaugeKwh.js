import * as React from 'react';
import {
    GaugeContainer,
    GaugeValueArc,
    GaugeReferenceArc,
    useGaugeState,
} from '@mui/x-charts/Gauge';

function GaugePointer() {
    const { valueAngle, outerRadius, cx, cy } = useGaugeState();

    if (valueAngle === null) {
        // No value to display
        return null;
    }

    const target = {
        x: cx + outerRadius * Math.sin(valueAngle),
        y: cy - outerRadius * Math.cos(valueAngle),
    };
    return (
        <g>
            <circle cx={cx} cy={cy} r={5} fill="red" />
            <path
                d={`M ${cx} ${cy} L ${target.x} ${target.y}`}
                stroke="red"
                strokeWidth={3}
            />
        </g>
    );
}

function Gauge(data) {
    const value = data.value;
    const max = data.maxValue;
    return (
        <GaugeContainer
            startAngle={-90}
            endAngle={90}
            valueMin={0}
            valueMax={max}
            value={value}
        >
            <GaugeReferenceArc />
            <GaugeValueArc />
            <GaugePointer />
        </GaugeContainer>
    );
}

function GaugeDescription(data) {
    const value = data.value;
    return (
        <div class="text-center">
            {value} KW/h
        </div>
    );
}

export default function GaugeKwh(data) {
    const value = data.value || 0;
    const max = data.maxValue || 100;
    return (
        <div class="content-center h-1/2 w-auto mx-16">
            <Gauge
                value={value}
                max={max}
            />
            <GaugeDescription
                value={value}
            />
        </div>
    );
}