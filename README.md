# kaplay-pong-implement-paddle-movement

Et repo hvor børn selv skal implementere koden til at bevæge 2 'paddles' (dvs. de 2 lodret hvide "bjælker" man styrer) i et pong spil lavet med KAPLAY, hvor al anden kode er implementeret.

## Nødvendigt software

For selv at kunne implementere koden til at få et pong spils 2 'paddles' til at bevæge sig, er det nødvendigt at man har Node.js installeret.

Node.js er dog heldigvis ret simpelt at installere, hvorfor man blot skal følge dette link for at installere det:

- [Node.js](https://nodejs.org/en)

## Download denne kode

For selv at komme i gang, skal du først hente denne kode, hvilket kan gøres på 2 måder via:

1. [git](https://git-scm.com/)
2. zip download

### Hent koden via 'git'

Hvis du ved, hvad 'git' er, så kan du hente dette repos kode ved køre følgende kommando fra din terminal/kommandolinje:

```bash
git clone https://github.com/coding-pirates-hillerod/kaplay-pong-implement-paddle-movement.git
```

Når du har kørt denne kommando, så skal du for nu blot gå ned i den hentede kode via følgende kommando, evt. åbn det IDE du bruger, og så gå til næste afsnit for at læse mere om, hvad du skal:

```bash
cd kaplay-pong-implement-paddle-movement
```

### Hent koden via 'zip download'

Har du ikke har 'git' installeret, så kan du hente dette repos kode ved at downloade det som en zip fil. Det gør ved først at trykke på grønne knap med teksten <code>Code</code>, og så efter trykke på <code>Download ZIP</code> fra drop down menuen

<img width="497" alt="Screenshot 2025-02-07 at 13 25 06" src="https://github.com/user-attachments/assets/66009d86-35b1-4ced-ace4-5d2be6d67934" />

Pak derefter den downloade zip fil ud, og åbn repoet i den IDE du bruger.

## Om dette repo

I dette repo vil du kunne finde følgende 2 mapper:

1. starter-code
2. finished-code

### Mappen 'starter-code'

Mappen kaldet 'starter-code' er den mappe, hvor du selv skal implementere koden til at bevæge pong spillets 2 'paddles', således at du herefter har dit eget komplet fungerende pong spil(!).

### Mappen 'finished-code'

Mappen kaldet 'finished-code' indeholder den komplet færdige kode, hvor koden til bevægelsen af de 2 'paddles' er lavet, og alt virker.

**MEN** hvis du vitterligt gerne vil lære at kode, så brug kun denne mappe som en hjælp, hvis nu du går i stå e.lign. For du lærer nemlig ikke noget af bare at kopiere koden fra denne mappe, vel!?

## Inden du går i gang

Inden du går i gang med denne opgave, så skal du først lige have installeret de pakker, som spillet afhænger af.

Gå derefter først ned i <code>starter-code</code> mappen vhja. denne kommando fra din terminal/kommandolinje:

```bash
cd starter-code
```

Når det er gjort, så skal man dernæst installere de pakker, som spillets kode afhænger af. Kør derfor denne kommando fra terminalen/kommandolinjen for at installere dem:

```bash
npm i
```

Så snart pakkerne er installeret kan man så bare køre denne sidste kommando, hvorefter ens spil vil kunne ses i ens browser, når man følger det link som vises i terminalen (linket plejer at være <code>http://localhost:3001/</code>):

```bash
npm run dev
```

Følger man således linket, så åbnes ens browser, og man skulle gerne se dette billede:

