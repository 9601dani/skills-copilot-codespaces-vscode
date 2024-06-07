function skillsMember() {
    return {
        restrict: 'E',
        templateUrl: 'app/member/member.html',
        controller: 'MemberController',
        controllerAs: 'vm',
        bindToController: true,
        scope: {
            member: '='
        }
    };
} 