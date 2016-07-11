var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var objects;
(function (objects) {
    /**this is a generic label class for the game boilerplate
     *
     * @export
     * @class Label
     * @extends {createjs.text}     *
     *
     */
    var Label = (function (_super) {
        __extends(Label, _super);
        function Label(labelString, fontSize, fontFamily, fontColor, x, y) {
            _super.call(this, labelString, (fontSize + " " + fontFamily), fontColor);
            this.labelString = labelString;
            this.fontSize = fontSize;
            this.fontFamily = fontFamily;
            this.fontColor = fontColor;
            this.regX = this.getMeasuredWidth() * .5;
            this.regY = this.getMeasuredHeight() * .5;
            // assign label coordinates
            this.x = x;
            this.y = y;
        }
        return Label;
    }(createjs.Text));
    objects.Label = Label;
})(objects || (objects = {}));
//# sourceMappingURL=label.js.map