class BaseJs {
    constructor() {
        this.initEvent();
    }

    initEvent() {
        let me = this;

        $(".payment-list").on("click", "li", function () {
            $(this).parent('ul').find('li div').removeClass('border-red');
            $(this).find("div").addClass('border-red');
        })

        $(".btn-access").click(function () {
            $(".payment").css("display", "none");
        })

        $("#btn-close").click(function () {
            $(".payment").css("display", "none");
        })
    }
}