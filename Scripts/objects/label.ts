module objects {

    /**this is a generic label class for the game boilerplate
     * 
     * @export
     * @class Label
     * @extends {createjs.text}     * 
     * 
     */

    export class Label extends createjs.Text {

        constructor(
            private labelString: string,
            private fontSize: string,
            private fontFamily: string,
            private fontColor: string,
            x: number,
            y: number) {

            super(labelString, (fontSize + " " + fontFamily), fontColor);
           
           this.regX = this.getMeasuredWidth() *.5;
           this.regY = this.getMeasuredHeight() *.5;

           // assign label coordinates
            this.x = x;
            this.y = y;
        }
    }
}