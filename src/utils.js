const {DecimalSeparators} = require('./consts');
const icu = require('./lib/icu-slim');

// We expect `window.icu` to be exposed by the parent. When in doubt, we fall
// back to a period. We can only depend on a subset of what localeplanet
// provides, however -- the things in `icu-slim.js` (there's a copy in ../lib/
// for reference).
let decimalSeparator;

if (icu.getDecimalFormatSymbols().decimal_separator === ',') {
    decimalSeparator = DecimalSeparators.COMMA;
} else {
    decimalSeparator = DecimalSeparators.PERIOD;
}

module.exports = {
    decimalSeparator,
};
