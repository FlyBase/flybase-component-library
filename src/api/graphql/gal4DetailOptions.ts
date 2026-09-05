// Raw relationship rows may share a public FlyBase ID but carry different
// parent-specific metadata. Do not merge them in Apollo's normalized cache.
// useGAL4Search retains the assembled results in local component state.
export const gal4DetailOptions = {fetchPolicy: 'no-cache' as const};
