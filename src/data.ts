import { LAWYER_TYPES, keyAt, type Lawyer, type LawyerContacts } from "./types";

const mockNumber = "91+7999734078"
const mockWhatsappNumber = "917999734078"
const mockContacts: LawyerContacts = {
    email: "email@email.com",
    phoneNumber: mockNumber,
    whatsappNumber: mockWhatsappNumber,
    avatar: "https://picsum.photos/720"
}
export const mockData : Lawyer[] = (() => {
    let lawyers: Lawyer[] = [];
    for (let i = 0; i < 100; i++) {
        lawyers.push({
            contacts: mockContacts,
            name: "Lawyer"+(i+1),
            type: keyAt(LAWYER_TYPES, Math.floor(i / 5))
        })
    }

    return lawyers
})()