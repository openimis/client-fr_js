import { Identifier } from './identifier';
import { CodeableConcept } from './codeableConcept';
import { Reference } from './reference';
import { Period } from './period';

export interface Coverage {
    identifier: Identifier[]; // The primary coverage ID
    // @todo change to enum
    status: string; // active | cancelled | draft | entered-in-error
    type: CodeableConcept; // Type of coverage such as medical or accident
    policyHolder: Reference; // (Patient|RelatedPerson|Organization) }, // Owner of the policy
    subscriber: Reference; // (Patient|RelatedPerson) }, // Subscriber to the policy
    subscriberId: string; // ID assigned to the Subscriber
    beneficiary: Reference; // Plan Beneficiary
    relationship: CodeableConcept; // Beneficiary relationship to the Subscriber
    period: Period; // Coverage start and end dates
    payor: Reference[]; // (Organization|Patient|RelatedPerson) }], // Identifier for the plan or agreement issuer
    grouping: { // Additional coverage classifications
        group: string; // An identifier for the group
        groupDisplay: string; // Display text for an identifier for the group
        subGroup: string; // An identifier for the subsection of the group
        subGroupDisplay: string; // Display text for the subsection of the group
        plan: string; // An identifier for the plan
        planDisplay: string; // Display text for the plan
        subPlan: string; // An identifier for the subsection of the plan
        subPlanDisplay: string; // Display text for the subsection of the plan
        class: string; // An identifier for the class
        classDisplay: string; // Display text for the class
        subClass: string; // An identifier for the subsection of the class
        subClassDisplay: string; // Display text for the subsection of the subclass
    };
    dependent: string; // Dependent number
    sequence: string; // The plan instance or sequence counter
    order: number; // Relative order of the coverage
    network: string; // Insurer network
    contract: Reference[]; //(Contract) }] // Contract details
}
