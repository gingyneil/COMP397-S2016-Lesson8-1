module scenes {

    export class Menu extends objects.Scene {

        private _menuLabel: objects.Label;
        private _startButton: objects.Button;

        /**
         * creates an instance of Menu
         */
        constructor() {
            super();

        }

        public Start(): void {
            // add Menu Label
            this._menuLabel = new objects.Label(
                "MENU SCENE", "60px", "Consolas", "#000000", 320, 240
            );
            this.addChild(this._menuLabel);

            //add the start button
            this._startButton = new objects.Button(
                "startButton",320, 420, true
                
                )
                    this.addChild(this._startButton);

            //Start button even listener
            this._startButton.on("click",this._startButtonClick,this);

            //add this scene to the global scene container
            core.stage.addChild(this);
}

public Update():void{

    // scene updateds happen here..
}

// event handlers**************************************************

private _startButtonClick(event:createjs.MouseEvent):void {

    //Switch the scene
    //core.scene = config.Scene.PLAY;
    // core.changeScene();
    //
    //For now change label text to "clicked"
    this._menuLabel.text = "Clicked";
}


    }
}

