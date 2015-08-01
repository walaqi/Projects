$(".recent-works .thumbnail > .image").on("resize", function() {
    $(".recent-works .thumbnail > .image").height($(".recent-works .thumbnail > .image").width() / 1.6)
}).resize();
var divs = $("i.random").get().sort(function() {
    return Math.round(Math.random()) - .5
}).slice(0, 1);
$(divs).show();
var divs = $("i.random2").get().sort(function() {
    return Math.round(Math.random()) - .5
}).slice(0, 1);
$(divs).show();
var divs = $("i.random3").get().sort(function() {
    return Math.round(Math.random()) - .5
}).slice(0, 1);
$(divs).show(), $(".crp-ft").hover(function() {
    return $(this).children("a").toggleClass("show hidden"), $(this).children("a").toggleClass("animated flipInX"), !1
}), $(window).on("scroll", function() {
    var a, b;
    return a = window.pageYOffset, b = a / 2, $(".parallax").css({
        transform: "translateY(" +- 1 * b + "px)"
    })
}), $("#teaser").click(function() {
    $("html, body").animate({
        scrollTop: $("#product").offset().top
    }, 500)
}), $("a").click(function() {
    var a = $.attr(this, "href");
    return a.indexOf("#") >= 0 ? ($("html, body").animate({
        scrollTop: $($.attr(this, "href")).offset().top
    }, 500), !1) : void 0
}), $(document).ready(function() {
    "undefined" != typeof $.cookie("token") ? ($("#sign-up-xs").addClass("hidden"), $("#sign-in-xs").addClass("hidden"), $("#sign-in").addClass("hidden"), $("#sign-up").addClass("hidden"), $(".crp-showcase form").addClass("hidden"), $.ajax({
        url: api_url + "get-token-info",
        data: {},
        type: "GET",
        beforeSend: function(a) {
            a.setRequestHeader("Authorization", $.cookie("token"))
        },
        success: function(a) {
            a.user.tenant && ($("#user-name").text(a.user.tenant.tenant_name), $("#user-name-xs").removeClass("hidden").children().text(a.user.tenant.tenant_name), $("#dashboard").removeClass("hidden"))
        },
        error: function(a, b, c) {
            var d = a.status;
            (401 == d || 404 == d) && ($.removeCookie("token", {
                path: "/"
            }), $("#sign-up-xs").removeClass("hidden"), $("#sign-in-xs").removeClass("hidden"), $("#sign-in").removeClass("hidden"), $("#sign-up").removeClass("hidden"), $(".crp-showcase form").removeClass("hidden"))
        }
    })) : ($("#user-name").addClass("hidden"), $("#user-name-xs").addClass("hidden"), $("#dashboard").addClass("hidden")), $(".navbar").headroom({
        offset: 1e3,
        tolerance: 5,
        classes: {
            initial: "animated",
            pinned: "slideInDown",
            unpinned: "slideOutUp"
        }
    });
    var a = new CountUp("stopwatch1", 0, 8893), b = new CountUp("stopwatch2", 0, 59301), c = new CountUp("stopwatch3", 0, 8258);
    a.start(), b.start(), c.start(), $("#githubAuth").click(function() {
        var a = "https://github.com/login/oauth/authorize?client_id=" + githubClientId + "&scope=user:email,repo&state=", b = api_url + "v1/github-redirect?redirect-url=" + account_url + "signup-with-github", a = a + "&redirect_uri=" + b;
        window.location.href = a
    }), $("#wechatAuth").click(function() {
        window.location.href = account_url + "qrcode"
    }), $("#carousel").slick({
        dots: !0,
        dotsClass: "slick-tab",
        appendDots: $("#feature-tab"),
        mobileFirst: !0
    }), $("#feature-tab li button").eq(0).html('<i class="icon-businese"></i>&nbsp;&nbsp;企业'), $("#feature-tab li button").eq(1).html('<i class="icon-developer"></i>&nbsp;&nbsp;开发者')
});
var scrolltotop = {
    setting: {
        startline: 100,
        scrollto: 0,
        scrollduration: 1e3,
        fadeduration: [500, 100]
    },
    controlHTML: '<i class="fa fa-angle-up backtotop"></i>',
    controlattrs: {
        offsetx: 5,
        offsety: 5
    },
    anchorkeyword: "#top",
    state: {
        isvisible: !1,
        shouldvisible: !1
    },
    scrollup: function() {
        this.cssfixedsupport || this.$control.css({
            opacity: 0
        });
        var a = isNaN(this.setting.scrollto) ? this.setting.scrollto: parseInt(this.setting.scrollto);
        a = "string" == typeof a && 1 == jQuery("#" + a).length ? jQuery("#" + a).offset().top : 0, this.$body.animate({
            scrollTop: a
        }, this.setting.scrollduration)
    },
    keepfixed: function() {
        var a = jQuery(window), b = a.scrollLeft() + a.width() - this.$control.width() - this.controlattrs.offsetx, c = a.scrollTop() + a.height() - this.$control.height() - this.controlattrs.offsety;
        this.$control.css({
            left: b + "px",
            top: c + "px"
        })
    },
    togglecontrol: function() {
        var a = jQuery(window).scrollTop();
        this.cssfixedsupport || this.keepfixed(), this.state.shouldvisible = a >= this.setting.startline?!0 : !1, this.state.shouldvisible&&!this.state.isvisible ? (this.$control.stop().animate({
            opacity: 1
        }, this.setting.fadeduration[0]), this.state.isvisible=!0) : 0 == this.state.shouldvisible && this.state.isvisible && (this.$control.stop().animate({
            opacity: 0
        }, this.setting.fadeduration[1]), this.state.isvisible=!1)
    },
    init: function() {
        jQuery(document).ready(function(a) {
            var b = scrolltotop, c = document.all;
            b.cssfixedsupport=!c || c && "CSS1Compat" == document.compatMode && window.XMLHttpRequest, b.$body = a(window.opera ? "CSS1Compat" == document.compatMode ? "html" : "body" : "html,body"), b.$control = a('<div id="topcontrol">' + b.controlHTML + "</div>").css({
                position: b.cssfixedsupport ? "fixed": "absolute",
                bottom: b.controlattrs.offsety,
                right: b.controlattrs.offsetx,
                opacity: 0,
                cursor: "pointer"
            }).attr({
                title: ""
            }).click(function() {
                return b.scrollup(), !1
            }).appendTo("body"), document.all&&!window.XMLHttpRequest && "" != b.$control.text() && b.$control.css({
                width: b.$control.width()
            }), b.togglecontrol(), a('a[href="' + b.anchorkeyword + '"]').click(function() {
                return b.scrollup(), !1
            }), a(window).bind("scroll resize", function(a) {
                b.togglecontrol()
            })
        })
    }
};
scrolltotop.init();

