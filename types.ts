
interface User {
    id: string
    name: string
    email: string
    privileges: Privileges
}

enum Privileges {
    ADMIN = 'admin',
    STANDARD = 'standard'
}

interface Job {
    id: string
    status: JobStatus
    attWorkRequestNumber: string
    type: JobType
    projectNumber: string
    address: Address
    electJobNumber: string
    attCFOContact: string
    description?: string
    acasCompletionDate: Date
    supplierEstimatedCompleteDate?: Date
}

enum JobStatus {
    IN_PROGRESS = 'in_progress',
    COMPLETE = 'complete',
    ON_HOLD = 'on_hold',
    PENDING = 'pending',
}

enum JobType {
    ORCA = 'orca',
    ORCA_BID = 'orca_bid',
    BID = 'bid',
    F1 = 'f1',
    ASE = 'ase',
    CRAN = 'cran',
    NA = 'n/a',
    SVA = 'sva',
}

interface Address {
    streetAddress: string
    city: string
}

interface Foreman {
    name: string
    phoneNumber: string
}

