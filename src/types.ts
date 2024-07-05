
export const LAWYER_TYPES = {
    CRIMINAL: "Criminal Lawyer",
    ENVIRONMENTAL: "Environmental Lawyer",
    FAMILY: "Family Lawyer",
    CORPORATE: "Corporate Lawyer",
    CIVIL: "Civil Lawyer",
    INTELLECTUAL_PROPERTY: "Intellectual Property Lawyer",
    TAX: "Tax Lawyer",
    CYBER: "Cyber Lawyer",
    ESTATE_PLANNING: "Estate Planning Lawyer",
    WORKERS_COMPENSATION: "Worker's Compensation Lawyer",
    PUBLIC_INTEREST: "Public Interest Lawyer",
    MEDICAL_MALPRACTICE: "Medical Malpractice Lawyer",
    MERGER_AND_ACQUISITION: "Merger and Acquisition Lawyer",
    LABOUR: "Labour Lawyer",
    BANKRUPTCY: "Bankruptcy Lawyer",
    SECURITIES: "Securities Lawyer",
    MILITARY: "Military Lawyer",
    CONTRACT: "Contract Lawyer",
    GOVERNMENT: "Government Lawyer",
    IMMIGRATION: "Immigration Lawyer"
} as const;
let obj = ["Hello", "Bye"] as const
type ArrayEnum<T> = T;
type e = ArrayEnum<typeof obj>
export type ObjectEnumType<T> = T[keyof T] 
export type LawyerType = ObjectEnumType<typeof LAWYER_TYPES>

export type StringObject<T> = {
    [key: string]: T;
}

export function keyAt<T>(obj: StringObject<T>, idx: number) {
    return obj[Object.keys(obj)[idx]];
}

export type Lawyer = {
    name: string;
    contacts: LawyerContacts;
    type: LawyerType;
}

export type LawyerContacts = {
    phoneNumber: string;
    whatsappNumber: string;
    email: string;
    avatar: string;
}

export const lawyerColorMap: {[key: string]: string} = {
    "Criminal Lawyer": "text-red-400",
    "Environmental Lawyer": "text-green-400",
    "Family Lawyer": "text-blue-400",
    "Corporate Lawyer": "text-purple-400",
    "Civil Lawyer": "text-yellow-400",
    "Intellectual Property Lawyer": "text-teal-400",
    "Tax Lawyer": "text-orange-400",
    "Cyber Lawyer": "text-cyan-400",
    "Estate Planning Lawyer": "text-pink-400",
    "Worker's Compensation Lawyer": "text-indigo-400",
    "Public Interest Lawyer": "text-lime-400",
    "Medical Malpractice Lawyer": "text-amber-400",
    "Merger and Acquisition Lawyer": "text-emerald-400",
    "Labour Lawyer": "text-rose-400",
    "Bankruptcy Lawyer": "text-fuchsia-400",
    "Securities Lawyer": "text-violet-400",
    "Military Lawyer": "text-brown-400",
    "Contract Lawyer": "text-sky-400",
    "Government Lawyer": "text-slate-400",
    "Immigration Lawyer": "text-gray-400"
};
