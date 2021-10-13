"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Quote = void 0;
var react_1 = require("react");
var Quote = function (props) {
    return (react_1.default.createElement("blockquote", null,
        react_1.default.createElement("p", null, props.quote.text),
        react_1.default.createElement("footer", null, props.quote.author)));
};
exports.Quote = Quote;
//# sourceMappingURL=quote.js.map