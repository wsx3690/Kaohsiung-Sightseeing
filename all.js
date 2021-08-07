//透過API撈取景點資料
var data = [];
var zone = '苓雅區'
const content = document.querySelector('.content');

var xhr = new XMLHttpRequest();
  xhr.open('get', 'https://raw.githubusercontent.com/hexschool/KCGTravel/master/datastore_search.json', true);
  xhr.send(null);
  xhr.onload = function () {
      data = JSON.parse(xhr.responseText).result.records;
      console.log(data);
      init();
  }


//初始化功能
function init(){       
    let str = `<p>${zone}</p>`;
    const areaData = data.filter(item=>item.Zone===zone);
    areaData.forEach(function(item,index){
        str += renderListItem(item,index);  
    });
    if(areaData.length){
        content.innerHTML = str;
    }else{
        content.innerHTML = `<p>${zone} <p>無資料</p></p> `;
    }
}

//渲染景點畫面
function renderListItem(item,index){
    return `
    <div class="contentItem">
        <div class="contentPhoto" style="background-image:url('${item.Picture1}')">
        <p>${item.Name}</p><span>${item.Zone}</span>
        </div>
        
        <div class="contentInfo">
          <p><img src="img/icons_clock.png" alt="clock logo">&nbsp; ${item.Opentime}</p>
          <p><img src="img/icons_pin.png" alt="pin logo">&nbsp; ${item.Add}</p>
          <span><img src="img/icons_phone.png" alt="phone logo">&nbsp; ${item.Tel}</span>
          <span><img src="img/icons_tag.png" alt="tag logo">&nbsp; ${item.Ticketinfo}</span>
        </div>
    </div>`
}

//https://codepen.io/jasmin0410/pen/MWwOLJQ

//篩選邏輯
//下拉選單選擇高雄行政區
const district = document.querySelector(".district");
const obj = {};
district.addEventListener("change",function(e){

    if(!areaData.Zone){

    }
})


//熱門行政區
const hotDistrict = document.querySelector(".hotDistrict ul");
hotDistrict.addEventListener("click",function(e){
    if(e.target.tagName.toLowerCase() === 'button'){
        zone = e.target.textContent;
        init();
    }
});




