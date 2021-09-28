/*
Copyright 2021 RWTH Aachen University
*/

let processParameters=[
    {
        "processParameter": "Holding Pressure",
        "target": 3,
        "value": 3 + Math.random() * 1
    },
    {
        "processParameter": "Max. Temperature at Extruder",
        "target": 4,
        "value": 4 + Math.random() * 0.1
    },
    {
        "processParameter": "Min. Temperature at Extruder",
        "target": 1,
        "value": 1 + Math.random() * 0.2
    },
    {
        "processParameter": "Cast Temp. 1",
        "target": 3,
        "value": 3 + Math.random() * 0.5
    },
    {
        "processParameter": "Cast Temp. 2",
        "target": 2,
        "value": 1 + Math.random() * 0.2
    }
]

export default processParameters;