import {addCommas} from './scriptAnimate.js';

const getApi = async (api) => {
     try {
          const response = await fetch(api);
          const responseJson = await response.json()

          return responseJson;
     } catch (err) {
          console.log(err)
     }
}

const getDataAll = () => {
     getApi('https://indonesia-covid-19.mathdro.id/api/provinsi')
     .then(value => {                    
          let indexImg = 8;
          const sectionBox = document.querySelector('.sec4');
          const section = document.querySelector('.sec5');

          section.style.display = 'none';

          value.data.forEach((data, indexData) => {
               if(indexData >= 8) {
                    valueData(data,++indexImg,sectionBox)
                    randomBackround(indexData);
               }
          })
     })
}

const getDataHeader = (data) => {
     getApi('https://covid19.mathdro.id/api/countries/indonesia/confirmed')
     .then(response => {
          const type = document.querySelectorAll('.sec2 .box h5');
          console.log(response);

          type[0].innerHTML = addCommas(response[0].confirmed).toLocaleString();
          type[1].innerHTML = addCommas(response[0].recovered).toLocaleString();
          type[2].innerHTML = addCommas(response[0].deaths).toLocaleString();
          type[3].innerHTML = addCommas(response[0].active).toLocaleString();
     })
}

const getDataSix = (data) => {
     getApi('https://indonesia-covid-19.mathdro.id/api/provinsi')
     .then(res => {
          let indexImg = 1;
          const sectionBox = document.querySelector('.sec4');
          const btn = document.querySelector('.sec5 button');

          btn.style.display = 'block';

          res.data.forEach((response,index) => {
               if(index <= 7) {
                    valueData(response,indexImg++,sectionBox);
                    randomBackround(index);
               }
          })
     })
}

const valueData = (data,indexImg,sectionBox) => {
     const box = document.createElement("div");
     const monthNames = ["January", "February", "March", "April", "May", "June",
                                             "July", "August", "September", "October", "November", "December"];
     const date = new Date();
     let hari = date.getDay() , bulan = date.getMonth(), tahun = date.getFullYear();
     box.classList.add('boxInfo');

     if (data.provinsi != 'Indonesia') {
          box.innerHTML += `
          <div class="boxInfoHeader">
               <img src="/img/Logo/${indexImg}.png" alt="${indexImg}.png">
          </div>
          <div class="boxInfoBody">
               <section>
                    <h3>${data.provinsi}</h3>
                    <span>Update ${hari} ${monthNames[bulan]} ${tahun}</span>

                    <div class="info">
                         <div class="type">
                              <h6>Sembuh</h6>
                              <p>${addCommas(data.kasusSemb).toLocaleString()}</p>
                         </div>
                         <div class="type">
                              <h6>Positif</h6>
                              <p>${addCommas(data.kasusPosi).toLocaleString()}</p>
                         </div>
                         <div class="type lastType">
                              <h6>Meninggal</h6>
                              <p>${addCommas(data.kasusMeni).toLocaleString()}</p>
                         </div>
                    </section>
               </div>
          </div>`;
     } else return

     sectionBox.appendChild(box);
}

const randomBackround = (indx) => {
     let element = document.querySelectorAll('.sec4 .boxInfo .boxInfoHeader');
     let r = Math.floor(Math.random() * 255);
     let g = Math.floor(Math.random() * 255);
     let b = Math.floor(Math.random() * 255);
     
     element[indx].style. background = `linear-gradient(-200deg,#4FD2D8, rgb(${r},${g},${b}))`;
}

getDataSix();
getDataHeader();

export {getDataSix,getDataAll}

// https://cors-anywhere.herokuapp.com/
// Hai, saya Renaldy. ini adalah aplikasi covid app yang digunakan untuk menampilkan data-data korban yang terkena dampak covid 19 yang ada di indonesia.

// Jika kamu mau menginstall aplikasi tersebut, ikuti langkah2 berikut :

// 1.) Pastikan kamu sudah terinstall node js dan npm di komputer kamu

// 2.) Setelah di download buka di command line dan tuliskan npm install, untuk menginstall directory tersebut

// 3.) tuliskan npm run build

// 4.) Lalu npm start

// 5.) Enjoy for your application :)

// git remote add origin https://github.com/reynaldysaputra/covid-app.git