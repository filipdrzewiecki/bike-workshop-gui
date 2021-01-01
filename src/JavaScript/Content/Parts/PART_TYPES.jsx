const BRAND = 'brand';
const MODEL = 'model';
const YEAR = 'year';
const SIZE = 'size';
const WEIGHT = 'weight';

export const FRAME = 'frame';
export const FORK = 'fork';

export const FIELDS = [BRAND, MODEL, YEAR, SIZE, WEIGHT]

export const FRAME_SPEC = {
    name: FRAME,
    searchBoxes: [BRAND, MODEL, YEAR],
    fields: [BRAND, MODEL, YEAR, SIZE, WEIGHT]
}

export const FORK_SPEC = {
    name: FORK,
    searchBoxes: [BRAND, MODEL, YEAR],
    fields: [BRAND, MODEL, YEAR, WEIGHT]
}

export const SPECIALIZATION = [FRAME_SPEC, FORK_SPEC]

export function findSpec(specName) {
    return SPECIALIZATION.find(spec => spec.name === specName)
}