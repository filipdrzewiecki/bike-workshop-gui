//SECTIONS
const GENERAL = 'General';
const BOTTOM_BRACKET = 'Bottom bracket';
const STEERING = 'Steering';
const OTHER = 'Other';

//FIELDS
const BRAND = 'brand';
const SERIES = 'series';
const MODEL = 'model';
const YEAR = 'year';
const SIZE = 'size';
const WEIGHT = 'weight';
const WHEEL_SIZE = 'wheelSize';

const TYPE = 'type';
const BB_TYPE = 'bottomBracketType';
const BB_SIZE = 'bottomBracketSize';
const FORK_TUBE_TYPE = 'forkTubeType';
const HEADSET_TYPE = 'headsetType';
const READ_WHEEL_AXLE_SIZE = 'rearWheelAxleSize';
const BRAKE_TYPE = 'brakeType';
const SEATPOST_CALIPER_DIAMETER = 'seatpostCaliperDiameter';
const SEATPOST_SIZE = 'seatpostSize';


export const FRAME = 'frame';
export const FORK = 'fork';
const REAR_DERAILLEUR = 'rearDerailleur';
const FRONT_DERAILLEUR = 'frontDerailleur';
const CRANK = 'crank';

export const FIELDS = [BRAND, MODEL, SERIES, YEAR, SIZE, WEIGHT, WHEEL_SIZE]

export const FRAME_SPEC = {
    name: FRAME,
    searchBoxes: [BRAND, MODEL, SERIES, YEAR, SIZE, WHEEL_SIZE],
    columns: [BRAND, MODEL, SERIES, YEAR, SIZE, WHEEL_SIZE, WEIGHT],
    sections: [
        {name: GENERAL, fields: [TYPE, SIZE, WEIGHT]},
        {name: BOTTOM_BRACKET, fields: [BB_TYPE, BB_SIZE]},
        {name: STEERING, fields: [FORK_TUBE_TYPE, HEADSET_TYPE]},
        {name: OTHER, fields: [READ_WHEEL_AXLE_SIZE, BRAKE_TYPE, SEATPOST_CALIPER_DIAMETER, SEATPOST_SIZE]}
    ],
    form: [
        {
            name: GENERAL, 
            fields: [BRAND, MODEL, SERIES, YEAR, SIZE, WHEEL_SIZE, WEIGHT]
        },
        {
            name: BOTTOM_BRACKET, 
            fields: [BB_TYPE, BB_SIZE]
        },
        {
            name: STEERING, 
            fields: [FORK_TUBE_TYPE, HEADSET_TYPE]
        },
        {
            name: OTHER, 
            fields: [READ_WHEEL_AXLE_SIZE, BRAKE_TYPE, SEATPOST_CALIPER_DIAMETER, SEATPOST_SIZE]
        }
    ]
}

export const FORK_SPEC = {
    name: FORK,
    searchBoxes: [BRAND, MODEL, YEAR],
    columns: [BRAND, MODEL, YEAR, WEIGHT],
    sections: [
        {name: GENERAL, fields: [TYPE, SIZE, WEIGHT]},
        {name: BOTTOM_BRACKET, fields: [BB_TYPE, BB_SIZE]},
        {name: STEERING, fields: [FORK_TUBE_TYPE, HEADSET_TYPE]},
        {name: OTHER, fields: [READ_WHEEL_AXLE_SIZE, BRAKE_TYPE, SEATPOST_CALIPER_DIAMETER, SEATPOST_SIZE]}
    ],
    form: []
}

export const SPECIALIZATION = [FRAME_SPEC, FORK_SPEC]

export const PART_LIST = [FRAME, FORK, REAR_DERAILLEUR, FRONT_DERAILLEUR, CRANK]

export function findSpec(specName) {
    return SPECIALIZATION.find(spec => spec.name === specName)
}