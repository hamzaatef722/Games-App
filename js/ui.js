// الملف دا بنعرض منه الالعاب و تفاصيل اللالعاب يعني فيه : displayGames , displayDetails

export class Ui {
    displayGames(gameData) {
        let gameBox = '';
        for (let i = 0; i < gameData.length; i++) {
            const element = gameData[i];
            gameBox += `<div class="col-sm-6 col-md-4 col-lg-3 d-flex justify-content-center">
                        <div role="button" game-id="${element.id}" class="card" style="width: 18rem;">
                            <img src="${element.thumbnail}" class="card-img-top" alt="...">
                            <div class="card-body">
                                <div class="d-flex justify-content-between align-items-center mb-2">
                                    <span class="fw-bold">${element.title}</span>
                                    <span class="badge bg-info text-white p-2">free</span>
                                </div>
                                <p class="card-text text-center">${element.short_description.split(" ", 8).join(" ")}</p>
                            </div>
                            <div class="card-footer d-flex justify-content-between">
                                <div>${element.genre}</div>
                                <div>${element.platform}</div>
                            </div>
                        </div>

                    </div>`
        }
        document.querySelector("#games-display").innerHTML = gameBox;
    }
    displayDetails(gameDetails) {

        const detailsContent = `<div class="col-md-4">
                    <img src="${gameDetails.thumbnail}" class="img-fluid" alt="">
                </div>
                <div class="col-md-8">
                    <h3>Title: ${gameDetails.title}</h3>
                    <p>
                        <span>Category: </span>
                        <span class="details-info text-center text-bg-info">${gameDetails.genre}</span>
                    </p>
                    <p>
                        <span>Platform: </span>
                        <span class="details-info text-center text-bg-info"> ${gameDetails.platform}</span>
                    </p>
                    <p>
                        <span>Status: </span>
                        <span class="details-info text-center text-bg-info"> ${gameDetails.status}</span>
                    </p>
                    <p class="small">${gameDetails.description}</p>
                        <a class="btn btn-outline-warning text-white" target="_blank" href="${gameDetails.game_url}">Show Game</a>
                </div> `
        document.querySelector("#details-display").innerHTML = detailsContent
    }
    showLoader() {
        $("#loader").removeClass("d-none").fadeIn(200);
    }

    hideLoader() {
        $("#loader span").fadeOut(500, function () {
            $("#loader").fadeOut(500, function () {
                $("#loader").addClass("d-none");
                $("#loader span").show();
            });
        });
    }
}