import React from 'react';
import GaugeKwh from "../components/GaugeKwh";
import DailyProdChart from '../components/DailyProdChart';

export default function Dashboard() {
    const kwh = 700;
    const maxKwh = 1000;
    const economie = 85;
    const chartData = [2, 5.5, 8, 10.5, 12]
    const startingDate = undefined;
    return (
        <div class="w-screen h-screen text-center text-xl xl:text-2xl mt-8">
            <div class="w-auto h-auto mx-16 mb-8 p-2 border border-black">
                Votre économie d'énergie
                <GaugeKwh 
                    value={kwh}
                    max={maxKwh}
                />
            </div>

            <div class="w-auto h-auto mx-16 mb-8 p-2 border border-black">
                Vous avez économisé <b>{economie}€</b> ce mois-ci !
            </div>
            
            <div class="w-auto h-auto mx-16 mb-8 p-2 border border-black">
                Votre production d'énergie
                <DailyProdChart
                    series={chartData}
                    startingDate={startingDate}
                />
            </div>
            
        </div>
    );
}