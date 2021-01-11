//SECTIONS
const GENERAL_SECTION = 'General';
const BOTTOM_BRACKET_SECTION = 'Bottom bracket';
const STEERING_SECTION = 'Steering';
const OTHER_SECTION = 'Other';

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
const DAMPER = "damper";
const DISC = "disc";
const HUB = "hub";
const RIM = "rim";
const TYRE = "tyre";
const WHEEL = "wheel";
const SADDLE = "saddle";
const SEATPOST = "seatpost";
const SEATPOST_CLAMP = "seatpostClamp";
const CHAINRING = "chainring";
const CHAIN = "chain";
const CASSETTE = "cassette";
const BOTTOM_BRACKET = "bottomBracket";
const SHIFTER_LEFT = "shifterLeft";
const SHIFTER_RIGHT = "shifterRight";
const ROAD_SHIFTER_LEFT = "roadShifterLeft";
const ROAD_SHIFTER_RIGHT = "roadShifterRight";
const GRIPS = "grips";
const HANDLEBAR = "handlebar";
const HEADSET = "headset";
const STEM = "stem";

export const FIELDS = [BRAND, MODEL, SERIES, YEAR, SIZE, WEIGHT, WHEEL_SIZE]

export const FRAME_SPEC = {
    name: FRAME,
    searchBoxes: [BRAND, MODEL, SERIES, YEAR, SIZE, WHEEL_SIZE],
    columns: [BRAND, MODEL, SERIES, YEAR, SIZE, WHEEL_SIZE, WEIGHT],
    sections: [
        {name: GENERAL_SECTION, fields: [TYPE, SIZE, WEIGHT]},
        {name: BOTTOM_BRACKET_SECTION, fields: [BB_TYPE, BB_SIZE]},
        {name: STEERING_SECTION, fields: [FORK_TUBE_TYPE, HEADSET_TYPE]},
        {name: OTHER_SECTION, fields: [READ_WHEEL_AXLE_SIZE, BRAKE_TYPE, SEATPOST_CALIPER_DIAMETER, SEATPOST_SIZE]}
    ],
    form: [
        {
            name: GENERAL_SECTION, 
            fields: [BRAND, MODEL, SERIES, YEAR, SIZE, WHEEL_SIZE, WEIGHT]
        },
        {
            name: BOTTOM_BRACKET_SECTION, 
            fields: [BB_TYPE, BB_SIZE]
        },
        {
            name: STEERING_SECTION, 
            fields: [FORK_TUBE_TYPE, HEADSET_TYPE]
        },
        {
            name: OTHER_SECTION, 
            fields: [READ_WHEEL_AXLE_SIZE, BRAKE_TYPE, SEATPOST_CALIPER_DIAMETER, SEATPOST_SIZE]
        }
    ]
}

export const FORK_SPEC = {
    name: FORK,
    searchBoxes: [BRAND, MODEL, YEAR],
    columns: [BRAND, MODEL, YEAR, WEIGHT],
    sections: [
        {name: GENERAL_SECTION, fields: [TYPE, SIZE, WEIGHT]},
        {name: BOTTOM_BRACKET_SECTION, fields: [BB_TYPE, BB_SIZE]},
        {name: STEERING_SECTION, fields: [FORK_TUBE_TYPE, HEADSET_TYPE]},
        {name: OTHER_SECTION, fields: [READ_WHEEL_AXLE_SIZE, BRAKE_TYPE, SEATPOST_CALIPER_DIAMETER, SEATPOST_SIZE]}
    ],
    form: []
}

export const SPECIALIZATION = [FRAME_SPEC, FORK_SPEC]

export const PART_LIST = [
    FRAME, FORK, REAR_DERAILLEUR, FRONT_DERAILLEUR, CRANK, DAMPER, 
    DISC, HUB, RIM, TYRE, WHEEL, SADDLE, SEATPOST, SEATPOST_CLAMP, CHAINRING, CHAIN,
    CASSETTE, BOTTOM_BRACKET, SHIFTER_LEFT, SHIFTER_RIGHT, ROAD_SHIFTER_LEFT, 
    ROAD_SHIFTER_RIGHT, GRIPS, HANDLEBAR, HEADSET, STEM
]

export function findSpec(specName) {
    return SPECIALIZATION.find(spec => spec.name === specName)
}