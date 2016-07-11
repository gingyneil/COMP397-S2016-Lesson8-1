var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var objects;
(function (objects) {
    /**
     *
     * This abstract scene class used to create individual
     *
     */
    var Scene = (function (_super) {
        __extends(Scene, _super);
        function Scene() {
            _super.call(this);
            this.Start();
        }
        /*
        Add game objects to my scene in this method
        
        @method Start
        @returns {void}
        */
        Scene.prototype.Start = function () {
            core.stage.addChild(this);
        };
        /**
         * Updates game objects in my scene
         * @method Update
         * @returns {void}
         *
         *
         */
        Scene.prototype.Update = function () {
        };
        return Scene;
    }(createjs.Container));
    objects.Scene = Scene;
})(objects || (objects = {}));
//# sourceMappingURL=scene.js.map