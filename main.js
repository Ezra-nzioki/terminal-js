const body=document.querySelector('body')

function cars() {
    const car = [
        { model: 'bmw', color: 'red' },
        { model: 'benz', color: 'white' },
        { model: 'mazda', color: 'yellow' },
        { model: 'subaru', color: 'green' },
        { model: 'landcruiser', color: 'purple' },
        { model: 'gle', color: 'black' },
        { model: 'nissan', color: 'pink' },
        { model: 'probox', color: 'grey' },
        { model: 'porsche', color: 'teal' },
    ];
let id=1
let pronoun='he'
let it=''

    car.map((e) => {
        //saved car array to it variable
        it+=` <li> ${pronoun} drives a  ${e.color} ${e.model} </li><br/> `;
    });
    body.innerHTML=`<ol>${it} </ol>`
}

cars();