# T's Trade Shop
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


