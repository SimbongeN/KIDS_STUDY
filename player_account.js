
function createPlayer(){
    event.preventDefault()
    var Player = {
        name: null,
        surname: null,
        life_points:3,
        game_points:0,
        eng_points:0,
        sci_points:0,
        math_points:0
    };
    Player.name = document.getElementById('name').value;
    Player.surname = document.getElementById('surname').value;
    localStorage.setItem('Player', JSON.stringify(Player));

    alert('Player created successfully');
    window.location.href = 'selection.html';
    
}
    

function loadPlayer(){
    //This functions loads the Player Object from LocalStorage -> Nkulleko
    if (localStorage.getItem('Player') !== null){
        if (window.confirm('Accout detected, do you want to log in with it?')){
            Player = JSON.parse(localStorage.Player);
            window.location.href = 'selection.html';
        }
    }else{
        console.log('Player Does Not Exist');
    }
    
}

function showInfo(){
    Player = JSON.parse(localStorage.getItem('Player'));

    if(Player.life_points <= 0) {
        if (window.confirm('Oops! You have no life points do you want to renew your life points?')){
            Player.life_points = 3;
            localStorage.setItem('Player', JSON.stringify(Player));
            alert('Life points renewed successfully');
        }
    }
    
    document.getElementById('name_surname').innerHTML = Player.name+' '+Player.surname;
    document.getElementById('total_points').innerHTML = Player.game_points + ' pts';
    
    let life_points = ''
    switch(Player.life_points){
        case 3: 
            life_points = '💖 💖 💖'
            break;
        case 2:
            life_points = '💖 💖 🩶'
            break;
        case 1:
            life_points = '💖 🩶 🩶'
            break;
        default:
            life_points = '🩶 🩶 🩶'
            break;
    }

    document.getElementById('life_points').innerHTML = life_points;
}

function clearData(){
    localStorage.clear();
}