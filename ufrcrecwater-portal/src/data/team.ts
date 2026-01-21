import { Filter } from "@/types/general";
import { Logos, MembersList } from "@/types/team";

export const membersMockData: MembersList = {
    members:[
        {user_id: '/team/fei-fei.jpg', user_name: 'Fei-Fei Li', position: 'Professor & AI Researcher', tenure_start: new Date("2000-01-01"), tenure_end: new Date("2023-01-01"), status: 'current', description: 'A leading figure in artificial intelligence, she co-created ImageNet, the dataset that catalyzed the deep learning revolution in computer vision'},
        {user_id: '/team/torvalds.jpg', user_name: 'Linus Torvalds', position: 'Software Engineer', tenure_start: new Date("2005-01-01"), tenure_end: new Date("2010-01-01"), status: 'Former', description: 'The creator of the Linux kernel and Git, he reshaped how modern operating systems and large-scale software are built and maintained.'},
        {user_id: '/team/jane.jpg', user_name: 'Jane Jacobs', position: 'AI Researcher', tenure_start: new Date("2022-01-01"), tenure_end: "Present", status: 'current', description: 'A leading figure in artificial intelligence, she co-created ImageNet, the dataset that catalyzed the deep learning revolution in computer vision'},
        {user_id: '/team/jordan.jpg', user_name: 'Jordan Peterson', position: 'Psychiatrist', tenure_start: new Date("2020-01-01"), tenure_end: new Date("2023-01-01"), status: 'Former', description: 'A medical doctor (MD or DO) who specializes in mental health, emotional disorders, and behavioral conditions of People.'}
    ]
}

export const logosList: Logos = {
    current: { src: '/team/current.png', alt: 'current Icon' },
    former: { src: '/team/former.png', alt: 'Former Icon' }
}

export const FilterCheckboxOptions : Filter = {
    options: [
       {id: "name", label: "Name", value: "Name", checked: false},
       {id: "title", label: "Title", value: "Title", checked: false},
       {id: "tenure", label: "Tenure", value: "Tenure", checked: false},
    ]
} 