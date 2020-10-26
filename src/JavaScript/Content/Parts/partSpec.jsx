import React from 'react';
import PartSection from './partSection.jsx';
import * as partTypes from './PART_TYPES.jsx';
import Field from './Field';


function mapFrame(part) {
    const type = <Field name='Typ' value={part.purpose} formValue='purpose'/>
    const size = <Field name='Rozmiar' value={part.size} formValue='size'/>
    const weight = <Field name='Waga' value={part.weight} formValue='weight'/>
    const bbType = <Field name='Typ' value={part.bottomBracketType} formValue='bottomBracketType'/>
    const bbSize = <Field name='Wymiary' value={part.bottomBracketSize} formValue='bottomBracketSize'/>
    const forkTubeType = <Field name='Taper' value={part.forkTubeType} formValue='forkTubeType'/>
    const headsetType = <Field name='Stery' value={part.headsetType} formValue='headsetType'/>
    const rearWheelAxleSize = <Field name='Tylna oś' value={part.rearWheelAxleSize} formValue='rearWheelAxleSize'/>
    const brakeType = <Field name='Typ hamulca' value={part.brakeType} formValue='brakeType'/>
    const seatpostCaliperDiameter = <Field name='Zacisk sztycy' value={part.seatpostCaliperDiameter} formValue='seatpostCaliperDiameter'/>
    const seatpostSize = <Field name='Wymiar sztycy' value={part.seatpostSize} formValue='seatpostSize'/>

    return ([
        <PartSection key='Ogólne'
            sectionTitle='Ogólne'
            fields={[type, size, weight]}
        />,
        <PartSection key='Suport'
            sectionTitle='Suport'
            fields={[bbType, bbSize]}
        />,
        <PartSection key='Rura sterowa'
            sectionTitle='Rura sterowa'
            fields={[forkTubeType, headsetType]}
        />,
        <PartSection key='Inne'
            sectionTitle='Inne'
            fields={[rearWheelAxleSize, brakeType, seatpostCaliperDiameter, seatpostSize]}
        />
    ]);
}

function mapFork(part) {
    return ([
        // <PartSection
        //     sectionTitle='Ogólne'
        //     fieldNames={['Typ', 'skok', 'Waga']}
        //     fieldValues={[part.purpose, part.travel, part.weight]}
        // />
    ]);
}

export function mapPartFields(type, part) {
    switch (type) {
        case partTypes.FRAME:
            return mapFrame(part);
        case partTypes.FORK:
            return mapFork(part);
        default:
            return [];
    }
}

function mapFrameForm(part) {
    return ([
    ]);
}

export function mapPartFieldsToForm(type, part) {
    switch (type) {
        case partTypes.FRAME:
            return mapFrameForm(part);
        default:
            return [];
    }
}