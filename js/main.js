let menu_icon = document.querySelector('.fa-bars') ;
let menu = document.querySelector('main .container .header .navigations');

    menu_icon.onclick = () =>{
        if(menu.style.display=="none"){
            menu.style='display:flex';
            menu_icon.classList.remove('fa-bars')
            menu_icon.classList.add('fa-xmark')
        }else{
            menu.style='display:none';
            menu_icon.classList.remove('fa-xmark')
            menu_icon.classList.add('fa-bars')
        }
        }
