export interface Child {
    name: String,
    age: number
}

export interface Passenger {
    id: number,
    fullname: string,
    checkedIn: boolean,
    checkInDate: number | null,
    children: Child[] | null
}