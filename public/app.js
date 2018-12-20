if(navigator.onLine !== true){
    console.log('offline')
    function fvrt(){
        var fetch = document.getElementById('fvrtFetch');
        var obj = JSON.parse(localStorage.getItem('userFvrt'));
        console.log(obj);
        for(var i = 0; i <= obj.length; i++){
            var value = obj[i];
            console.log(value);
            var cardDivs = document.createElement('div');
            cardDivs.setAttribute('id', 'fetchImage');
            cardDivs.setAttribute('class', 'cardFvrt');
            cardDivs.setAttribute('class', 'col-md-4 col-lg-3 col-sm-6');
            var imgBoxs = document.createElement('img');
            imgBoxs.setAttribute('id', 'imgBox');
            // imgBoxs.style.width = '200px';
            // imgBoxs.style.width = '200px';
            imgBoxs.setAttribute('class', 'card-img-top');
            // imgBoxs.setAttribute('onClick', 'image()')
            imgBoxs.src = value.file;
            var titleDivs = document.createElement('div');
            titleDivs.setAttribute('id', 'titleDiv');
            // titleDivs.setAttribute('id', key);
            titleDivs.setAttribute('class', 'card-img-top');
            var headTitle = document.createElement('h4');
            headTitle.setAttribute('id', 'head5');
            headTitle.innerHTML = value.name;
            var paraModels = document.createElement('p')
            paraModels.setAttribute('id', 'paraModel');
            var prizeSpan = document.createElement('span');
            prizeSpan.innerHTML = 'Rs:' + value.price;
            // paraModels.innerHTML = objValProp.model;
            var myDiv = document.createElement('div');
            // myDiv.style.display = 'inline';
            var btn = document.createElement('button');
            myDiv.setAttribute('onClick', 'detail(this)');
            // myDiv.setAttribute('id', key);
            var btnTxt = document.createTextNode('Detail!');
            btn.setAttribute('class', 'button');
            var j = document.createElement('div')
            j.setAttribute('class', 'far fa-star star')
            // i.setAttribute('id', id)
            j.style.cursor = 'pointer'
            j.setAttribute('onclick', 'addFavorite(this)')
            btn.appendChild(btnTxt);
            
            
            
            cardDivs.appendChild(imgBoxs);
            cardDivs.appendChild(titleDivs);
            titleDivs.appendChild(headTitle);
            paraModels.appendChild(prizeSpan);
            titleDivs.appendChild(paraModels);
            cardDivs.appendChild(titleDivs);
            fetch.appendChild(cardDivs);
            titleDivs.appendChild(myDiv);
            myDiv.appendChild(btn);
            titleDivs.appendChild(j)
            // break;
        }

    }
}else{
    console.log('online')
}






var emailRef = document.getElementById('email');
var passwordRef = document.getElementById('password');
var usernameRef = document.getElementById('username');
var phoneRef = document.getElementById('phone');
var errorRef = document.getElementById('error');
var emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;


function emailValidate() {
    var emails = document.getElementById('email')
    var emailVal = emails.value;
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (emailVal === ' ') {
        var err = document.getElementById('errEmail');
        err.style.fontSize = '0.8em'
        err.innerHTML = '*please don`t left spaces'
        err.style.color = 'red'
    }
    else if (!re.test(emailVal) && emailVal.length >= 1) {
        var err = document.getElementById('errEmail');
        err.style.fontSize = '0.8em'
        err.innerHTML = '*Enter email correctly'
        err.style.color = 'red'
    }
    else {
        document.getElementById('errEmail').innerHTML = ''
    }
    btnValidate()

}

var submitAnAd = document.getElementById('submitAnAd')

function userAuth() {
    if (currentUserUID !== null) {
        submitAnAd.disabled = false
        submitAnAd.style.opacity = '1'
    } else {
        submitAnAd.disabled = true
        submitAnAd.style.opacity = '0.7'
        submitAnAd.title = 'Plese LogIn'
    }
}

