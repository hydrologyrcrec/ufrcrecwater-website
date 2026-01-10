import { Filter } from "@/types/general";
import { Logos, MembersList } from "@/types/team";

export const membersMockData: MembersList = {
    members:[
        {id: '1', name: 'Fei-Fei Li', title: 'Professor & AI Researcher', start: new Date("2000-01-01"), end: new Date("2023-01-01"), status: 'Active', description: 'A leading figure in artificial intelligence, she co-created ImageNet, the dataset that catalyzed the deep learning revolution in computer vision', imageUrl: '/team/fei-fei.jpg'},
        {id: '2', name: 'Linus Torvalds', title: 'Software Engineer', start: new Date("2005-01-01"), end: new Date("2010-01-01"), status: 'Former', description: 'The creator of the Linux kernel and Git, he reshaped how modern operating systems and large-scale software are built and maintained.', imageUrl: '/team/torvalds.jpg'},
        {id: '3', name: 'Jane Jacobs', title: 'AI Researcher', start: new Date("2022-01-01"), end: "Present", status: 'Active', description: 'A leading figure in artificial intelligence, she co-created ImageNet, the dataset that catalyzed the deep learning revolution in computer vision', imageUrl: '/team/jane.jpg'},
        {id: '4', name: 'Jordan Peterson', title: 'Psychiatrist', start: new Date("2020-01-01"), end: new Date("2023-01-01"), status: 'Former', description: 'A medical doctor (MD or DO) who specializes in mental health, emotional disorders, and behavioral conditions of People.', imageUrl: '/team/jordan.jpg'}
    ]
}

export const logosList: Logos = {
    active: { src: '/team/active.png', alt: 'Active Icon' },
    former: { src: '/team/former.png', alt: 'Former Icon' }
}

export const FilterCheckboxOptions : Filter = {
    options: [
       {id: "name", label: "Name", value: "Name", checked: false},
       {id: "title", label: "Title", value: "Title", checked: false},
       {id: "tenure", label: "Tenure", value: "Tenure", checked: false},
    ]
} 