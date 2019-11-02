import { Identifier } from './identifier';
import { HumanName } from './humanName';
import { ContactPoint } from './contactPoint';
import { Address } from './address';
import { CodeableConcept } from './codeableConcept';
import { Attachment } from './attachment';
import { Reference } from './reference';
import { Period } from './period';

export interface Patient {
    // from Resource: id, meta, implicitRules, and language
    // from DomainResource: text, contained, extension, and modifierExtension
    identifier: Identifier[]; // An identifier for this patient
    active: boolean; // Whether this patient's record is in active use
    name: HumanName[]; // A name associated with the patient
    telecom: ContactPoint[]; // A contact detail for the individual
    gender: string; // male | female | other | unknown
    birthDate: Date; // The date of birth for the individual
    // deceased[x]: Indicates if the individual is deceased or not. One of these 2:
    deceasedBoolean: boolean;
    deceasedDateTime: Date;
    address: Address[]; // Addresses for the individual
    maritalStatus: CodeableConcept; // Marital (civil) status of a patient
    // multipleBirth[x]: Whether patient is part of a multiple birth. One of these 2:
    multipleBirthBoolean: boolean;
    multipleBirthInteger: number;
    photo: Attachment[]; // Image of the patient
    contact: { // A contact party (e.g. guardian, partner, friend) for the patient
        relationship: CodeableConcept[]; // The kind of relationship
        name: HumanName; // A name associated with the contact person
        telecom: ContactPoint[]; // A contact detail for the person
        address: Address; // Address for the contact person
        gender: string; // male | female | other | unknown
        organization: Reference; // (Organization) }, // C? Organization that is associated with the contact
        period: Period; // The period during which this contact person or organization is valid to be contacted relating to this patient
    }[];
    animal: { // This patient is known to be an animal (non-human)
        species: CodeableConcept; // R!  E.g. Dog, Cow
        breed: CodeableConcept; // E.g. Poodle, Angus
        genderStatus: CodeableConcept; // E.g. Neutered, Intact
    };
    communication: { // A list of Languages which may be used to communicate with the patient about his or her health
        language: CodeableConcept; // R!  The language which can be used to communicate with the patient about his or her health
        preferred: boolean; // Language preference indicator
    }[];
    generalPractitioner: Reference[]; // (Organization|Practitioner) }], // Patient's nominated primary care provider
    managingOrganization: Reference; // (Organization) }, // Organization that is the custodian of the patient record
    link: { // Link to another patient resource that concerns the same actual person
        other: Reference; //(Patient|RelatedPerson) }, // R!  The other patient or related person resource that the link refers to
        type: string; // R!  replaced-by | replaces | refer | seealso - type of link
    }[];
}