function passValidate() {
    var pass = document.getElementById('password')
    var res = ("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");
    var passVal = pass.value;
    if (passVal.indexOf(' ') !== -1) {
        var err = document.getElementById('errPass');
        err.style.fontSize = '0.8em'
        err.innerHTML = '*please don`t left spaces'
        err.style.color = 'red'
    }
    else if (!passVal.match(res)) {
        var err = document.getElementById('errPass');
        err.style.fontSize = '0.8em'
        err.innerHTML = 'upper and lowercas and special characters'
        err.style.color = 'red'
    }

    else {
        document.getElementById('errPass').innerHTML = ''
    }
    btnValidate()

}
function nameValidate() {
    var name = document.getElementById('username');
    var nameVal = name.value;
    var reg = new RegExp('^[0-9]+$');
    if (nameVal.indexOf('  ') !== -1) {
        var err = document.getElementById('errName');
        err.style.fontSize = '0.8em'
        err.innerHTML = '*please don`t left spaces'
        err.style.color = 'red'
    }
    else if (nameVal.length <= 2 && nameVal.length >= 1) {
        var err = document.getElementById('errName');
        err.style.fontSize = '0.8em'
        err.innerHTML = '*Name should be greater than 4 characters'
        err.style.color = 'red'
    }
    else if (reg.test(nameVal)) {
        var err = document.getElementById('errName');
        err.style.fontSize = '0.8em'
        err.innerHTML = '*Donot use numbers'
        err.style.color = 'red'
    }
    else {
        document.getElementById('errName').innerHTML = ''
    }
    btnValidate()

}


function btnValidate() {
    var err1 = document.getElementById('err')
    var err2 = document.getElementById('userErr')
    var err3 = document.getElementById('passwordErr')
    var err4 = document.getElementById('emailErr')


}
//sign up 
function signup() {

    firebase.auth().createUserWithEmailAndPassword(emailRef.value, passwordRef.value)
        .then((success) => {
            swal("Successfull", "", "success");
            console.log('signup successfully', success);
            location = './login.html';
        })
        .catch((error) => {
            swal("Something went wrong", " ", "error");
            console.error('something went wrong', error);
            errorRef.innerHTML = error.message;

        })
}


//login
function login() {
    console.log('login invoke', emailRef.value, passwordRef.value);
    firebase.auth().signInWithEmailAndPassword(emailRef.value, passwordRef.value)
        .then((success) => {
            swal("Successfull", "", "success");
            console.log('signin successfully', success.user);
            localStorage.setItem('currentUserUid', success.user.uid)
            location = './index.html';
        })
        .catch((error) => {
            swal("Something went wrong", "", "error");
            console.log('something went wrong', error)
        })
}
function logInn() {
    location = './login.html'
}

function logOut() {
    console.log('log out ho rha hai');
    firebase.auth().signOut()
        .then(function () {
            localStorage.clear()
            swal({
                position: 'center',
                type: 'success',
                title: 'You are successfully logout',
                showConfirmButton: false,
                timer: 1500
            })
            setTimeout(() => {
                location = './index.html'
            }, 1500)
        })

}


function upload() {
    // console.log('ok')
    if (currentUserUID !== null) {

        location = './submit.html'
    }
    else {
        swal({
            position: 'center',
            type: 'error',
            title: 'Please LogIn',
            showConfirmButton: true,
            // timer: 1500
        })
        setTimeout(() => {
            location = './login.html'
        }, 4000)

    }
}
function nameSub() {
    var name = document.getElementById('pName');
    var nameVal = name.value;
    var reg = new RegExp('^[0-9]+$');
    if (nameVal.indexOf('  ') !== -1) {
        var err = document.getElementById('nameErr');
        err.style.fontSize = '0.8em'
        err.innerHTML = '*please don`t left spaces'
        err.style.color = 'red'
    }
    else if (nameVal.length <= 2 && nameVal.length >= 1) {
        var err = document.getElementById('nameErr');
        err.style.fontSize = '0.8em'
        err.innerHTML = '*Name should be greater than 4 characters'
        err.style.color = 'red'
    }
    else if (reg.test(nameVal)) {
        var err = document.getElementById('nameErr');
        err.style.fontSize = '0.8em'
        err.innerHTML = '*Donot use numbers'
        err.style.color = 'red'
    }
    else {
        document.getElementById('nameErr').innerHTML = ''
    }

}

