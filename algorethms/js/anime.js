let root  = document.getElementById("root")

function discribton(li){
    let category = ''
    for (let i2 = 0; i2 < anime_data[li]["anime_genres"].length;i2++){
        category += anime_data[li]["anime_genres"][i2] + "  "
    }
root.innerHTML = `
<div dir="rtl" class="anime_descrebtion_contener">
        <div class="anime_descrebton_img">
            <img src="${anime_data[li]["anime_img"]}" alt=" logo not found">
        </div>
        <div class="anime_information">
            <h2>${anime_data[li]["anime_titel"]}</h2>
            <p><h3>الوصف: </h3> ${anime_data[li]["anime_story"]}</p>
            <h4>${anime_data[li]["anime_info"][0]}</h5>
            <h4>النوع: ${category}</h5>
            <h4>${anime_data[li]["anime_info"][3]}</h5>
            <h4>${anime_data[li]["anime_info"][2]}</h5>
            <h4>${anime_data[li]["anime_info"][1]}</h5>
            <h4>${anime_data[li]["anime_info"][4]}</h5>
            <h4>${anime_data[li]["anime_info"][5]}</h5>
        </div>

        
        </div>

        <div class="seson_titel"> الحلقات </div>
        <div class="anime_last" id="episodes">

        </div>

        <div class="seson_titel">انميات ذات صلة</div>
        <div class="animes_seson" id="related">
            
        </div>
`



let episodes = document.getElementById("episodes")
for (let i3 = 0; i3 < anime_data[li]["anime_episodes_list"].length; i3++) {
    let episode = "episode"+ i3
    setTimeout(() => {
    episodes.innerHTML+= `
        <div class="anime_episodes">
            <div class="number">${i3}</div>
            
            <img src="${anime_data[li]["anime_img"]}" alt=" img not found" onclick = "anime_woch_page(${li} ,${i3})">
        </div>
        
    `
    }, 500);
    
}


let related = document.getElementById("related")
for (let i4 = 0; i4 < anime_data.length; i4++) {
    if(anime_data[i4]["anime_titel"].includes(anime_data[li]["anime_titel"])){
        if (anime_data[i4]["anime_titel"] != anime_data[li]["anime_titel"]) {
            related.innerHTML+= `
            <div class="anime_last_card" onclick="discribton(${i4})">
                <img src="${anime_data[i4]["anime_img"]}" alt=" img not found">
                <h2>${anime_data[i4]["anime_titel"]}</h2>
            </div>
           `
        }
        
    }
}



   
    


window.scrollTo({
    top:0,
    behavior: "smooth"
})

}



//console.log(ls)