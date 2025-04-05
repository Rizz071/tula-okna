const config = {
    siteUrl: "https://тульские-окна.рф",
    generateRobotsTxt: true,
    robotsTxtOptions: {
        policies: [
            { userAgent: "*", disallow: "/private/" },
            { userAgent: "*", allow: "/" },
        ],
    },
};

module.exports = config;
