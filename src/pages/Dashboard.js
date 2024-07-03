import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import GaugeKwh from "../components/GaugeKwh";
import DailyProdChart from '../components/DailyProdChart';
import NavbarPhone from '../components/NavbarPhone';
import NavbarBlurred from '../components/NavbarBlurred';
import dayjs from 'dayjs';

function SingleDashboard(cont) {
    const kwh = cont.data.kwh;
    const maxKwh = cont.data.maxKwh;
    const economie = cont.data.economie;
    const chartData = cont.data.chartData;
    const startingDate = cont.data.chartStart;
    return (
        <div class="w-screen h-screen text-center text-2xl mt-8 mb-32 md:mb-0">
            <div class="w-auto h-auto md:mx-16 mx-6 mb-8 p-2 border border-black">
                Votre économie d'énergie
                <GaugeKwh
                    value={kwh}
                    max={maxKwh}
                />
            </div>

            <div class="w-auto h-auto md:mx-16 mx-6 mb-8 p-2 border border-black">
                Vous avez économisé <b>{economie}€</b> ce mois-ci !
            </div>

            <div class="w-auto h-auto md:mx-16 mx-6 mb-8 p-2 border border-black">
                Votre production d'énergie
                <DailyProdChart
                    series={chartData}
                    startingDate={startingDate}
                />
            </div>
        </div>
    );
}

export default function Dashboard() {
    const past = {
        kwh: 300,
        maxKwh: 1000,
        economie: 85,
        chartData: [0.2, 1, 2, 2.4, 3.2, 4.5, 5.1],
        chartStart: dayjs(new Date()).subtract(5, 'day').toDate(),
    };
    const present = {
        kwh: 500,
        maxKwh: 1000,
        economie: 85,
        chartData: [2, 5.5, 8, 10.5, 12],
        chartStart: undefined,
    };
    const future = {
        kwh: 700,
        maxKwh: 1000,
        economie: 85,
        chartData: [4, 8, 11, 15, 18.5],
        chartStart: undefined,
    };
    return (
        <>
        <Swiper slidesPerView={1} initialSlide={1}>
            <SwiperSlide>
                <SingleDashboard
                    data={past}
                />
            </SwiperSlide>
            <SwiperSlide>
                <SingleDashboard
                    data={present}
                />
            </SwiperSlide>
            <SwiperSlide>
                <SingleDashboard
                    data={future}
                />
            </SwiperSlide>
        </Swiper>
        <div>
            {/* Navbar for phone (small screens) */}
            <div className="block md:hidden">
                <NavbarPhone />
            </div>

            {/* Navbar for larger screens */}
            <div className="hidden md:block">
                <NavbarBlurred />
            </div>
        </div>
        </>
    );
}