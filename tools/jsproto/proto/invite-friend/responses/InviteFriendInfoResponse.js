class InviteFriendInfoResponse {
    _canEnterInviteCode: Bool;
    _levelRequired: Int;
    _userCode: String;
    _enterCodeGifts: Array<Short, InviteFriendItemData>;
    _token: Int;
    _claimedAmountToken: Int;
    _milestones: Array<Short, InviteFriendMilestoneData>;
    _exceedLimitGifts: Array<Short, InviteFriendItemData>;
    _todayInviteCodeRedeemed: Int;
    _maxInviteCodeRedeemedPerDay: Int;
}