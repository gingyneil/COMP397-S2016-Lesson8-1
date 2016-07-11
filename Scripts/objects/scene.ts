module objects {
/**
 * 
 * This abstract scene class used to create individual 
 * 
 */
    export abstract class Scene extends createjs.Container {

        constructor() {

            super();

            this.Start();
        }

/* 
Add game objects to my scene in this method

@method Start
@returns {void}
*/
            public Start():void{

                core.stage.addChild(this);
            }

/**
 * Updates game objects in my scene
 * @method Update
 * @returns {void}
 * 
 * 
 */
            public Update():void{


            }
    }
}