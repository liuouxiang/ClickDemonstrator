/*
Copyright 2021 RWTH Aachen University
 */

// install (please make sure versions match peerDependencies)
// yarn add @nivo/core @nivo/radar
import React, { Component }  from 'react';
import { ResponsiveRadar } from '@nivo/radar'
import Counter from "../../containers/Header/Messages/Counter";
// make sure parent container have a defined height when using
// responsive component, otherwise height will be 0 and
// no chart will be rendered.
// website examples showcase many properties,
// you'll often use just a few of them.
const MyResponsiveRadar = ({ data, indexBy, keys}) => (
    <ResponsiveRadar
        data={data}
        keys={keys}
        indexBy={indexBy}
        maxValue="auto"
        margin={{ top: 70, right: 80, bottom: 40, left: 80 }}
        curve="linearClosed"
        borderWidth={2}
        borderColor={{ from: 'color', modifiers: [] }}
        gridLevels={5}
        gridShape="linear"
        gridLabelOffset={36}
        enableDots={true}
        dotSize={10}
        dotColor={{ theme: 'background' }}
        dotBorderWidth={2}
        dotBorderColor={{ from: 'color' }}
        enableDotLabel={false}
        dotLabel="value"
        dotLabelYOffset={-12}
        colors={{ scheme: 'nivo' }}
        fillOpacity={0.25}
        blendMode="multiply"
        animate={true}
        motionConfig="wobbly"
        isInteractive={true}
        legends={[
            {
                anchor: 'top-right',
                direction: 'column',
                translateX: -50,
                translateY: -40,
                itemWidth: 80,
                itemHeight: 20,
                itemTextColor: '#999',
                symbolSize: 12,
                symbolShape: 'circle',
                effects: [
                    {
                        on: 'hover',
                        style: {
                            itemTextColor: '#000'
                        }
                    }
                ]
            }
        ]}
    />
)

export default MyResponsiveRadar;