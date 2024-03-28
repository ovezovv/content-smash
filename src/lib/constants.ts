const dogData: Content[] = [{
  uid: 112,
  img: "https://images.dog.ceo/breeds/husky/n02110185_9001.jpg",
  desc: "Some description about the animals here Rex"
},{
  uid: 113,
  img: "https://images.dog.ceo/breeds/sheepdog-english/n02105641_5017.jpg",
  desc: "Some description about the animals here Rex"
},{
  uid: 114,
  img: "https://images.dog.ceo/breeds/mix/mickey.jpg",
  desc: "Some description about the animals here Max"
},{
  uid: 115,
  img: "https://images.dog.ceo/breeds/segugio-italian/n02090722_001.jpg",
  desc: "Some description about the animals here Max"
},{
  uid: 116,
  img: "https://images.dog.ceo/breeds/finnish-lapphund/mochilamvan.jpg",
  desc: "Some description about the animals here Joly"
},{
  uid: 117,
  img: "https://images.dog.ceo/breeds/puggle/IMG_104450.jpg",
  desc: "Some description about the animals here Mash"
}];

const catData: Content[] = [{
  uid: 212,
  img: "https://images.dog.ceo/breeds/terrier-russell/little1.jpg",
  desc: "Some description about the animals here"
},{
  uid: 213,
  img: "https://images.dog.ceo/breeds/terrier-russell/little1.jpg",
  desc: "Some description about the animals here"
},{
  uid: 214,
  img: "https://images.dog.ceo/breeds/terrier-russell/little1.jpg",
  desc: "Some description about the animals here"
},{
  uid: 215,
  img: "https://images.dog.ceo/breeds/terrier-russell/little1.jpg",
  desc: "Some description about the animals here"
},{
  uid: 216,
  img: "https://images.dog.ceo/breeds/terrier-russell/little1.jpg",
  desc: "Some description about the animals here"
},{
  uid: 217,
  img: "https://images.dog.ceo/breeds/terrier-russell/little1.jpg",
  desc: "Some description about the animals here"
}]

const animalData: Content[] = [{
  uid: 312,
  img: "https://images.dog.ceo/breeds/terrier-russell/little1.jpg",
  desc: "Some description about the animals here"
},{
  uid: 313,
  img: "https://images.dog.ceo/breeds/terrier-russell/little1.jpg",
  desc: "Some description about the animals here"
},{
  uid: 314,
  img: "https://images.dog.ceo/breeds/terrier-russell/little1.jpg",
  desc: "Some description about the animals here"
},{
  uid: 315,
  img: "https://images.dog.ceo/breeds/terrier-russell/little1.jpg",
  desc: "Some description about the animals here"
},{
  uid: 316,
  img: "https://images.dog.ceo/breeds/terrier-russell/little1.jpg",
  desc: "Some description about the animals here"
},{
  uid: 317,
  img: "https://images.dog.ceo/breeds/terrier-russell/little1.jpg",
  desc: "Some description about the animals here"
}]

const menuData: IMenu = [
  {
    id: 1,
    type: 'dog',
    title: 'Dog'
  },
  {
    id: 2,
    type: 'cat',
    title: 'Cat'
  },
  {
    id: 3,
    type: 'animal',
    title: 'Animal'
  }
]

export {
  dogData,
  catData,
  animalData,
  menuData
}