fetch('http://192.168.43.148:5000/api/test', {
    method: 'GET',
    headers: {
        'Accept': 'application/json',
    },
})
.then(response => response.json())
.then(data => {
    get_data(data)
} )




let anime_data = []


function get_data(data){
    for (let ii = 0; ii < data.length; ii++) {
        anime_data.push(data[ii]) 
    }
}
function list_anime(){
    root.innerHTML = `
    <div class="sersh_contener">
      <div onclick="sersh_anime()" class="sersh_button">بحث</div>
      <div><input id ="sersh_id" type="text" value="" placeholder="ادخل اسم الانمي"></div>
    </div>
    <div class="anime_type_option">
    <select id="type_option" onclick="sersh_type(this.value)">
      <option value="">نوع الانمي</option>
      <option value="دراما" >دراما</option>
      <option value="كوميدي">كوميدي</option>
      <option value="رومانسي">رومانسي</option>
      <option value="مدرسي">مدرسي</option>
      <option value="لعبة">لعبة</option>
      <option value="ميكا">ميكا</option>
      <option value="أطفال">أطفال</option>
      <option value="أكشن">أكشن</option>
      <option value="ايتشي">ايتشي</option>
      <option value="بوليسي">بوليسي</option>
      <option value="تاريخي">تاريخي</option>
      <option value="حريم">حريم</option>
      <option value="خارق للطبيعة">خارق للطبيعة</option>
      <option value="خيال ">خيال</option>
      <option value="رعب">رعب</option>
      <option value="رياضي">رياضي</option>
      <option value="سحر">سحر</option>
      <option value="سينين">سينين</option>
      <option value="شريحة من الحياة ">شريحة من الحياة </option>
      <option value="شوجو">شوجو</option>
      <option value="شونين">شونين</option>
      <option value="شياطين">شياطين</option>
      <option value="موسيقي">موسيقي</option>
      <option value="نفسي">نفسي</option>
      <option value="فنون قتالية">فنون قتالية</option>
      <option value="قوى خارقة">قوى خارقة</option>
      <option value="مصاص دماء ">مصاص دماء </option>
    </select>
  </div>
    <div id ="list_contener" class="anime_last"></div>
    <div class="next_befour_contener">
        <div id="befour" class="befour" onclick="next_befour('befour')">السابق</div>
        <div id="next" class="next" onclick="next_befour('next')">التالي</div>
    </div>
    `
    
    let list_contener = document.getElementById("list_contener")
    for (let li = 0; li < 32; li++) {
        list_contener.innerHTML += `
        <div onclick="discribton(${li})" class="anime_last_card">
            <img src="${anime_data[li]["anime_img"]}" alt=" img not found">
            <h2>${anime_data[li]["anime_titel"]}</h2>
        </div>
        `
        
    }
}
function sersh_anime(){
    let sersh_id = document.getElementById("sersh_id").value;
    list_contener.innerHTML = ""
    for (let i4 = 0; i4 < anime_data.length; i4++) {
        if (anime_data[i4]["anime_titel"].includes(sersh_id)) {
            list_contener.innerHTML += `
                <div onclick="discribton(${i4})" class="anime_last_card">
                    <img src="${anime_data[i4]["anime_img"]}" alt=" img not found">
                    <h2>${anime_data[i4]["anime_titel"]}</h2>
                </div>
        `
        }
    }
    sersh_id.value =""
}



function sersh_type(anime_type_option){
    list_contener.innerHTML = ''
    for (let i4 = 0; i4 < anime_data.length; i4++) {
        for (let i5 = 0; i5 <anime_data[i4]["anime_genres"].length; i5++) {
            if (anime_data[i4]["anime_genres"][i5] == anime_type_option) {
                setTimeout(() => {
                     list_contener.innerHTML += `
                        <div onclick="discribton(${i4})" class="anime_last_card">
                            <img src="${anime_data[i4]["anime_img"]}" alt=" img not found">
                            <h2>${anime_data[i4]["anime_titel"]}</h2>
                        </div>
                        `
                }, 500);
           
            }
            
        }        
    }
}




