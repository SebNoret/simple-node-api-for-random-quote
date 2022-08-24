<!--
# simple-node-api-for-random-quote

A simple node/express API with a single route that send random quotes from the tv show Kaamelott.
it is used by [this frontend app](https://github.com/SebNoret/Kaamelott-random-quote-generator).
I created this project because the public API that was used by my frontend app in the beginning didn't handle CORS restriction policy.

-->

# simple-node-api-for-random-quote

Une API Node/express avec une seul route qui renvoit une citation de la série Kaamelott sélectionnée de façon aléatoire.
Cette API est utilisée par [cette application frontend](https://github.com/SebNoret/Kaamelott-random-quote-generator).

Ce projet s'inspire de [cette API](https://kaamelott.chaudie.re/), que j'ai utilisé au départ pour développer l'application frontend mais qui ne comprenait pas de configuration pour prendre en charge les requètes cross domain 

Quand j'ai développé l'appli frontend, j'ai utilisé un CORS proxy qui ne fonctionnait plus une fois que l'appli était mise en ligne. Ce petit projet répond donc à cette problèmatique.
