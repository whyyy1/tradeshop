# T's Trade Shop

### Imagine the joy of amassing your cherished TCG cards without the burden of financial constraints. Introducing a delightful project crafted by my hands - a virtual realm where you, as a registered user, can embark on the journey of opening and gathering cards to your heart's content. Step into a world where your collection knows no bounds. Seamlessly integrated and intuitively designed, this API-powered creation empowers you to curate a personal treasury of cards. Dare to dream, create, and collect – the choice is yours. Your gateway to a boundless collection awaits!


## This is a simple trade shop simulator that is pulling data from two api sources. 
## Idea behind the app was classic card collection from favorite cards games and sets that you cant get.

## Apis
[Pokemon Api](https://pokemontcg.io/)
[Magic Api](https://docs.magicthegathering.io/)
## Both API's are free but Pokemon you do need to sign up for a key

## You can collect your favorite cards and interact with them

![Demo](demo/Demo.gif)


### The App is wrapped in a context container that checks the current user state. If the user is not logged in they then the auth screens... will be all they can see until they login. 

### Else the user is logged in the see the cards to get and their own collection

### **Some Bugs** not all cards load for magic cards and when you are viewing the card in your collection and click it to pop up screen you still get hovering effects from the cards in the collection
