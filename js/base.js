class BaseJs {
    constructor() {
        this.initEvent();
    }

    initEvent() {
        let me = this;
        let nameBank = "";

        $(".payment-list").on("click", "li", function () {
            $(this).parent('ul').find('li div').removeClass('border-red');
            $(this).find("div").addClass('border-red');

            // Lấy tên của ngân hàng
            nameBank = $(this).find("div").attr("id");
        })

        $(".btn-access").click(function () {
            $(".payment").hide();
        })

        $("#btn-close").click(function () {
            $(".payment").hide();
        })
    }
}