function price() {
    var name = document.getElementById('price');
    var nameVal = name.value;
    var reg = /^([1-9][0-9]{,2}(,[0-9]{3})*|[0-9]+)(\.[0-9]{1,9})?$/;
    if (nameVal.indexOf(' ') !== -1) {
        var err = document.getElementById('prErr');
        err.style.fontSize = '0.8em'
        err.innerHTML = '*please don`t left spaces'
        err.style.color = 'red'
    }

    else if (!nameVal.match(reg)) {
        var err = document.getElementById('prErr');
        err.style.fontSize = '0.8em'
        err.innerHTML = '*Donot use Alphabet'
        err.style.color = 'red'
    }
    else {
        document.getElementById('prErr').innerHTML = ''
    }
}
function phone() {
    var name = document.getElementById('phone');
    var nameVal = name.value;
    var reg = /^([1-9][0-9]{,2}(,[0-9]{3})*|[0-9]+)(\.[0-9]{1,9})?$/;
    if (nameVal.indexOf(' ') !== -1) {
        var err = document.getElementById('phErr');
        err.style.fontSize = '0.8em'
        err.innerHTML = '*please don`t left spaces'
        err.style.color = 'red'
    }

    else if (!nameVal.match(reg)) {
        var err = document.getElementById('phErr');
        err.style.fontSize = '0.8em'
        err.innerHTML = '*Donot use Alphabet'
        err.style.color = 'red'
    }
    else {
        document.getElementById('phErr').innerHTML = ''
    }

}

function model() {
    var name = document.getElementById('model');
    var nameVal = name.value;
    // var reg = /^([1-9][0-9]{,2}(,[0-9]{3})*|[0-9]+)(\.[0-9]{1,9})?$/;
    if (nameVal.indexOf('  ') !== -1) {
        var err = document.getElementById('moErr');
        err.style.fontSize = '0.8em'
        err.innerHTML = '*please don`t left spaces'
        err.style.color = 'red'
    }


    else {
        document.getElementById('moErr').innerHTML = ''
    }

}
function btnLogIn(){
    location = './login.html'
}

var fetch = document.getElementById('fech')
var imageUrl;
function previewFile() {
    var file = document.querySelector('input[type=file]').files[0];
    console.log(file, 'file')
    var read = new FileReader();
    console.log(read, 'reader')

    read.addEventListener("load", function () {
        imageUrl = read.result;
        console.log(imageUrl, "image url")
        document.getElementById('file').innerHTML = "File uploaded"
    }, false)
    if (file) {
        var fileReader = read.readAsDataURL(file);
    }
}
var adsUID;
function savetoDB() {

    var select = document.getElementById('catag')
    var name = document.getElementById('pName')
    var price = document.getElementById('price')
    var phone = document.getElementById('phone')
    var modl = document.getElementById('model')
    var file = document.getElementById('file')
    var dscption = document.getElementById('Discription')
    var address = document.getElementById('address')
    var currentUserUID = localStorage.getItem('currentUserUid')


    var data = {
        select: select.value,
        name: name.value,
        price: price.value,
        phone: phone.value,
        model: modl.value,
        dscrption: dscption.value,
        file: imageUrl,
        address: address.value,
        userUID: currentUserUID
    }
    adsUID = data.userUID
    localStorage.setItem('adsUID', adsUID)
    // console.log(data.file, 'picture')
    console.log(data.dscrption, 'description')

    console.log(data, 'donne')
    // location = './home.html'
    //console.log(select.value, 'done')
    // console.log(name,price, 'adds')
    var currentUserUID = localStorage.getItem('currentUserUid')
    if (data.name !== '' && data.select !== '' && data.price !== '' && data.phone !== '' && data.file !== '' && data.dscrption !== '') {
        console.log('fire')
        firebase.database().ref('/' + currentUserUID + '/').push(data)
            .then(() => {
                swal({
                    position: 'center',
                    type: 'success',
                    title: 'Submit successful',
                    showConfirmButton: false,
                    timer: 1500
                })
                setTimeout(() => {
                    location = './index.html'
                }, 1500)

                console.log('succcess')
                location = './index.html'
            })
    }
    else {
        swal("Something went wrong", " ", "error");
        console.error('plese fill ')
    }


}

