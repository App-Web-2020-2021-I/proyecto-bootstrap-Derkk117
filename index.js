$(document).ready(function() {
    let promo1 = {
        title: "Offer 1",
        img: "./Assets/termometros.jpg",
        description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum porro reprehenderit cum dolor! Inventore, itaque excepturi! Tempora expedita placeat soluta sequi. Fugiat modi perferendis tempora possimus nisi soluta ea mollitia quae illum saepe! Laboriosam voluptates, qui corporis obcaecati, minima, quos ipsum quaerat libero vitae ipsam porro molestiae excepturi ea voluptatem fugit! Delectus provident iure odio repellendus? Sunt harum praesentium placeat quo? Labore ab reprehenderit necessitatibus nihil quasi, dolore commodi sunt, vero rerum deserunt vitae numquam distinctio laborum neque corporis doloribus nam sequi, eius voluptatem debitis animi. Quasi optio neque expedita repudiandae, sunt sed voluptatibus, at autem animi maxime id eos."
    }
    let promo2 = {
        title: "Offer 2",
        img: "./Assets/tazones.jpg",
        description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum porro reprehenderit cum dolor! Inventore, itaque excepturi! Tempora expedita placeat soluta sequi. Fugiat modi perferendis tempora possimus nisi soluta ea mollitia quae illum saepe! Laboriosam voluptates, qui corporis obcaecati, minima, quos ipsum quaerat libero vitae ipsam porro molestiae excepturi ea voluptatem fugit! Delectus provident iure odio repellendus? Sunt harum praesentium placeat quo? Labore ab reprehenderit necessitatibus nihil quasi, dolore commodi sunt, vero rerum deserunt vitae numquam distinctio laborum neque corporis doloribus nam sequi, eius voluptatem debitis animi. Quasi optio neque expedita repudiandae, sunt sed voluptatibus, at autem animi maxime id eos."
    }
    let promo3 = {
        title: "Offer 3",
        img: "./Assets/juguetes.jpg",
        description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum porro reprehenderit cum dolor! Inventore, itaque excepturi! Tempora expedita placeat soluta sequi. Fugiat modi perferendis tempora possimus nisi soluta ea mollitia quae illum saepe! Laboriosam voluptates, qui corporis obcaecati, minima, quos ipsum quaerat libero vitae ipsam porro molestiae excepturi ea voluptatem fugit! Delectus provident iure odio repellendus? Sunt harum praesentium placeat quo? Labore ab reprehenderit necessitatibus nihil quasi, dolore commodi sunt, vero rerum deserunt vitae numquam distinctio laborum neque corporis doloribus nam sequi, eius voluptatem debitis animi. Quasi optio neque expedita repudiandae, sunt sed voluptatibus, at autem animi maxime id eos."
    }
    let promo4 = {
        title: "Offer 4",
        img: "./Assets/consultas.jpg",
        description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum porro reprehenderit cum dolor! Inventore, itaque excepturi! Tempora expedita placeat soluta sequi. Fugiat modi perferendis tempora possimus nisi soluta ea mollitia quae illum saepe! Laboriosam voluptates, qui corporis obcaecati, minima, quos ipsum quaerat libero vitae ipsam porro molestiae excepturi ea voluptatem fugit! Delectus provident iure odio repellendus? Sunt harum praesentium placeat quo? Labore ab reprehenderit necessitatibus nihil quasi, dolore commodi sunt, vero rerum deserunt vitae numquam distinctio laborum neque corporis doloribus nam sequi, eius voluptatem debitis animi. Quasi optio neque expedita repudiandae, sunt sed voluptatibus, at autem animi maxime id eos."
    }

    localStorage.setItem("promo1", JSON.stringify(promo1));
    localStorage.setItem("promo2", JSON.stringify(promo2));
    localStorage.setItem("promo3", JSON.stringify(promo3));
    localStorage.setItem("promo4", JSON.stringify(promo4));
});

//SandBox 
function seeMore(id) {
    console.log(id);
    let offer = JSON.parse(localStorage.getItem(id));
    $("#Modalv1Title")[0].innerText = offer.title;
    $("#imagenModal")[0].src = offer.img;
    $("#description")[0].innerText = offer.description;
}