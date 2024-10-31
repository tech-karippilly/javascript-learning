class Area{
    circle(radius){
        return Math.PI +radius *radius
    }

    square(side){
        return side * side
    }

    rectangle(length ,widht){
        return length *widht
    }

    triangle(base,height){
        return 0.5 * base *height
    }
}

class MyClass extends Area{
    main(){
        let choice;
        do{
            choice = prompt(
                "Choose an option:\n"+
                "1. Circle\n"+
                "2. Square\n"+
                "3. Rectangle\n"+
                "4. Triangle\n"+
                "5. Exit"
            )

            switch(choice){
                case "1":
                    this.circle();
                    break;
                case "2":
                    this.square();
                    break
                case "3":
                    this.rectangle();
                    break
                case "4":
                    this.triangle()
                    break
                case "5":
                    console.log("Exiting ...")
                    break;
                default:
                    console.log("Invalid choice...")
            }

        }while(choice !=='5')
    }
    circle() {
        const radius = parseFloat(prompt("Enter the radius of the circle:"));
        console.log(`The area of the circle is ${super.circle(radius).toFixed(2)}`);
    }
    square() {
        const side = parseFloat(prompt("Enter the side length of the square:"));
        console.log(`The area of the square is ${super.square(side).toFixed(2)}`);
    }
    rectangle() {
        const length = parseFloat(prompt("Enter the length of the rectangle:"));
        const width = parseFloat(prompt("Enter the width of the rectangle:"));
        console.log(`The area of the rectangle is ${super.rectangle(length, width).toFixed(2)}`);
    }
    triangle() {
        const base = parseFloat(prompt("Enter the base of the triangle:"));
        const height = parseFloat(prompt("Enter the height of the triangle:"));
        console.log(`The area of the triangle is ${super.triangle(base, height).toFixed(2)}`);
    }
    
}

const myApp = new MyClass();

myApp.main();