function out() {
    firebase.database().ref('/').on('child_added', (snaps) => {
        // console.log(snaps.val())
        for (var key in snaps.val()) {
            // console.log(key)
            var value = snaps.val()[key]
            if (value.file !== undefined) {

                var cardDivs = document.createElement('div');
                cardDivs.setAttribute('id', 'fetchImage');
                cardDivs.setAttribute('class', 'card');
                cardDivs.setAttribute('class', 'col-md-4 col-lg-3 col-sm-6');
                var imgBoxs = document.createElement('img');
                imgBoxs.setAttribute('id', 'imgBox');
                imgBoxs.setAttribute('class', 'card-img-top');
                // imgBoxs.setAttribute('onClick', 'image()')
                imgBoxs.src = value.file;
                var titleDivs = document.createElement('div');
                titleDivs.setAttribute('id', 'titleDiv');
                titleDivs.setAttribute('id', key);
                titleDivs.setAttribute('class', 'card-img-top');
                var headTitle = document.createElement('h4');
                headTitle.setAttribute('id', 'head5');
                headTitle.innerHTML = value.name;
                var paraModels = document.createElement('p')
                paraModels.setAttribute('id', 'paraModel');
                var prizeSpan = document.createElement('span');
                prizeSpan.innerHTML = 'Rs:' + value.price;
                // paraModels.innerHTML = objValProp.model;
                var myDiv = document.createElement('div');
                // myDiv.style.display = 'inline';
                var btn = document.createElement('button');
                myDiv.setAttribute('onClick', 'detail(this)');
                myDiv.setAttribute('id', key);
                var btnTxt = document.createTextNode('Detail!');
                btn.setAttribute('class', 'button');
                var i = document.createElement('div')
                i.setAttribute('class', 'far fa-star star')
                i.style.cursor = 'pointer'
                i.setAttribute('onclick', 'addFavorite(this)')
                btn.appendChild(btnTxt);



                cardDivs.appendChild(imgBoxs);
                cardDivs.appendChild(titleDivs);
                titleDivs.appendChild(headTitle);
                paraModels.appendChild(prizeSpan);
                titleDivs.appendChild(paraModels);
                cardDivs.appendChild(titleDivs);
                fetch.appendChild(cardDivs);
                titleDivs.appendChild(myDiv);
                myDiv.appendChild(btn);
                titleDivs.appendChild(i)


            }
        }
    })



    var userId = localStorage.getItem('currentUserUid')

    // // console.log(userId)
    if (userId === null) {
        document.getElementById('LogIn').style.display = 'inline-block'
        document.getElementById('logOut').style.display = 'none'
        document.getElementById('adsBtn').style.display = 'none'
    } else {
        document.getElementById('LogIn').style.display = 'none'
        document.getElementById('logOut').style.display = 'inline-block'
        document.getElementById('adsBtn').style.display = 'inline-block'
    }
}

function favorite() {
    location = './favorite.html'
}

var localFvrt = [];
function localFavorite() {
    if (currentUserUID !== null) {

        firebase.database().ref('/' + currentUserUID + '/wishlist/').on('child_added', (snapshot) => {
            // console.log(snapshot.val())
            for (var key in snapshot.val()) {
                // console.log(key)
                array.push(key)
            }
        })
        firebase.database().ref('/').on('child_added', (fvrtSnap) => {
            for (var key1 in fvrtSnap.val()) {
                // console.log(key1)
                var value = fvrtSnap.val()[key1]
                for (var i = 0; i < array.length; i++) {
                    var valueOfFvrt = [array[i]]
                    if (key1 === array[i]) {
                        console.log(value)
                        localFvrt.push(value)
                        console.log(localFvrt)
                        localStorage.setItem('userFvrt' , JSON.stringify(localFvrt))
                    }
                }
            }
        })

    }
}

