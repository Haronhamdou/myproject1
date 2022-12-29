
function houme(){
    root.innerHTML = `
    <!--------------- img slyder ----------------->
    <div id="slyder" class="slyder"></div>

    <div class="space"></div>

    <div id="anime_seson" onclick="anime_seson()" class="seson_titel"> يعرض الان</div>

    <div id="seson" class="animes_seson"></div>

    <div class="space"></div>

    <div class="seson_titel">اخر الحلقات المضافة</div>

    <div id="last" class="anime_last"></div>

    <div class="space"></div>

    `



    //  --------------   anime slyder  ----------------
    let list_card_img = ['./img/b.jpeg','./img/c.jpeg','./img/d.jpeg','./img/h.jpeg','./img/i.jpeg','./img/a.jpeg','./img/o.jpeg','./img/p.jpeg','./img/u.jpeg']
    let slyder_img = document.getElementById("slyder")
    class Slyder {
        constructor(){
            this.photo = []
            this.photo[0] = './img/a.jpeg'
            this.photo[1] = './img/b.jpeg'
            this.photo[2] = './img/c.jpeg'
            this.photo[3] = './img/d.jpeg'
            this.photo[4] = './img/h.jpeg'
            this.photo[5] = './img/i.jpeg'
            this.photo[6] = './img/p.jpeg'
            this.photo[7] = './img/o.jpeg'
            this.photo[8] = './img/u.jpeg'
            setInterval(() => {
                this.slyder_show()
            }, 5000);
            this.count = 0;
        }
        slyder_show(){
            if (this.count != this.photo.length-1 ) {
                this.count++
            }else{
                this.count = 0
            }
            slyder_img.style.backgroundImage = `url('${this.photo[this.count]}')`
        }
    }
    let new_slyder = new Slyder();
    
    // ---------------- anime seson ----------------
    
    // ------------------- anime last -------------
    let last = document.getElementById("last")
    list_card_img.forEach(index => {
        last.innerHTML+= `
            <div class="anime_last_card">
                <div class ="number">7</div>
                <img src="${index}" alt=" img not found">
                <h2>ANIME TITEL</h2>
            </div>
        `
    });
   
}  
function anime_seson(){
    let seson = document.getElementById("seson")
    seson.innerHTML =""
    for (let index1 = 0; index1 < anime_data.length; index1++) {
        if(anime_data[index1]["anime_info"][2] == "حالة الأنمي: يعرض الان"){
            seson.innerHTML+= `
            <div onclick="discribton(${index1})" class="anime_last_card">
                <a href=""><img src="${anime_data[index1]["anime_img"]}" alt=" img not found"></a>
                <h2>${anime_data[index1]["anime_titel"]}</h2>
            </div>
        `
        }
    }


}

houme()  

 
function cereat_accaont(){
    root.innerHTML=`
    <div class="login_contener">
      <form action="">
        <div><input type="text" placeholder="ادخل اسم المستخدم"></div>
        <div><input type="email" placeholder="ادخل لايميل"></div>
        <div><input type="password" placeholder="ادخل كلمة السر"></div>
        <div><button type="submit">انشاء حساب</button></div>
        <div>تسجيل الدخول</div>
      </form>
    </div>
    `
}