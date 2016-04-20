var phototype = [night, donut, coffee, transportation, housing, person, sports, active, drink];    //array for each category

var category = function (name) {                    //object constructor for category, referencing photos constructor
  this.name = name;
  this.photos = [];
}

var photo = function (imagepath, name) {         //object constructor for photos, referencing neighborhoods constructor
  this.imagepath = imagepath;
  this.name = name;
  this.neighborhood = [];
}

var neighborhood = function (name) {                //object constructor for neighborhoods
  this.name = name;
  this.voteCount = 0;
}


var neighborhoodArray = new Array();
var ne = new neighborhood("Northeast");
var se = new neighborhood("Southeast");
var nw = new neighborhood("Northwest");
var sw = new neighborhood("Southwest");
var n = new neighborhood("North");


var categoryArray = new Array();
var night = new category("night");
var donut = new category("donut");
var coffee = new category("coffee");
var transportation = new category("transportation");
var housing = new category("housing");
var person = new category("person");
var sports = new category("sports");
var active = new category("active");
var drink = new category("drink");


var photoArray = new Array ();
var wakeboarding = new photo("wakeboarding.jpg", "wakeboarding");
var voodoo = new photo("voodoo.jpg", "voodoo");
var bluestar = new photo("bluestar.jpg", "bluestar");
var tea = new photo("tea.jpg", "tea");
var bag = new photo("bag.jpg", "bag");
var sportsbar = new photo("sportsbar.jpg", "sportsbar");
var snowboarding = new photo("snowboarding.jpg", "snowboarding");
var skiing = new photo("skiing.jpg", "skiing");
var pips = new photo("pips.jpg", "pips");
var pabst = new photo("pabst.jpg", "pabst");
var oldfashioned = new photo("oldfashioned.jpg", "oldfashioned");
var latte = new photo("latte.jpg", "latte");
var iced = new photo("iced.jpg", "iced");
var home = new photo("home.jpg", "home");
var hiking = new photo("hiking.jpg", "hiking");
var hiking = new photo("hiking.jpg", "hiking");
var frapp = new photo("frapp.jpg", "frapp");
var craftbeer = new photo("craftbeer.jpg", "craftbeer");
var condo = new photo("condo.jpg", "condo");
var cocktails = new photo("cocktails.jpg", "cocktails");
var club = new photo("club.jpg", "club");
var boathouse = new photo("boathouse.jpg", "boathouse");
var bartender = new photo("bartender.jpg", "bartender");
var americano = new photo("americano.jpg", "americano");
var blazer = new photo("blazer.gif", "blazer");
var hops = new photo("hops.jpg", "hops");
var thorns = new photo("thorns.png", "thorns");
var timbers = new photo("timbers.png", "timbers");
var winterhawks = new photo("winterhawks.png", "winterhawks");
//add aarons images
