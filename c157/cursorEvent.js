AFRAME.registerComponent("cursor-listener",{
    schema:{selecteditemId:{
        default:"",type:"string"
    }},

    init:function(){
        this.handleMouseEnterEvents()
    },
    handleMouseEnterEvents:function(){
        this.el.addEventListener("mouseenter",()=>{this.handlePlacesList()})
    },
    handlePlacesList:function(){
        const id=this.el.getAttribute("id")
        var placesId=["Taj_Mahal","Budapest","Eiffel_Tower","NYC"]
        if(placesId.includes(id)){
            const placeContainer=document.querySelector("#placeContainer")
            placeContainer.setAttribute("cursor-listener",{selecteditemId:id})
            this.el.setAttribute("material",{color:"orange", opacity:1})
        }
    }
})