export const HTTPSuccessType = "success";

export enum HTTPSuccessMessage {
    RECORD_CREATED = "Record created",
    RECORD_UPDATED = "Record updated",
    RECORD_FOUND = "Record found",
    RECORDS_FOUND = "Records found",
    RECORD_DELETED = "Record deleted",
    RECORD_ACTIVATED = "Record activated",
    RECORD_DEACTIVATED = "Record deactivated",
    RECORD_CHECKED = "Record checked",
}

export enum HTTPSuccessStatus {
    OK = 200,
    CREATED = 201,
    ACCEPTED = 202,
}