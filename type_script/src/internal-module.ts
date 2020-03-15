
interface IRectangle {
    height: number;
    width: number;
    shape() : number;

}

namespace Shape {

    export class Rectangle implements IRectangle {

        height =10;
        width = 20;

        shape() {
            return this.height + this.width;
        }

    }
}