var currentUserUID = localStorage.getItem('currentUserUid')
function addFavorite(favorite) {

    var add_wishlist = true


    if (favorite.style.color !== 'red') {
        console.log(favorite.parentElement.id)
        favorite.setAttribute('class', 'fas fa-star star')
        favorite.style.color = 'red'
        if (currentUserUID !== null) {
            firebase.database().ref('/' + currentUserUID + '/wishlist/' + favorite.parentElement.id).push(add_wishlist)
                .then(() => {
                    swal({
                        position: 'center',
                        type: 'success',
                        title: 'Add to Favorite',
                        showConfirmButton: false,
                        timer: 2000
                    })
                })
        } else {
            firebase.database().ref('/wishlist/' + favorite.parentElement.id).push(add_wishlist)
                .then(() => {
                    swal({
                        position: 'center',
                        type: 'success',
                        title: 'Add to Favorite',
                        showConfirmButton: false,
                        timer: 2000
                    })
                })
        }
    } else if (favorite.style.color === 'red') {
        favorite.setAttribute('class', 'far fa-star star')
        favorite.style.color = 'black'
        if (currentUserUID !== null) {
            firebase.database().ref('/' + currentUserUID + '/wishlist/' + favorite.parentElement.id).remove()
                .then(() => {
                    swal({
                        position: 'center',
                        type: 'success',
                        title: 'Removed from Favorite',
                        showConfirmButton: false,
                        timer: 2000
                    })
                })
        } else {
            firebase.database().ref('/wishlist/' + favorite.parentElement.id).remove()
                .then(() => {
                    swal({
                        position: 'center',
                        type: 'success',
                        title: 'Removed from Favorite',
                        showConfirmButton: false,
                        timer: 2000
                    })
                })
        }
    }


}
var fetchFvrt = document.getElementById('fvrtFetch')
var array = []
function fvrt() {
    if (currentUserUID !== null) {

        firebase.database().ref('/' + currentUserUID + '/wishlist/').on('value', (snapshot) => {
            // console.log(snapshot.val())
            for (var key in snapshot.val()) {
                // console.log(key)
                array.push(key)
            }
        })
        firebase.database().ref('/').on('child_added', (fvrtSnap) => {
            for (var key1 in fvrtSnap.val()) {
                // console.log(key1)
                var value = fvrtSnap.val()[key1]
                // console.log(value)
                for (var i = 0; i < array.length; i++) {
                    var valueOfFvrt = [array[i]]
                    // console.log(valueOfFvrt)
                    // for (var key3 in valueOfFvrt) {
                    //     console.log(key3)
                    if (key1 === array[i]) {
                        var cardDivs = document.createElement('div');
                        cardDivs.setAttribute('id', 'fetchImage');
                        cardDivs.setAttribute('class', 'cardFvrt');
                        cardDivs.setAttribute('class', 'col-md-3');
                        var imgBoxs = document.createElement('img');
                        imgBoxs.setAttribute('id', 'imgBox');
                        imgBoxs.setAttribute('class', 'card-img-top');
                        imgBoxs.src = value.file;
                        var titleDivs = document.createElement('div');
                        titleDivs.setAttribute('id', 'titleDiv');
                        titleDivs.setAttribute('class', 'card-img-top');
                        var headTitle = document.createElement('h4');
                        headTitle.setAttribute('id', 'head5');
                        headTitle.innerHTML = value.name;
                        var paraModels = document.createElement('p')
                        paraModels.setAttribute('id', 'paraModel');
                        var prizeSpan = document.createElement('span');
                        prizeSpan.innerHTML = 'Rs:' + value.price;
                        var myDiv = document.createElement('div');
                        // myDiv.style.display = 'inline';
                        var btn = document.createElement('button');
                        myDiv.setAttribute('onClick', 'detail(this)');
                        // myDiv.setAttribute('id', key2);
                        var btnTxt = document.createTextNode('Detail!');
                        btn.setAttribute('class', 'button');
                        var i = document.createElement('div')
                        i.setAttribute('class', 'far fa-star star')
                        // i.setAttribute('id', id)
                        i.style.cursor = 'pointer'
                        i.setAttribute('onclick', 'addFavorite(this)')
                        btn.appendChild(btnTxt);



                        cardDivs.appendChild(imgBoxs);
                        cardDivs.appendChild(titleDivs);
                        titleDivs.appendChild(headTitle);
                        paraModels.appendChild(prizeSpan);
                        titleDivs.appendChild(paraModels);
                        cardDivs.appendChild(titleDivs);
                        fetchFvrt.appendChild(cardDivs);
                        titleDivs.appendChild(myDiv);
                        myDiv.appendChild(btn);
                        cardDivs.appendChild(i)
                        matchFavorites()
                    }
                }
            }
        })
    }

}

function matchFavorites() {


    if (currentUserUID !== null) {
        firebase.database().ref('/' + currentUserUID + '/wishlist/').on('child_added', (snapshot) => {
            // console.log(snapshot.key)
            var key = snapshot.key

        })
    }

}



var currentUserUID = localStorage.getItem('currentUserUid')
var AdCate = document.getElementById('catag')
var adTitle = document.getElementById('search')
var div = document.getElementById('fech')

