document.addEventListener("DOMContentLoaded", function () {
  const cardData = [
    {
      title: "Card 1",
      text: "This is card 1 description.",
      img: "https://images.pexels.com/photos/206359/pexels-photo-206359.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    },
    {
      title: "Card 2",
      text: "This is card 2 description.",
      img: "https://images.pexels.com/photos/206359/pexels-photo-206359.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    },
    {
      title: "Card 3",
      text: "This is card 3 description.",
      img: "https://images.pexels.com/photos/206359/pexels-photo-206359.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    },
    {
      title: "Card 4",
      text: "This is card 4 description.",
      img: "https://images.pexels.com/photos/206359/pexels-photo-206359.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    },
    {
      title: "Card 5",
      text: "This is card 5 description.",
      img: "https://images.pexels.com/photos/206359/pexels-photo-206359.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    },
    {
      title: "Card 6",
      text: "This is card 6 description.",
      img: "https://images.pexels.com/photos/206359/pexels-photo-206359.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    },
  ];

  const container = document.getElementById("card-container");
  let cardHTML = "";

  cardData.forEach((card) => {
    cardHTML += `
            <div class="col-lg-4 col-md-6 col-sm-12">
                <div class="card shadow-sm">
                    <img src="${card.img}" class="card-img-top" alt="Card Image">
                    <div class="card-body">
                        <h5 class="card-title">${card.title}</h5>
                        <p class="card-text">${card.text}</p>
                        <a href="#" class="btn btn-primary">Read More</a>
                    </div>
                </div>
            </div>
        `;
  });

  container.innerHTML = cardHTML;
});
