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

Gå derfor først ned i <code>starter-code</code> mappen vhja. denne kommando fra din terminal/kommandolinje:

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

<img width="940" alt="Screenshot 2025-02-07 at 14 14 22" src="https://github.com/user-attachments/assets/55834b0a-1580-4dac-8118-f39fda9e2d0c" />

Og ja, trykker fra billede på <code>space</code> tasten på sit keyboard, så begynder spillet som næste billede viser, hvortil de 2 'paddles' i hver side dog **ikke** rykker sig, når man taster noget på sit keyboard, da det jo lige netop er dét som DU skal kode selv.

<img width="1009" alt="Screenshot 2025-02-07 at 15 47 56" src="https://github.com/user-attachments/assets/c510379f-23b0-4e67-bf5f-67cafb4d74b6" />

## Forklaring af kodestrukturen

Før du skal kode løsning på at få de 2 'paddles' til at bevæge sig op og ned, så kommer her lige en kort gennemgang af, hvordan koden i <code>starter-code</code> mappen er strukturet, så du forstår den bedre inden du går i gang.

### 'src' mappen

Selve koden til spillet findes under <code>src</code> mappen, hvor du vil finde én JavaScript fil med navet <code>main.js</code>, og én mappe med navnet <code>scenes</code>.

#### main.js

I <code>main.js</code> filen findes den kode som starter hele spillet. Denne fil skal **ikke** bruges til denne opgave (men nu ved du i hvert fald lidt om, hvad den bruges til).

#### 'scenes' mappen

I <code>scenes</code> mappen findes følgende 3 filer, hvoraf det **kun** er <code>gameScene.js</code> filen du skal kode i:

1. gameOverScene.js
2. gameScene.js
3. startScene.js

Og kort fortalt bruges disse filer på følgende måde i nedenstående rækkefølge:

##### startScene.js

Filen <code>startScene.js</code> indeholder den kode, som er det første som vises på skærmen, når projektet køres med <code>npm run dev</code>.

_Indholdet i denne fil skal vi **ikke** rode med i denne omgang._

##### gameScene.js

Filen <code>gameScene.js</code> indeholder koden til selve spillet - altså koden som får bolden til at køre rundt, pointene til at opdatere sig, når bolden går ud af skærmen, og de 2 'paddles' som jo så ikke kan bevæge sig endnu (før DU koder dem til at kunne det).

Det **er** altså i denne fil at du skal skrive din _vilde_ kode! (mere herom lige om lidt)

##### gameOverScene.js

Filen <code>gameOverScene.js</code> indeholder koden for det der vises på skærmen, når en spiller har vundet.

_Denne fil skal vi så heller **ikke** rode med her._

## Kod selv de 2 'paddles'

Endelig .. nu skal vi til det sjove! For nu skal DU nemlig selv skrive koden, så de 2 'paddles' bevæger sig, således at man reelt kan spille spillet.

_Meenn_ .. du får selvfølgelig lidt hjælp! Så det kommer herunder.

### Det du skal kode

Det du skal kode er følgende funktionalitet:

1. Når første spiller (lad os kalde personen "Player 1") trykker på "w" tasten på dit keyboard, så skal 'paddlen' ude til venstre bevæge sig opad
2. Når første spiller trykker på "s" tasten på dit keyboard, så skal samme 'paddle' bevæge sig nedad
3. Når anden spiller ("Player 2") trykker på dit keyboards piltast som peger opad, ja, så skal 'paddlen' ude til højre bevæge sig opad
4. Og når anden trykker på piltasten der peger nedad .. ja, så skal samme 'paddle' bevæge sig nedad

**MEN** samtidig skal du også sikre følgende:

5. Ingen af de 2 'paddler' må bevæge sig ud af skærmen.

### Skriv din kode i 'gameScene.js'

Som allerede beskrevet, så er det i filen kaldet <code>gameScene.js</code>, at du skal skrive din kode.

I denne fil vil du derfor på linje **51** og linje **63** kunne finde en kommentar som følgende, under hvilken det er at du skal skrive din kode:

```javascript
// DET HERUNDER DU SKAL SKRIVE DIN KODE TIL PADDLE 1
```

#### Lidt hjælp til opgaven

Men for nu at hjælpe dig lidt på vej med at kunne skrive din kode, så kommer her hjælp til de overordnede 2 ting du skal kode, som er:

1. Lave en registrering af bevægelse for en 'paddle' ved tryk på en keyboardtast
2. Sikre at hver 'paddle' ikke bevæger sig uden for skærmen

##### Kode til registrering af tast på keyboard

Da det måske kan være lidt svært at finde ud af, hvordan man registrerer bevægelse (det man kalder et 'event') for en paddle, som så er her i nedenstående, hvordan man overordnet ville gøre det for 'paddle1' i koden, hvis den skulle bevæge sig opad, når første spiller trykkede på "w" tasten.

Koden for dette ville være:

```javascript
paddle1.onKeyDown("w", () => {
  // Det herinde mellem de 2 'tuborgklammer' (dvs. '{}') at du skal sikre, at 'paddlen' ikke bevæger sig ud af skærmen ..
});
```

Med det har du i hvert fald ét eksempel på, hvordan dette gøres ;)

##### Koden så en 'paddle' ikke bevæger sig ud over skærmen

For denne del kan det være, at du måååske (_*wink, wink*_) skal bruge en <code>if statement</code> til at tjekke, hvorvidt en 'paddle' er på vej udover skærmen eller ej.

Og _måååske_ er koden til dette at tjekke, hvorvidt en 'paddles' y-koordinat (som kan fx for 'paddle1' fås vhja. <code>paddle1.pos.y</code>) er større end eller lig med nul, når 'paddlen' bevæger sig opad, og omvendt at tjekke, hvorvidt samme y-koordinat er mindre end eller lig med højden af skærmen (højden kan fås ved at kalde <code>height()</code> metoden), når 'paddlen' bevæger sig nedad.

Og hvis dette er tilfældet - altså at 'paddlens' y-koordinat er inde for skærmen - så kan det .. _måååske, måååske_ .. være at man kan skal bruge <code>moveTo()</code> metoden på sin 'paddle', og inde mellem parenteserne give 'paddlen' en ny x-koordinat, y-koordinat og en 'speed' (hint: sidstnævnte skal blot sættes til den <code>paddleSpeed</code> variabel som allerede findes i koden, og koden for y-koordinaten skal ændres med samme variabel).

For fx <code>paddle1</code>, når den skulle bevæge sig opad, ville koden altså være nogenlunde det her:

```javascript
paddle1.moveTo("x-koordinat", "y-koordinat" - paddleSpeed, paddleSpeed);
```

## Held og lykke!

Ja, med ovenstående hjælp bliver du forhåbentlig i stand til selv at kode spillet, og få det til at virke, som det skal :-)

## Contributions

Denne opgave (og koden dertil) er skabt med bidrag fra:

- [Jonas Bak Phillipson](https://github.com/jbakchr) (_Formand og Kaptajn for Coding Pirates Hillerød_)
