import type { PageServerLoad } from './$types';

export const load = (async () => {
    return { bestyrelsen };
}) satisfies PageServerLoad;

const bestyrelsen = [
    {
        role: "Formand",
        name: "Niels Rahbæk-Andersen",
        tlf: "54 93 13 61 / 24 47 66 76",
        email: "formand@taarshavn.dk",
        image: "/images/user.svg"
    },
    {
        role: "Kasserer",
        name: "Arne Rasmussen",
        tlf: "30 57 26 62",
        email: "kasserer@taarshavn.dk",
        image: "/images/user.svg"

    },
    {
        role: "Bestyrelsesmedlem",
        name: "Hans-Henrik Jul Petersen",
        tlf: "20 42 88 73",
        email: "hans-henrik@taarshavn.dk",
        image: "/images/user.svg"

    },
    {
        role: "Bestyrelsesmedlem",
        name: "Christina Schou",
        tlf: "29 77 51 13",
        email: "christina@taarshavn.dk",
        image: "/images/user.svg"

    },
    {
        role: "Bestyrelsesmedlem",
        name: "Thomas Stelmach",
        tlf: "61 40 82 81",
        email: "thomas@taarshavn.dk",
        image: "/images/user.svg"

    },
    {
        role: "Bestyrelsesmedlem (Valgt af Havnens liggere)",
        name: "Bo Raun",
        tlf: "",
        email: "bo@taarshavn.dk",
        image: "/images/user.svg"

    },
    {
        role: "Bestyrelsesmedlem (Valgt af Havnens liggere)",
        name: "Jens Davidsen",
        tlf: "",
        email: "Jens@taarshavn.dk",
        image: "/images/user.svg"

    },
]

