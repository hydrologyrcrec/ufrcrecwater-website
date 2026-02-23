import { Prisma } from "@prisma/client";

export type SearchPlaceholder = {
    label: string;
    placeholder: string;
}

export type CheckboxFilterOption = {
    id: string;          
    label: string;       
    value: string;       
    checked: boolean;    
}

export type FilterOptions = {
    options: CheckboxFilterOption[];
}

export type CheckboxProps = {
    option: CheckboxFilterOption;
    onChange: (id: string, checked: boolean) => void;
};

export type Filter = {
    options: CheckboxFilterOption[]
}

export type RecordInfo = {
    id: string;
}

export type Button = {
    src: string;
    alt: string;
    label: string;
    height: number;
    width: number;
    bgColor: string;
    type: "button" | "submit";
}

export type DataOps = "Add" | "Edit" | "Delete" | "Save" | "Cancel"

export type Buttons = Record<DataOps, Button>

export type Log = {
    request: string;
    message: string;
    success?: boolean;
}

export type AuthorTable = Prisma.AuthorGetPayload<{}>
export type ContactTable = Prisma.ContactGetPayload<{}>
export type JournalTable = Prisma.JournalGetPayload<{}>
export type PublicationTable = Prisma.PublicationGetPayload<{}>
export type ResearcTable = Prisma.ResearchGetPayload<{}>
export type RoleTable = Prisma.RoleGetPayload<{}>
export type TeamMembersTable = Prisma.TeamMemberGetPayload<{}> 
export type UserTable = Prisma.UserGetPayload<{}>
export type UserRolesTable = Prisma.UserRoleGetPayload<{}>

export type AddData = 
{"Author":AuthorTable} | 
{"Contact":ContactTable} | 
{"Journal":JournalTable} | 
{"Publication":PublicationTable} | 
{"Research":ResearcTable} | 
{"Role":RoleTable} | 
{"TeamMember":TeamMembersTable} | 
{"User":UserTable} | 
{"UserRole":UserRolesTable}