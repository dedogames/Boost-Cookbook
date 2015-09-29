/* jquery.scrollzer v0.2 | (c) n33 | n33.co @n33co | MIT + GPLv2 */
jQuery.scrollzer = function(e, t) {
    var n = !1,
        r = "object",
        i = "clearTimeout",
        s = "setTimeout",
        o = "removeClass",
        u = "scrollzer-locked",
        a = "activeClassName",
        f = jQuery(window),
        l = jQuery(document);
    f.load(function() {
        var c, h, p, d, v, m, g, y, b, w, E = jQuery.extend({
                activeClassName: "active",
                suffix: "-link",
                pad: 50,
                firstHack: n,
                lastHack: n
            }, t),
            S = [],
            x = jQuery();
        for (c in e) {
            p = jQuery("#" + e[c]), d = jQuery("#" + e[c] + E.suffix);
            if (p.length < 1 || d.length < 1) continue;
            h = {}, h.link = d, h[r] = p, S[e[c]] = h, x = x.add(d)
        }
        y = function() {
            var e;
            for (c in S) e = S[c], e.start = Math.ceil(e[r].offset().top) - E.pad, e.end = e.start + Math.ceil(e[r].innerHeight());
            f.trigger("scroll")
        }, f.resize(function() {
            window[i](g), g = window[s](y, 250)
        }), w = function() {
            x[o](u)
        }, f.scroll(function() {
            var e = 0,
                t = n;
            v = f.scrollTop(), window[i](b), b = window[s](w, 250);

            for (c in S) e = S[c], e.start = Math.ceil(e[r].offset().top) - E.pad, e.end = e.start + Math.ceil(e[r].innerHeight());
            e = 0;

            for (c in S) c != m && v >= S[c].start && v <= S[c].end && (m = c, t = !0), e++;
            E.lastHack && v + f.height() >= l.height() && (m = c, t = !0), t && !x.hasClass(u) && (x[o](E[a]), S[m].link.addClass(E[a]))
        }), f.trigger("resize")
    })
};
