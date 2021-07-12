export function getCompany(company) {
    if(!company.name) return '-';
    return `${company.name}:- ${company.bs}, ${company.catchPhrase}`
}

export function getAddress(address) {
    let suite = address.suite? `${address.suite}, `:'';
    return `${suite}${address.street}, ${address.city}, ${address.zipcode}`
}

export function getGeoLocation(address) {
    if(!address.geo.lng || !address.geo.lat) return '-';
    return `${address.geo.lng}, ${address.geo.lat}`
}