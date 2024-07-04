import * as React from 'react';
import { styled } from '@mui/system';
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
            <circle cx={cx} cy={cy} r={5} fill="#FFA048" />
            <path
                d={`M ${cx} ${cy} L ${target.x} ${target.y}`}
                stroke="#FFA048"
                strokeWidth={3}
            />
        </g>
    );
}

const CustomGaugeValueArc = styled(GaugeValueArc)({
    fill: '#59C19B', 
});

function Gauge(data) {
    const value = data.value;
    const max = data.max;
    return (
        <GaugeContainer
            startAngle={-90}
            endAngle={90}
            valueMin={0}
            valueMax={max}
            value={value}
            height={300}
            
        >
            <GaugeReferenceArc />
            <CustomGaugeValueArc />
            <GaugePointer />
        </GaugeContainer>
    );
}

function GaugeDescription(data) {
    const value = data.value;
    return (
        <div class="text-center">
            <b>{value}</b> KW/h
        </div>
    );
}

export default function GaugeKwh(data) {
    const value = data.value || 0;
    const max = data.max || 100;
    return (
        <div class="content-center w-auto h-full mx-4">
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