// console.log(div)
function search() {
    var category = AdCate.value
    var serch = adTitle.value
    // console.log(category)
    div.innerHTML = "",
        firebase.database().ref('/').on('child_added', (snapShot) => {


            for (var key in snapShot.val()) {
                var value = snapShot.val()[key];
                // console.log(value)

                if (value.select === category || value.name.toLowerCase() === serch.toLowerCase() || value.select.toLowerCase() === serch.toLowerCase()) {

                    // console.log(value)

                    var cardDivs = document.createElement('div');
                    cardDivs.setAttribute('id', 'fetchImage');
                    cardDivs.setAttribute('class', 'card');
                    cardDivs.setAttribute('class', 'col-md-3');
                    var imgBoxs = document.createElement('img');
                    imgBoxs.setAttribute('id', 'imgBox');
                    imgBoxs.setAttribute('class', 'card-img-top');
                    // imgBoxs.setAttribute('onClick', 'image()')
                    imgBoxs.src = value.file;
                    var titleDivs = document.createElement('div');
                    titleDivs.setAttribute('id', 'titleDiv');
                    // titleDivs.setAttribute('id', key2);
                    titleDivs.setAttribute('class', 'card-img-top');
                    var headTitle = document.createElement('h4');
                    headTitle.setAttribute('id', 'head5');
                    headTitle.innerHTML = value.name;
                    var paraModels = document.createElement('p')
                    paraModels.setAttribute('id', 'paraModel');
                    var prizeSpan = document.createElement('span');
                    prizeSpan.innerHTML = 'Rs:' + value.price;
                    // paraModels.innerHTML = objValProp.model;
                    var myDiv = document.createElement('p');
                    var btn = document.createElement('button');
                    myDiv.setAttribute('onClick', 'detail(this)');
                    // myDiv.setAttribute('id', key2);
                    var btnTxt = document.createTextNode('Detail!');
                    btn.setAttribute('class', 'button');
                    btn.appendChild(btnTxt);



                    cardDivs.appendChild(imgBoxs);
                    cardDivs.appendChild(titleDivs);
                    titleDivs.appendChild(headTitle);
                    paraModels.appendChild(prizeSpan);
                    titleDivs.appendChild(paraModels);
                    cardDivs.appendChild(titleDivs);
                    fetch.appendChild(cardDivs);
                    titleDivs.appendChild(myDiv);
                    myDiv.appendChild(btn);


                }

            }
        })
}


var detailId;
function detail(butn) {
    // console.log('detail');
    detailId = butn.parentElement.id;
    console.log(butn.parentElement.id);
    localStorage.setItem('detailkey', detailId);

    location = './detail.html';

}


var detailIdForDom = localStorage.getItem('detailkey');
function detaill() {
    let timerInterval
    swal({

        timer: 2500,
        onOpen: () => {
            swal.showLoading()
        },

    })
        .then((result) => {
            console.log('I was closed by the timer')

            firebase.database().ref('/').on('child_added', (snapShot) => {

                // console.log(snaps.val())
                for (var key in snapShot.val()) {
                    var value = snapShot.val()[key];
                    // console.log(key)
                    if (value.file !== undefined) {

                        if (key === detailIdForDom) {
                            console.log(detailIdForDom)
                            console.log(value)
                            localStorage.setItem('adUID', value.userUID)
                            var cardDivs = document.createElement('div');
                            cardDivs.setAttribute('id', 'fetchImageDetail');
                            // cardDivs.setAttribute('class', 'card');
                            cardDivs.setAttribute('class', 'col-md-8');
                            var imgBoxs = document.createElement('img');
                            imgBoxs.setAttribute('id', 'imgBoxDetail');
                            imgBoxs.setAttribute('class', 'card-img-top');
                            imgBoxs.src = value.file;
                            var titleDivs = document.createElement('div');
                            titleDivs.setAttribute('id', 'titleDiv');
                            // titleDivs.setAttribute('id', key2);
                            titleDivs.setAttribute('class', 'card-img-top');
                            var headTitle = document.createElement('h2');
                            headTitle.setAttribute('id', 'head5');
                            headTitle.innerHTML = value.name;
                            var paraModels = document.createElement('p')
                            paraModels.setAttribute('id', 'paraModelDetail');
                            var prize = document.createElement('p');
                            prize.innerHTML = 'Price Rs: ' + value.price;
                            var myDiv = document.createElement('p');
                            myDiv.innerHTML = 'Model : ' + value.model;
                            var adres = document.createElement('p');
                            adres.innerHTML = 'Address : ' + value.address;
                            var dscrptnSpan = document.createElement('p');
                            dscrptnSpan.innerHTML = 'Discription :  ' + value.dscrption;
                            var btnDiv = document.createElement('div');
                            btnDiv.style.display = 'inline';
                            var chat = document.createElement('button');
                            chat.setAttribute('onClick', 'chat()');
                            chat.setAttribute('class', 'btn btn-success');
                            var chatTxt = document.createTextNode('CHAT');
                            chat.appendChild(chatTxt);
                            var call = document.createElement('button');
                            call.setAttribute('onClick', 'call()');
                            call.setAttribute('class', 'btn btn-info');
                            var calTxt = document.createTextNode('CALL');
                            call.appendChild(calTxt)



                            cardDivs.appendChild(imgBoxs);
                            cardDivs.appendChild(titleDivs);
                            titleDivs.appendChild(headTitle);
                            paraModels.appendChild(prize);
                            titleDivs.appendChild(paraModels);
                            cardDivs.appendChild(titleDivs);
                            fetch.appendChild(cardDivs);
                            titleDivs.appendChild(myDiv);
                            myDiv.appendChild(adres);
                            myDiv.appendChild(dscrptnSpan);
                            myDiv.appendChild(btnDiv)
                            myDiv.appendChild(btnDiv)
                            myDiv.appendChild(chat);
                            myDiv.appendChild(call);

                            if(value.userUID !== currentUserUID){
                                bringChat()
                            }else{
                                nameForDom()
                            }

                        }
                    }

                }
            })
        })
}


