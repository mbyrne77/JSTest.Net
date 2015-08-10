var calculator = function calculator() {

    var add = function add(x, y) {
            return x + y;
        },
        subtract = function subtract(x, y) {
            return x - y;
        };

    return {
        add: add,
        subtract: subtract
    };

}();