import { Period } from './Period';

export interface HumanName {
    // from Element: extension
    use: string; // usual | official | temp | nickname | anonymous | old | maiden
    text: string; // Text representation of the full name
    family: string; // Family name (often called 'Surname')
    given: string[]; // Given names (not always 'first'). Includes middle names
    prefix: string[]; // Parts that come before the name
    suffix: string[]; // Parts that come after the name
    period: Period; // Time period when name was/is in use
}