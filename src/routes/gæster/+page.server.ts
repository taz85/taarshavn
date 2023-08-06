import type { PageServerLoad } from './$types';

export const load = (async () => {
    return {
        a: 1
    };
}) satisfies PageServerLoad;