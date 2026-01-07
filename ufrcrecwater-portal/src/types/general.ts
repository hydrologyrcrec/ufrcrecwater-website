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