const container = document.getElementById("container");
const ratingPara = document.getElementById("rating");


const addColor = (event) => {

    const { target: { id } } = event;

    if (id === "container") return;

    const stars = document.getElementsByName("star");

    stars.forEach((star, idx) => {

        if (idx <= Number(id)) {
            star.className = "active--star";
        } else {
            star.className = "";
        }
    }
    );

    ratingPara.innerText = `Rating: ${Number(id) + 1}`;

}

container.addEventListener("mouseover", addColor);