let li = 0 
let n = 32
function next_befour(next , befour){
    let nex = document.getElementById("next")
    let befr = document.getElementById("befour")
    if(next == "next"){
        li = li + 32
        n  = n + 32
    }else if(befour == "befour"){
        li = li - 64
        n  = n - 32
    }
    if (li >= 32) {
        befr.style.display = "block"
    }else{
        befr.style.display = "none"
    }
    if(n > anime_data.length){
        n = anime_data.length
        nex.style.display = "none"
    }
    let list_contener = document.getElementById("list_contener")
    list_contener.innerHTML = ""
    while (li < n) {
        list_contener.innerHTML += `
        <div onclick="discribton(${li})" class="anime_last_card">
            <img src="${anime_data[li]["anime_img"]}" alt=" img not found">
            <h2>${anime_data[li]["anime_titel"]}</h2>
        </div>
        `
      li++  
    } 
    if(next == "next"){
        li = li - 32
        n = n
    }else{
        li = li -64
        n = n -32
    }

    up_scroll()
}


function movei(){
    root.innerHTML = `
    <div id ="movei_contener" class="anime_last"></div>
    `
    let movei_contener = document.getElementById("movei_contener")
    for (let li = 0; li < anime_data.length; li++) {
        if (anime_data[li]["anime_info"][5] == "النوع: Movie") {
            setTimeout(() => {
              movei_contener.innerHTML += `
                <div onclick="discribton(${li})" class="anime_last_card">
                    <img src="${anime_data[li]["anime_img"]}" alt=" img not found">
                    <h2>${anime_data[li]["anime_titel"]}</h2>
                </div>
                `   
            }, 1000);
           
        }
        
    }
}


function anime_woch_page(li ,i3){
    root.innerHTML = `
    <div id ="anime_woch_page" class="anime_woch_contener">
    <div id="woch_number" class="titel_contener">الحلقة : ${i3}</div>
    <div id="episode_server" class="server_woch_contener"></div>
    <div class="ifram_contener">
    <iframe src="" allowfullscreen frameborder="0"></iframe>
    </div>
    <div class="next_befour_contener">
        <div id="befor_woch" class="befour" onclick="next_befour_woch(${li},${i3},'befour_woch')">السابق</div>
        <div id="next_woch" onclick="next_befour_woch(${li},${i3},'next_woch')">التالي</div>
    </div>
    </div>
    `
    
    let episode_server = document.getElementById("episode_server")
    for (let index = 0; index < anime_data[li]["anime_episodes_list"][i3]["episode"].length; index++) {
        const check_anime = anime_data[li]["anime_episodes_list"][i3]["episode"]
        episode_server.innerHTML+=`
        <div title="${check_anime[index]}" onclick="anime_woch_link(this.title)">السيرفر : ${index}</div>
        ` 
    }
    document.querySelector("iframe").src = `${anime_data[li]["anime_episodes_list"][i3]["episode"][0]}`


}
function anime_woch_link(link){
    let iframe = document.querySelector("iframe")
    iframe.src =`${link}`
}
let num = ""
let cont = 0
function next_befour_woch(li,i3,method_){
    let next_woch =document.getElementById("next_woch")
    let befor_woch =document.getElementById("befor_woch")
    let woch_number = document.getElementById("woch_number")
    if(cont == 0){
        num = i3
    }
    
    if(num <= 1){
        befor_woch.style.display = "none"
    }else{
        befor_woch.style.display = "block"
    }
    if (num == anime_data[li]["anime_episodes_list"].length){
        next_woch.style.display = "none"
    }else{
        next_woch.style.display = "block"
    }
    if(method_ == "next_woch"){
        woch_number.innerText = `الحلقة : ${num+1}`
        let episode_server = document.getElementById("episode_server")
        episode_server.innerHTML=""
        for (let index = 0; index < anime_data[li]["anime_episodes_list"][num+1]["episode"].length; index++) {
            const check_anime = anime_data[li]["anime_episodes_list"][num+1]["episode"]
            episode_server.innerHTML+=`
            <div title="${check_anime[index]}" onclick="anime_woch_link(this.title)">السيرفر : ${index}</div>
            ` 
        }
        document.querySelector("iframe").src = `${anime_data[li]["anime_episodes_list"][num+1]["episode"][0]}`
        num = num + 1
    }else{
        woch_number.innerText = `الحلقة : ${num-1}`
        let episode_server = document.getElementById("episode_server")
        episode_server.innerHTML=""
        for (let index = 0; index < anime_data[li]["anime_episodes_list"][num-1]["episode"].length; index++) {
            const check_anime = anime_data[li]["anime_episodes_list"][num-1]["episode"]
            episode_server.innerHTML+=`
            <div title="${check_anime[index]}" onclick="anime_woch_link(this.title)">السيرفر : ${index}</div>
            ` 
        }
        document.querySelector("iframe").src = `${anime_data[li]["anime_episodes_list"][num-1]["episode"][0]}`
        num = num-1
    }
    cont = 1
}
