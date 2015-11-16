module.exports = function (i18nKey, options) {  
    var result = i18n.t(i18nKey, options.hash);
    return new Handlebars.SafeString(result);
};