




class Slyder{
    constructor(){
        this.imges=[]
        this.imges[0]= document.getElementById("slyd1")
        this.imges[1]= document.getElementById("slyd2")
        this.imges[2]= document.getElementById("slyd3")
        this.imges[3]= document.getElementById("slyd4")
        this.imges[4]= document.getElementById("slyd5")
        this.imges[5]= document.getElementById("slyd6")

        this.check_slyder = true
        this.cont = 0
        this.slyder_show()
        setInterval(() => {
            this.slyder_show()
        },5000);
    }
    slyder_show(){
        console.log (this.check_slyder)
        if (this.check_slyder == true) {
            if(this.cont == this.imges.length-1){
                this.check_slyder = false
                console.log("hi my frind")
            }else{
                this.cont = this.cont + 1
                this.imges[this.cont-1].style.right = "100%"
                console.log(this.cont)
                this.imges[this.cont].style.right = "1px"
            }
            
        }else if(this.check_slyder == false){
            console.log('hello')
            if(this.cont == 0){
                this.check_slyder = true
            }else{
                this.imges[this.cont].style.right = "-100%"
                console.log(this.cont)
                this.imges[this.cont-1].style.right = "1px"
                this.cont = this.cont - 1
            }
        }
        
        
    }
}

let slyd = new Slyder()