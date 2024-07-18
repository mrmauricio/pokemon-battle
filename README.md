# Poké Battle Simulator

![PokéBattle](/src/assets/previews/battle-preview.png)

## Live Project

The app can be seen in action **[here](https://mrmauricio.github.io/pokemon-battle/)**.

## Project Overview

_Poké Battle Simulator_ is a web application that allows the user to battle against the computer and discover information about first gen pokémons. There are currently 24 pokémon available as fighters and 151 on pokédex.

### Mechanics 

- There is no distinction between ATK/SP. ATK and DEF/SP. DEF nor differentiation between physical attacks and special attacks; the strongest stat between both for each Pokémon was considered;
 
- Type multipliers were kept: super effective, ultra effective, not very effective, and does not affect;
 
- The STAB (Same type attack bonus) multiplier was also maintained;
 
- Four attacks of different types with the highest attack power were chosen for each Pokémon (considering the possible moves they can learn). There are no side-effects for the attacks;
 
- The HP stat was handled differently to minimize the differences in Pokémon health;
 
- The opponent's behavior in terms of attack selection is random;

### TO-DO List 

- Adapt the battle screen for mobile devices;

- Add new fighters;

- Add new battle modes besides random opponent;

- Add difficulty levels for the opponents;

### Fighter List

-   #003 Venusaur
-   #006 Charizard
-   #009 Blastoise
-   #012 Butterfree
-   #018 Pidgeot
-   #031 Nidoqueen
-   #034 Nidoking
-   #038 Ninetales
-   #045 Vileplume
-   #065 Alakazam
-   #068 Machamp
-   #076 Golem
-   #082 Magneton
-   #091 Cloyster
-   #094 Gengar
-   #130 Gyarados
-   #131 Lapras
-   #142 Aerodactyl
-   #144 Articuno
-   #145 Zapdos
-   #146 Moltres
-   #149 Dragonite
-   #150 Mewtwo
-   #151 Mew

## Technologies

-   Angular w/ TypeScript for front-end;
-   SASS for styling;
-   PokéAPI to retrieve pokémon data;
