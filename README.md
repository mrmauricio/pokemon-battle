# Poké Battle Simulator

![PokéBattle](/src/assets/previews/battle-preview.png)

## Live Project

The app can be seen in action **[here](https://mrmauricio.github.io/pokemon-battle/)**.

## Project Overview

_Poké Battle Simulator_ is a web application that allows the user to battle against the computer and discover information about first gen pokémons. There are currently 24 pokémon available as fighters and 151 on pokédex.

### Mechanics (PT-BR)

- Não há ATK/SP. ATK e DEF/SP. DEF e nem diferenciação por ataques físicos/ ataques especiais; foi considerado o stat mais forte entre ambos para cada pokémon;
- Os multipliers de tipo foram mantidos: super effective, ultra effective, not very effective e does not affect;
- O multiplier STAB (Same type attack bonus) também foi mantido;
- Foram escolhidos 4 ataques de tipos distintos com maior poder de ataque para cada pokémon (considerando os ataques possíveis de serem aprendidos). Não há side-effects para os ataques;
- O stat HP foi tratado de maneira diferente para que as diferenças entre a vida dos pokémon não sejam muitas;
- O comportamento do adversário em relação a escolha dos ataques está aleatório;

### TO-DO List (PT-BR)

- Adaptar a tela de batalha p/ dipositivos móveis;
- Adicionar novos fighters;
- Adicionar novos modos de batalha além de oponente aleatório;
- Adicionar níveis de dificuldade para os adversários;

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
