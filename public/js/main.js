window.addEventListener('load', function (e) {
    /* NAVBARGA STICKY CLASS QO'SHILISH JARAYONI */
    window.addEventListener("scroll", function (e) {
        var nav = document.querySelector('.navbar');
        if (window.scrollY > 130) {
            nav.classList.add("sticky",) // bu yerda 300px dan so'ng sticky toggle qo'shiladi
        }
        if (window.scrollY < 100) {
            nav.classList.remove("sticky",)
        }
    });

    /* INPUTLARDA ERROR HODISANI ILISH */
    let shart = document.querySelectorAll('.toldir');
    for (let i = 0; i <= shart.length; i++) {
        if (shart[i] === '') {
            shart[i].classList.add('error')
        }
    }

    let input = document.querySelectorAll("input");
    for (let i = 0; i < input.length; i++) {
        input[i].addEventListener('blur', function (e) {
            // alert('msg');
            if (input[i].value === '') {
                input[i].classList.add('invalid')
            }
        });
        input[i].addEventListener('focus', function (e) {
            if (this.classList.contains('invalid')) {
                this.classList.remove('invalid');
            }
        });
    }
    /* EMAILNI TO'G'RI TO'LDIRISH */
    let email = document.querySelector('.email');
    email.addEventListener('blur', function (e) {   //  BLUR - BU INPUTDA FOCUS O'CHGANDAN KEYINGI HOLAT
        if (!email.value.includes('@')) { // email bo'lmaganda
            email.classList.add('invalid');
            error.innerHTML = "iltimos emailni to'g'ri kiriting"
        }
    });
    email.addEventListener('focus', function (e) {
        if (this.classList.contains('invalid') && email.value.includes('@')) {
            // indikatorni olib tashlash
            email.classList.remove('invalid');
            error.innerHTML = "email to'g'riligi tekshirildi"
        }
    });
    /* PASSWORD UZUNLIGI */
    const password = document.getElementById('exampleInputPassword1')
    password.addEventListener('blur', function (e) {
        if (password.value == '') {
            pass.innerHTML = "parol kiriting";
        }
        else if (password.value.length <= 6) {
            pass.innerHTML = ''
            password.classList.add('invalid');
            password_msg.innerHTML = `parol uzunligi 7dan 15gacha bo'lishi kerak`
        }
        else if (password.value.length < 16) {
            password_msg.style.display = 'none'
            pass.style.display = 'none'
            password.classList.remove('invalid');
            password_true.innerHTML = `juda ham yaxshi himoyalangan parol`
        }
    });
    /* PASSWORD HIDE SHOW JARAYONI */
    const inpType = document.querySelector('input[type="password"]');
    const hide_password = document.querySelector('.hide_password');
    const ion_icon = document.querySelector('ion-icon[name="eye-outline"]');

    hide_password.addEventListener('click', function (e) {
        const type = inpType.getAttribute('type')
        if (type === "password") {
            inpType.setAttribute('type', 'text')
            ion_icon.removeAttribute('name', 'eye-outline')
            ion_icon.setAttribute('name', 'eye-off-outline')

            /* <ion-icon name="eye-off-outline"></ion-icon> */
        } else {
            inpType.setAttribute('type', 'password')
            ion_icon.removeAttribute('name', 'eye-off-outline')
            ion_icon.setAttribute('name', 'eye-outline')
        }
    });

    /* CARD ID = HREF , ABOUT PAGE */

    // let cardId = document.querySelectorAll('.img');
    // cardId.forEach(element => {
    //     element.addEventListener('click', function (e) {
    //         // let id = $(element).attr("dataId")
    //         let id = this.getAttribute("dataId")
    //         window.location.href = id
    //     });

    // })

    /* UZS - O'ZBEKISTON SO'MIGA OTKAZISH */


    // let priceMuddatli = document.querySelector('.muddatli');
    // let asl_price = document.querySelectorAll('.asl_price');
    // let price = document.querySelector('.price');
    // const Allprices = [priceMuddatli, asl_price, price]

    // for (let i = 0; i < Allprices.length; i++) {
    //     const element = Allprices[i];
    //     element.textContent = new Intl.NumberFormat("uz-Uz", {
    //         currency: 'UZS',
    //         style: 'currency'
    //     }).format(element.textContent)
    // }

    // asl_price.forEach(element => {
    //     element.textContent = new Intl.NumberFormat("uz-Uz", {
    //         currency: 'UZS',
    //         style: 'currency'
    //     }).format(element.textContent)
    // })

    // console.log(Allprices)




    // function highlight(event) {
    //     window.getSelection()
    //         .selectAllChildren(
    //             event.target
    //         );
    //     event.target.removeEventListener("click", highlight);
    // }

    // cells.forEach(cell => {
    //     cell.addEventListener("click", highlight);
    // });
});

