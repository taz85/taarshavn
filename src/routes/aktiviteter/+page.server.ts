import type { PageServerLoad } from './$types';

export const load = (async () => {
    return { aktiviteter };
}) satisfies PageServerLoad;

const aktiviteter = [
    {
        id: 0,
        date: "April 2023",
        title: "Åbning af Havnen",
        body: "Havnen åbnes Fredag d. 14. April kl. 13, Vi håber mange vil være med til åbningen.Borde og bænke sættes ud Bestyrelsen sørger for kaffe, Øl og Vand, kage til arbejdet. Samt engang røde pølser",
    },
    {
        id: 1,
        date: "Maj 2023",
        title: "Både sættes i vandet",
        body: "Fælles søsætning af både Onsdag d. 10. Maj fra kl. 8. Skriv dig Venligst på listen i klubhuset eller ring på. Formand Tlf. 24 47 66 76",
    },
    {
        id: 2,
        date: "Oktober 2023",
        title: "Både tages op af vandet",
        body: 'Fælles optagning af både Onsdag d. 25. Oktober fra kl 8. Skriv dig Venligst på listen i "Hyttefadet" eller ring på. Formand Tlf. 24 47 66 76',
    },
    {
        id: 3,
        date: "November 2023",
        title: "Lukning af Havnen",
        body: "Havnen lukkes Fredag d. 3.November kl. 13, Hvor vi håber mange vil være med. Møblerne skal ind for vinteren, samt oprydning på pladsen Bestyrelsen sørger for kaffe, Øl og Vand, kage til arbejdet og røde pølser",
    },
    {
        id: 4,
        date: "",
        title: "",
        body: "",
    },
    {
        id: 5,
        date: "",
        title: "",
        body: "",
    },
]

