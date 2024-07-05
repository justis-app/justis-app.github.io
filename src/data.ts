import { LAWYER_TYPES, keyAt, type Lawyer, type LawyerContacts } from "./types";
import VivekShrivastavaImage from "./pages/vivvek-shrivastav.png"
import PradeepNaikImage from "./pages/pradeeo-naik.jpeg"
import VijaySoniImage from "./pages/vijay-soni.webp"
import AnishAshapure from "./pages/anish-ashapure.jpg"

const mockNumber = "91+11111111111"
const mockWhatsappNumber = "91111111111"
const mockContacts: LawyerContacts = {
    email: "email@email.com",
    phoneNumber: mockNumber,
    whatsappNumber: mockWhatsappNumber,
    avatar: "https://picsum.photos/720"
}
export const mockData : Lawyer[] = [
    {
         name: "Advocate Vivek Shrivastva",
         contacts: {
            ...mockContacts,
            avatar: VivekShrivastavaImage.src
        },
         type: "Criminal Lawyer"
    },
    {
         name: "Advocate Pradeep Naik",
         contacts: {
            ...mockContacts,
            avatar: PradeepNaikImage.src
        },
         type: "Family Lawyer"
    },
    {
         name: "Advocate Anish Ashapure",
         contacts: {
            ...mockContacts,
            avatar: AnishAshapure.src
        },
         type: "Criminal Lawyer"
    },
    {
         name: "Advocate Vijay Soni",
         contacts: {
            ...mockContacts,
            avatar: VijaySoniImage.src
        },
         type: "Criminal Lawyer"
    },
]