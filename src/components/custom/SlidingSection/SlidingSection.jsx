'use client'
import { AnimatePresence, motion } from 'framer-motion';
import React, { useState } from 'react';
import { useLayoutEffect, useRef } from 'react';
import Section1 from './Section1';
import Section2 from './Section2';
import Section3 from './Section3';
import Section4 from './Section4';
import Section5 from './Section5';

const tabs = ['Request Equipment and Tools',
    'Register your equip with us',
    'Transfer your equip Quickly (WhatsApp) ',
    'maintenance quick (WhatsApp) ',
    'Work with us'];

const SlidingSection = () => {
    const [activeTab, setActiveTab] = useState(0);
    const [tabWidth, setTabWidth] = useState(0);
    const tabRefs = useRef([]);

    useLayoutEffect(() => {
        if (tabRefs.current[activeTab]) {
            setTabWidth(tabRefs.current[activeTab].offsetWidth);
        }
    }, [activeTab]);

    return (
        <div className="w-full bg-slate-200 pb-2 text-xl">
            <div className="relative flex border-b bg-slate-300 p-3">
                {tabs.map((tab, index) => (
                    <div
                        key={index}
                        ref={(el) => (tabRefs.current[index] = el)}
                        className={`flex-grow px-4 py-2 text-center cursor-pointer ${activeTab === index ? 'font-light' : 'font-normal'}`}
                        onClick={() => setActiveTab(index)}
                    >
                        {tab}
                    </div>
                ))}

                {/* Sliding underline */}
                <motion.div
                    layoutId="underline"
                    className="absolute bottom-0 h-1 bg-yellow-500"
                    style={{
                        width: tabWidth, // Takes the width of the active tab
                    }}
                    animate={{
                        x: tabRefs.current[activeTab]?.offsetLeft || 0, // Animates the underline to the correct tab position
                    }}
                    transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                />
            </div>

            {/* Tab content */}


            <div className="mt-5 px-2">
                {activeTab === 0 && <Section1 />}
                {activeTab === 1 && <Section2 />}
                {activeTab === 2 && <Section3 />}
                {activeTab === 3 && <Section4 />}
                {activeTab === 4 && <Section5 />}
            </div>

        </div>
    );
}

export default SlidingSection;
