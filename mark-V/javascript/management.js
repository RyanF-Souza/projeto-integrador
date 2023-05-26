const user={
    name:'albert',
    email:'albert@gmail.com',
    img:'../assets/img/person-1.jpg',

    'user owned fan-clubs':[{
        'fan-club name':'mandalorian',
        members:[{
            name:'angelo',
            email:'angelo@gmail.com',
            'badge status':'requisitado',
            img:'../assets/img/person-1.jpg',
        }],
    },{
        'fan-club name':'minecraft',
        members:[{
            name:'arthur',
            email:'arthur@gmail.com',
            'badge status':'não requisitado',
            img:'../assets/img/person-2.jpg',
        },{
            name:'caio',
            email:'caio@gmail.com',
            'badge status':'recebido',
            img:'../assets/img/person-3.jpg',
        }],
    },{
        'fan-club name':'starwars',
        members:[{
            name:'kauã',
            email:'kaua@gmail.com',
            'badge status':'recebido',
            img:'../assets/img/person-3.jpg',
        },{
            name:'ryan',
            email:'ryan@gmail.com',
            'badge status':'não requisitado',
            img:'../assets/img/person-1.jpg',
        }],
    }],
}

const infoBox=document.querySelector('#informationBox')
const fanClubInput=document.querySelector('#fanClub')
const membersBox=document.querySelector('#membersBox')

window.addEventListener('DOMContentLoaded',()=>{
    fanClubInput.innerHTML='<option value="" selected hidden disabled>Select the Fan-Club</option>'

    for(i=0;i<user['user owned fan-clubs'].length;i++){
        let fanClubName=user['user owned fan-clubs'][i]['fan-club name']

        fanClubInput.innerHTML+=`<option value="${fanClubName}">${fanClubName.substring(0,1).toUpperCase()+fanClubName.substring(1)}</option>`
    }
})

fanClubInput.addEventListener('click',()=>{
    for(i=0;i<user['user owned fan-clubs'].length;i++){
        let fanClub=user['user owned fan-clubs'][i]

        if(fanClub['fan-club name']===fanClubInput.value){

            var displayMembers=fanClub.members.map(member=>{
                return `<div class="member">
                            <img width="128px" height="128px" class="memberImage" src="${member.img}" alt="">
                            <span class="userName">${member.name.toUpperCase()}<a href="#managementBody"><img class="threeDots" width="7px" height="30px" src="../assets/img/threeDots.png" alt=""></a></span>
                        </div>`
            })

            displayMembers=displayMembers.join('')
            membersBox.innerHTML=displayMembers

            let dots=document.querySelectorAll('.threeDots')

            dots.forEach(dot=>{
                dot.addEventListener('click',(e)=>{
                    let currentName=e.currentTarget.parentElement.parentElement.textContent.toLowerCase()

                    for(i=0;i<fanClub.members.length;i++){
                        let member=fanClub.members[i]

                        if(currentName===member.name){
                            let badge=member['badge status']

                            infoBox.innerHTML=`<div class="info">
                                                <div class="shadow"></div>
                                                <img id="img" width="180px" height="193px" class="perfilImage" src="${member.img}" alt="">
                                                <article class="textInfo">
                                                    <p id="perfilName" class="name">${member.name.toUpperCase()}</p>
                                                    <p id="" class="status">STATUS:<span class="statusSpan">${badge.toUpperCase()}</span></p>
                                                    <p class="email">${member.email.toUpperCase()}</p>
                                                </article>
                                            </div>`

                            let badgeBox=document.querySelector('.statusSpan')
                            
                            if(badge=='requisitado'){
                                badgeBox.style.background='red'
                            }else if(badge=='recebido'){
                                badgeBox.style.background='green'
                            }else{
                                badgeBox.style.background='black'
                            }

                            return
                        }
                    }
                })
            })
            
            return
        }
    }
})