// الملف دا مخصوص انه يجيب ال api  بتاع الالعاب 
import { Ui } from "./ui.js";
import { Details } from "./details.module.js";
let details = new Details()
let ui = new Ui()
export class Game {
    constructor() {
        this.getGames("mmorpg");
        this.getCategoryId();
        this.showGameDetails();
    }

    async getGames(category) {
        ui.showLoader()
        const options = {
            method: 'GET',
            headers: {
                'x-rapidapi-key': 'bcd0861096msh2e3172db7bc7e48p132393jsnaaea4dc2cddc',
                'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com'
            }
        };
        const api = await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/games?category=${category}`, options)
        const response = await api.json()
        ui.displayGames(response)
        ui.hideLoader()
    }

    getCategoryId() {
        let _this = this;
        $(".navbar-nav li a").on("click", function (e) {
            let categoryId = $(e.target).attr("category-id")
            _this.getGames(categoryId);
        })
    }

    showGameDetails() {
        $("#games-display").on("click", ".card", function (e) {
            const gameId = $(this).attr("game-id");
            console.log(gameId);
            details.getDetails(gameId);
            $("#main-header").addClass("d-none");
            $("nav").addClass("d-none");
            $("main").addClass("d-none");
            $("#details").removeClass("d-none");
        });
    }
}