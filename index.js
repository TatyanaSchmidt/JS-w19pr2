class CatData{
    constructor (petsname,ownername,ownercontact,petbreed,foodtype,petsex,comments,petfoto){
        this.petsname = petsname;
        this.ownername = ownername;
        this.ownercontact = ownercontact;
        this.petbreed = petbreed;
        this.foodtype = foodtype;
        this.petsex = petsex;
        this.comments = comments;
        this.petfoto = petfoto;
    }
}

const dataSaveToObject = (e) => {
    e.preventDefault();

    const petsname = document.querySelector('#petsname').value;
    const ownername = document.querySelector('#ownername').value;
    const ownercontact = document.querySelector('#ownercontact').value;
    const petbreed = document.querySelector('select').value;
    const foodtypeValues = Array.from(document.querySelectorAll('input[name="foodtype"]:checked'));
    const foodtype = foodtypeValues.map(item => item.value);
    const petsex = document.querySelector('input[name="petsex"]:checked').value;
    const comments = document.querySelector('#comments').value;
    const petfoto = document.querySelector('#petfoto').files[0];
    
    const petData = new CatData (petsname,ownername,ownercontact,petbreed,foodtype,petsex,comments,petfoto);
    console.log(petData);
}

// let employee1 = new Employee ("Skopin", "Alex",500,10);
// console.log(petData);