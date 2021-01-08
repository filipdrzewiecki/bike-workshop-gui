import './partSections.css';

import React from 'react';
import * as partTypes from './PART_TYPES.jsx';
import Field from './Field';

class PartSection extends React.Component {
    render() {
        return (
            <div>
                <div className="part-section-title">
                    {this.props.sectionTitle}
                </div>
                <div className="part-details">
                    {this.props.fields.map((field, i) =>
                        <div className="contentField" key={i}>
                            <div className="fieldName">{field.props.name}:  </div>
                            <div className="fieldValue">{field.props.value}</div>
                        </div>
                    )}
                </div>
            </div>
        );
    }
}

export default class PartSections extends React.Component {
    mapPart(part, sections) {
        return (
            <div>
                {sections.map((section, i) => (
                    <PartSection key={i}
                        sectionTitle={section.name}
                        fields={section.fields.map((field, i) => (
                            <Field key={i} name={field} value={part[field]} formValue={field} />
                        ))}
                    />
                ))}
            </div>
        );
    }

    render() {
        const spec = partTypes.findSpec(this.props.type);
        return this.mapPart(this.props.part, spec.sections);
    }
}

