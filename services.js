// Create an array to hold your products.
// Each item in the array must be an object that contains the following information: name, description, price, and URL for product image.
// You can add more properties if that's what the team wants, but it must have those.
// The team will use JavaScript to add each product to the DOM.
// Each product must be a card, much like everyone made in the Static Web quiz. As a team, decide on the style of the card.
// The layout of the product page should be a grid of cards. 3-wide, 4-wide, 5-wide, the teams must decide how many cards are on each row.
var products = [];
for (i = 0; i < 8; i++) {
	products[i] = new Object();
}
products[0].name = "Meditation";
products[1].name = "Shock-collar Therapy";
products[2].name = "The Feline Position?";
products[3].name = "Connecting With Past-lives";
products[4].name = "Speech Therapy";
products[5].name = "Aromatherapy";
products[6].name = "Addiction Prevention";
products[7].name = "Massage";
products[0].description = "Meditation is a practice that an individual concentrated focus upon a sound, object, visualization, the breath, movement, or attention itself in order to increase awareness of the present moment, reduce stress, promote relaxation, and enhance personal and spiritual growth.";
products[1].description = 'A type of counseling called cognitive-behavioral therapy and medicines known as "Doggy treats" appear to be the most effective treatments for SC. Treatment can help you feel more in control of your emotions and result in fewer symptoms, but you may still have some bad memories.';
products[2].description = "Empathy is considered essential to therapy because for any therapeutic tactic to work, the therapist has to make the dog in treatment feel understood. To do this, the therapist must not only understand what a dog says in a therapy session but also understand what the dog is not saying and communicate this understanding.";
products[3].description = "One way to learn about a past life is to get hypnotized and do a past life regression.  One of the premier past life experts, Dr. Brian Weiss, offers a six-week video course that teaches techniques you can use to pursue your own past lives, as well as guided visualizations to help you do so from the comfort of your home.";
products[4].description = "Speech services begin with initial screening for communication and swallowing disorders and continue with assessment and diagnosis, consultation for the provision of advice regarding management, intervention and treatment, and provision counseling and other follow up services for these disorders.";
products[5].description = 'Aromatherapy is the practice of using the natural oils extracted from flowers, bark, stems, leaves, roots or other parts of a plant to enhance psychological and physical well-being. The inhaled aroma from these "essential" oils that traveles through the bloodstream is widely believed to stimulate brain function.';
products[6].description = "Cognitive-Behavioral Therapy (CBT) was developed as a method to prevent relapse when treating problem butt sniffing, and later it was adapted for garbage destroying-addicted individuals. Cognitive-behavioral strategies are based on the theory that in the development of maladaptive behavioral patterns like substance abuse, learning processes play a critical role. Individuals in CBT learn to identify and correct problematic behaviors by applying a range of different skills that can be used to stop butt sniffing abuse and to address a range of other problems that often co-occur with it.";
products[7].description = "Massage involves working and acting on the body with pressure – structured, unstructured, stationary, or moving – tension, motion, or vibration, done manually or with mechanical aids. Massage can be applied with the paws, tail, elbows, nose, or a massage device. Depending on the application and technique used, massage is used to promote relaxation and well-being,Also it is beneficial in treating sports injuries and other problems affecting the musculature of the body such as postural misalignment and many painful conditions. Massage can also be sexual in nature.";
products[0].price = "One bag of raw hide";
products[1].price = "Two sqeaking balls";
products[2].price = "One jar of peanut butter";
products[3].price = "One bag of beef jerky";
products[4].price = "One bag of kong";
products[5].price = "One nice groom";
products[6].price = "30 minutes toss and fetch";
products[7].price = "One hour dog park visit";
products[0].URL = "Meditation.jpg";
products[1].URL = "Shock.jpg";
products[2].URL = "FelinePosition.jpg";
products[3].URL = "Connecting.jpg";
products[4].URL = "Speech.jpg";
products[5].URL = "Aromatherapy.jpg";
products[6].URL = "Addiction.jpg";
products[7].URL = "Massage.jpg";
var displayElement = document.getElementById("products");
for (i = 0; i < 8; i++) {
	var productElement = document.createElement("div");
	productElement.className = "cards";
	// console.log(products[i]);
	var nameElement = document.createElement("div");
	nameElement.className = "product-title";
	var h2Element = document.createElement("h2")
	h2Element.innerHTML = products[i].name;
	var imageElement = document.createElement("img");
	imageElement.className = "img";
	imageElement.src = products[i].URL;
	var descriptionElement = document.createElement("div");
	descriptionElement.className = "description";
	descriptionElement.innerHTML = products[i].description;
	var priceHeaderElement = document.createElement("div");
	priceHeaderElement.className = "pricing";
	priceHeaderElement.innerHTML = "Pricing";
	var priceElement = document.createElement("div");
	priceElement.className = "price";
	priceElement.innerHTML = products[i].price;
	productElement.appendChild(nameElement).appendChild(h2Element);
	productElement.appendChild(imageElement);
	productElement.appendChild(descriptionElement);
	productElement.appendChild(priceHeaderElement);
	productElement.appendChild(priceElement);
	displayElement.appendChild(productElement);
}




