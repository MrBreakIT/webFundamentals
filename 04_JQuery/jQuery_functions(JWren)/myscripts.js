$(document).ready(function () {
    // fpunch
    $("img.fpunch").hide();
    $("button.fpunch").click(function () {
        if ($("img.fpunch").is(":hidden")) {
            $("button.fpunch").append(
                `<audio autoplay>
                    <source src="sounds/fpunch.mp3" type="audio/mp3" />
                </audio>`
            );
            $("img.fpunch").slideDown(100);
        } else {
            $("img.fpunch").slideUp(100);
        }
    });

    // toasty
    $("img.toasty").hide();
    $("button.toasty").click(function () {
        $("button.toasty").append(
            `<audio autoplay>
                <source src="sounds/toastyMK3.mp3" type="audio/mp3" />
            </audio>`
        );
        $("img.toasty").fadeIn(200);
        $("img.toasty").fadeOut(200);
    });
    //zoidberg
    $("img.zoidberg").hide();
    $("button.zoidberg").click(function () {
        $("img.zoidberg").slideToggle(100);
        $("p.zoidberg").text("ZOIDBERG!");
        $("button.zoidberg").append(
            `<audio autoplay>
                <source src="sounds/zoidberg.mp3" type="audio/mp3" />
            </audio>`
        );
    });
});
