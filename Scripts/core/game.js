/// <reference path="_reference.ts"/>
/**
 * @author Tom Tsiliopoulos ttsliop@my.centennialcollege.ca
 * @studentID 300818577
 * @date July 4, 2016
 * @description This file is the entry point for the game
 * @version 0.01 - Initial version of the boilerplate
 */
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
var core;
(function (core) {
    // make a reference to the canvas element
    var canvas = document.getElementById("canvas");
    var helloLabel;
    var startButton; // reference to our button class
    //Declare scene variables
    var currentScene;
    var menu;
    // asset manifest for images and sounds
    var assetData = [
        { id: "startButton", src: "../../Assets/images/startButton.png" }
    ];
    /**
     * This method preloads assets for the game
     *
     * @method preload
     * @returns {void}
     *
     */
    function preload() {
        core.assets = new createjs.LoadQueue; //instantiates loader
        core.assets.installPlugin(createjs.Sound);
        core.assets.on("complete", init, this);
        core.assets.loadManifest(assetData);
    }
    /**
     * This method is the entry point for the application
     *
     * @method init
     * @return {void}
     */
    function init() {
        core.stage = new createjs.Stage(canvas); // instatiate the stage container
        core.stage.enableMouseOver(20);
        createjs.Ticker.framerate = 60;
        createjs.Ticker.on("tick", gameLoop); // create an event listener for the tick event
        //setup the default scene
        core.scene = config.Scene.MENU;
        changeScene();
    }
    /**
     * This is the main game loop
     *
     * @method gameLoop
     * @param {createjs.Event} event
     * @returns {void}
     */
    function gameLoop(event) {
        //calls the scenes's update
        currentScene.Update();
        core.stage.update(); // refreshes the stage
    }
    /**
     * This is the startButton click event handler
     *
     * @param {createjs.MouseEvent} event
     */
    function startButtonClick(event) {
        helloLabel.text = "clicked!";
    }
    function changeScene() {
        //Launch various Scenes
        switch (core.scene) {
            // Show the menu scene
            case config.Scene.MENU:
                core.stage.removeAllChildren();
                //menu = new scenes.Menu();
                // currentScene = menu;
                break;
            // Show the Play scene
            case config.Scene.PLAY:
                core.stage.removeAllChildren();
                //play = new scenes.Play();
                // currentScene = play;
                break;
            // Show the game over scene
            case config.Scene.OVER:
                core.stage.removeAllChildren();
                //over = new scenes.Over(); 
                // currentScene = over;
                break;
        }
    }
    core.changeScene = changeScene;
    /**
     * This is the main game method
     *
     * @method main
     * @returns {void}
     */
    //wait until the window object is finished loading then call the init method
    window.addEventListener("load", preload);
})(core || (core = {}));
// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ 
//# sourceMappingURL=game.js.map