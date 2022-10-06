AFRAME.registerComponent("tour",{
init:function(){
    this.placeContainer=el
    this.createCard()
},

createCard:function(){
    const thumbnailref=[
        {
            id:"Taj_Mahal",
            title:"Taj Mahal",
            url:"./assets/Taj_Mahal_in_India_-_Kristian_Bertel.jpeg"
        },
        {
            id:"Budapest",
            title:"Budapest",
            url:"./assets/budapest_leader.jpeg"
        },
        {
            id:"Eiffel_Tower",
            title:"Eiffel Tower",
            url:"./assets/58d958617d1fb227008b4c7e.webp"
        },
        {
            id:"NYC",
            title:"New York City",
            url:"./assets/171109_08_11_37_5DS_0545__1_.jpeg"
        },
    ]
    var previousX_pos=-60
    for(var item of thumbnailref){
        const x1=previousX_pos+25
        const y1=-10
        const z1=-40
        const pos={x:x1,y:y1,z:z1}
        previousX_pos=x1
        const thumbnail=this.create_thumbnail(item)
        const border=this.createBorder(pos,item.id)
        border.appendChild(thumbnail)
        this.placeContainer.appendChild(border)
    }
},

createBorder:function(position,id){
    var entity=document.createElement("a-entity")
    entity.setAttribute("id",id)
    entity.setAttribute("visible",true)
    entity.setAttribute("position",position)
    entity.setAttribute("geometery",{primitive:"ring",radiusInner:9, radiusOuter:10 })
    entity.setAttribute("material",{color:"orange", opacity:1})
    entity.setAttribute("cursor-listener",{})
    return entity
},

create_thumbnail:function(item){
    var entity=document.createElement("a-entity")
    entity.setAttribute("visible",true)
    entity.setAttribute("geometery",{primitive:"circle",radius:9})
    entity.setAttribute("material",{src:item.url})
}
})