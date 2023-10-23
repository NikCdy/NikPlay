const music = new Audio ('audio/1.mp3');
//music.play();

const songs = [
    {
    id:1,
    songName: 'On My Way'<br>
    <div class='sutitle'>Alan Walker</div>,
    poster:"img/1.jpg"
},
{
    id:2,
    songName: 'With You'<br>
    <div class='sutitle'>AP Dillon</div>,
    poster:"img/2.jpg"
},
{
    id:3,
    songName: 'Dil Jhoom'<br>
    <div class='sutitle'>Arijit Singh</div>,
    poster:"img/3.jpg"
},
{
    id:4,
    songName: 'Dil Nu'<br>
    <div class='sutitle'>AP Dilon</div>,
    poster:"img/4.jpg"
},
{
    id:5,
    songName: 'Suna Suna Sundari ( सुन सुन सुन्दरी )'<br>
    <div class="subtitle">Dayahang Rai, Miruna Magar</div>,
    poster:"img/5.jpg"
},
{
    id:6,
    songName: 'Prem Kahani'<br>
    <div class="subtitle">Rahul Vaidya</div>,
    poster:"img/6.jpg"
},
{
    id:7,
    songName: 'Dil Nu'<br>
    <div class='sutitle'>AP Dilon</div>,
    poster:"img/7.jpg"
},
{
    id:8,
    songName: 'Dil Nu'<br>
    <div class='sutitle'>AP Dilon</div>,
    poster:"img/8.jpg"
},
{
    id:9,
    songName: 'Dil Nu'<br>
    <div class='sutitle'>AP Dilon</div>,
    poster:"img/9.jpg"
},
]

Array.from(document.getElementsByClassName('songItem')).forEach((e,i) => {
   e.getElementsByTagName('img')[0].src = songs[i].poster;
   e.getElementsByTagName('h5')[0].innerHTML = songs[i].songName; 
});

let masterPlay =document.getElementById('masterPlay');
let wave =document.getElementById('wave');

masterPlay.addEventListener('click', () => {
    if (music.paused || music.starter <= 0) {
        music.play();
        wave.classList.add('active1');
        masterPlay.classList.remove('bx-play-circle');
        masterPlay.classList.add('bx-pause-circle');
    }else {
        music.pause();
        wave.classList.remove('active1');
        masterPlay.classList.add('bx-play-circle');
        masterPlay.classList.remove('bx-pause-circle');
    }
})


/*For Popular Song*/
let pop_song_left =document.getElementById('pop_song_left');
let pop_song_right =document.getElementById('pop_song_right');
let pop_song =document.getElementsByClassName('pop_song')[0];


pop_song_right.addEventListener('click', ()=> {
    pop_song.scrollLeft += 330;
});
pop_song_left.addEventListener('click', ()=> {
    pop_song.scrollLeft -= 330;
});

/*For Popular Artist*/
let pop_art_left =document.getElementById('pop_song_left');
let pop_art_right =document.getElementById('pop_song_right');
let artists_art =document.getElementsByClassName('artists_art')[0];

pop_art_right.addEventListener('click', ()=> {
    artists_art.scrollLeft += 330;
});
pop_art_left.addEventListener('click', ()=> {
    artists_art.scrollLeft -= 330;
});
