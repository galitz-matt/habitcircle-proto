export const DomainInviteStatus = {
    PENDING: "PENDING",
    ACCEPTED: "ACCEPTED",
    DECLINED: "DECLINED"
}

export type DomainInviteStatus = (typeof DomainInviteStatus)[keyof typeof DomainInviteStatus]