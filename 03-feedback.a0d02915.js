!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},r={},o=e.parcelRequired7c6;null==o&&((o=function(e){if(e in t)return t[e].exports;if(e in r){var o=r[e];delete r[e];var a={id:e,exports:{}};return t[e]=a,o.call(a.exports,a,a.exports),a.exports}var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}).register=function(e,t){r[e]=t},e.parcelRequired7c6=o),o("1WSnx");var a,n,l="feedback-form-state",i=document.querySelector(".feedback-form"),c={};i.addEventListener("input",(function(e){new FormData(e.currentTarget).forEach((function(e,t){c[t]=e})),localStorage.setItem(l,JSON.stringify(c))})),i.addEventListener("submit",(function(e){e.preventDefault(),console.log(JSON.parse(localStorage.getItem(l))),localStorage.clear(),i.reset()})),localStorage["feedback-form-state"]&&(a=i,n=c,n=JSON.parse(localStorage.getItem(l)),a.querySelector("input").value=n.email,a.querySelector("textarea").value=n.message)}();
//# sourceMappingURL=03-feedback.a0d02915.js.map
