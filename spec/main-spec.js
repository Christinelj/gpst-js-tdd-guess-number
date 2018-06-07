const main = require('../main/main');

describe('main()', function () {
    var compare_a = "4A0B";
    var compare_b = "0A4B";
    var compare_c = "0A0B";

    it('print game result', function () {
        var result = main({ system: '1234', user: '1234' });
        expect(result).toEqual(compare_a);
    });

    it('print game result', function () {
        var result = main({ system: '1234', user: '4321' });
        expect(result).toEqual(compare_b);
    });

    it('print game result', function () {
        var result = main({ system: '1234', user: '5678' });
        expect(result).toEqual(compare_c);
    });

});