function chat() {
    console.log('Under Working')
    location = './chat.html';

}


function call() {
    firebase.database().ref('/').on('child_added', (snapShot) => {
        for (var key in snapShot.val()) {
            var value = snapShot.val()[key];
            // console.log(key)
            if (key === detailIdForDom) {
                // console.log(detailIdForDom)
                console.log(value)
                swal(value.phone);
            }
        }
    })
}

function back() {
    location = './detail.html'
}

var sender;
function senderUID() {
    firebase.database().ref('/messages/' + detailIdForDom).on('child_added', (snapSend) => {
        // console.log(snapSend.val())
        for (var key in snapSend.val()) {
            key = snapSend.val()[key]
            // console.log(key)
            for (var key1 in key) {
                key1 = key[key1]
                // console.log(key1.senderId)
            }
            sender = key1.senderId;
            console.log(sender)
        }

    })
}

function getTime() {

    var hours = ['12', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11']
    var currentDate = new Date();
    var currentHours = currentDate.getHours();
    var currentMinutes = currentDate.getMinutes();
    var getHrs = hours[currentHours]

    // console.log(getHrs)
    // console.log(currentMinutes)
    if (currentHours < 12) {
        return getHrs + ':' + currentMinutes + ' AM'
    } else {
        return getHrs + ':' + currentMinutes + ' PM'
    }

}

var nameArray = [];
function fetchName() {
    firebase.database().ref('/messages/' + detailIdForDom).on('child_added', (snapName) => {
        console.log(snapName.key)
        nameArray.push(snapName.key)
    })
}
fetchName()
var nameFetch = document.getElementById('nameFetch')
function nameCreatDiv(nameTxt, id) {
    var ul = document.createElement('ul');
    var li = document.createElement('li');
    li.setAttribute('id', id)
    li.setAttribute('onclick', 'myFunc(this)')
    li.innerHTML = nameTxt;


    ul.appendChild(li)
    nameFetch.appendChild(ul)
}

function nameForDom() {
    firebase.database().ref('/').on('child_added', (SnapName) => {
        for (var key in SnapName.val()) {
            // console.log(key);`
            if (key === 'name') {

                console.log(SnapName.key)
                nameCreatDiv(SnapName.val()[key], SnapName.key)
            }
        }
    })
}



function myFunc(nameLiRef) {
    console.log(nameLiRef.id)
    // bringChat()
}


var msgRef = document.getElementById('msg');
var allMsgRef = document.getElementById('all-messages');
function sendMsg() {
    console.log(sender)
    var adsUID = localStorage.getItem('adUID');
    console.log(adsUID)
    if (currentUserUID !== null) {
        if (adsUID !== currentUserUID) {

            console.log(msgRef.value);
            chat = {
                senderId: currentUserUID,
                receiverId: adsUID,
                msg: msgRef.value,
                ads: detailIdForDom,
                timeStamp: getTime(),

            }
            firebase.database().ref('/messages/' + detailIdForDom + '/' + currentUserUID + '/message').push(chat);
        }
        else if (sender !== undefined) {
            console.log(msgRef.value)
            chat = {
                senderId: currentUserUID,
                receiverId: sender,
                msg: msgRef.value,
                ads: detailIdForDom,
                timeStamp: getTime(),
            }
            firebase.database().ref('/messages/' + detailIdForDom + '/' + sender + '/message').push(chat);
        }
    } else {
        console.log('sir me dard')
    }
}
var getUid = localStorage.getItem('adUID')
function bringChat() {
    if (adsUID !== currentUserUID) {

        firebase.database().ref('/messages/' + detailIdForDom).on('child_added', (msgSnap) => {
            for (var key in msgSnap.val()) {
                keys = msgSnap.val()[key]
                // console.log(keys)
                for (var key1 in keys) {
                    chatData = keys[key1]
                    console.log(adsUID)
                    console.log(getUid)
                    console.log(chatData.receiverId)
                    if (chatData.receiverId === getUid && chatData.senderId === currentUserUID) {
                        var msgElement = createMsgElement(chatData.msg)
                        allMsgRef.appendChild(msgElement);
                        console.log(chatData.msg)
                    }else{

                    }
                }
            }

        })
    }else{
        firebase.database().ref('/messages/' + detailIdForDom).on('child_added', (msgSnap) => {
            for (var key in msgSnap.val()) {
                keys = msgSnap.val()[key]
                // console.log(keys)
                for (var key1 in keys) {
                    chatData = keys[key1]
                    console.log(getUid)
                    console.log(chatData.receiverId)
                    if (chatData.receiverId === currentUserUID && chatData.senderId === adsUID) {
                        var msgElement = createMsgElement(chatData.msg)
                        allMsgRef.appendChild(msgElement);
                        console.log(chatData.msg)
                    }else{

                    }
                }
            }

        })
    }
}

function createMsgElement(msg) {
    var div = document.createElement('div');
    var msgText = document.createTextNode(msg);
    div.appendChild(msgText);
    return div;
}

function myAds() {
    location = './myAds.html'
}

var MyAds = document.getElementById('adsFetch')
function fetchMyAds() {
    if (currentUserUID !== null) {

        firebase.database().ref('/').on('child_added', (snapAds) => {
            console.log(snapAds.key)
            for (var key in snapAds.val()) {
                var value = snapAds.val()[key]
                // console.log(value)
                if (currentUserUID === snapAds.key) {
                    if (value.file !== undefined) {

                        var cardDivs = document.createElement('div');
                        cardDivs.setAttribute('id', 'fetchImage');
                        cardDivs.setAttribute('class', 'card');
                        cardDivs.setAttribute('class', 'col-md-3');
                        var imgBoxs = document.createElement('img');
                        imgBoxs.setAttribute('id', 'imgBox');
                        // imgBoxs.style.width = '200px';
                        // imgBoxs.style.width = '200px';
                        imgBoxs.setAttribute('class', 'card-img-top');
                        // imgBoxs.setAttribute('onClick', 'image()')
                        imgBoxs.src = value.file;
                        var titleDivs = document.createElement('div');
                        titleDivs.setAttribute('id', 'titleDiv');
                        titleDivs.setAttribute('id', key);
                        titleDivs.setAttribute('class', 'card-img-top');
                        var headTitle = document.createElement('h4');
                        headTitle.setAttribute('id', 'head5');
                        headTitle.innerHTML = value.name;
                        var paraModels = document.createElement('p')
                        paraModels.setAttribute('id', 'paraModel');
                        var prizeSpan = document.createElement('span');
                        prizeSpan.innerHTML = 'Rs:' + value.price;
                        // paraModels.innerHTML = objValProp.model;
                        var myDiv = document.createElement('div');
                        // myDiv.style.display = 'inline';
                        var btn = document.createElement('button');
                        myDiv.setAttribute('onClick', 'detail(this)');
                        myDiv.setAttribute('id', key);
                        var btnTxt = document.createTextNode('Detail!');
                        btn.setAttribute('class', 'button');
                        btn.appendChild(btnTxt);


                        cardDivs.appendChild(imgBoxs);
                        cardDivs.appendChild(titleDivs);
                        titleDivs.appendChild(headTitle);
                        paraModels.appendChild(prizeSpan);
                        titleDivs.appendChild(paraModels);
                        cardDivs.appendChild(titleDivs);
                        MyAds.appendChild(cardDivs);
                        titleDivs.appendChild(myDiv);
                        myDiv.appendChild(btn);
                        // titleDivs.appendChild(i)

                    }
                }
            }

        })
    } else {
        location = './login.html'
    }
}



const messaging = firebase.messaging();
messaging.requestPermission().then(function() {
    return messaging.getToken()
}).then(function(currentToken) {
    console.log('Notification permission granted.');
	console.log('currentToken', currentToken);
}).catch(function(err) {
    console.log('Unable to get permission to notify.', err);
});

messaging.onMessage((payload) => {
    console.log('payload', payload)
})

console.log(currentUserUID)

if ('serviceWorker' in navigator) {

    console.log('Service Worker is supported');

    // if service worker supported then register my service worker
    navigator.serviceWorker.register('./service-worker.js').then(function (reg) {
        console.log('Successfully Register :^)', reg);

        reg.pushManager.subscribe({
            userVisibleOnly: true
        }).then(function (subscription) {
            console.log('subscription:', subscription.toJSON());
            // GCM were used this endpoint
            console.log('endpoint:', subscription.endpoint);
        });

    }).catch(function (error) {
        console.log('SW Registration Failed: :^(', error);
    });

}
console.log(currentUserUID)