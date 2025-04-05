const config = {
    siteUrl: "https://xn----8sbnljdcvhzjm2j.xn--p1ai",
    generateRobotsTxt: true,
    robotsTxtOptions: {
        policies: [
            // { userAgent: "*", disallow: "/private/" },
            { userAgent: "*", allow: "/" },
        ],
    },
};

module.exports = config;
