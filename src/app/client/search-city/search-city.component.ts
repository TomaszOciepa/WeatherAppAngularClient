import { Component, OnInit, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'search-city',
  templateUrl: './search-city.component.html',
  styleUrls: ['./search-city.component.css']
})
export class SearchCityComponent implements OnInit {


  characters = [
    
    "Warszawa", "Kraków", "Łódź", "Wrocław", "Poznań", "Gdańsk", "Szczecin", "Bydgoszcz", "Lublin", "Białystok", "Aleksandrów Kujawski", "Annopol", "Aleksandrów Łódzki", "Augustów", "Alwernia", "Andrychów", "Będzin", "Bełchatów", "Bolesławiec", "Bielsk Podlaski", "Bochnia", "Brzesko", "Busko-Zdrój", "Biała Podlaska", "Bartoszyce",
    "Byczyna", "Bukowno", "Bierutów", "Brzeg", "Bisztynek", "Baranów Sandomierski", "Bardo", "Baborów", "Bytów", "Bieżuń", "Brańsk", "Brzeszcze", "Brusy", "Błaszki", "Bolków", "Białogard", "Boguszów-Gorce", "Bobolice",
    "Babimost", "Bielawa", "Bystrzyca Kłodzka", "Barlinek", "Barwice", "Biały Bór","Borne Sulinowo", "Biała Rawska", "Blachownia", "Braniewo", "Błonie", "Barczewo", "Bytom Odrzański", "Biskupiec", "Biała Piska", "Brodnica",
    "Bielsko-Biała", "Brzozów", "Brzostek", "Bogatynia", "Błażowa", "Boguchwała", "Bodzentyn", "Biała", "Biecz", "Bobowa", "Brześć Kujawski", "Brzeziny", "Biłgoraj", "Barcin", "Bieruń", "Brwinów", "Bircza", 
    "Borek Wielkopolski", "Buk", "Bojanowo", "Bełżyce", "Bychawa", "Brzeg Dolny", "Białobrzegi", "Brok", "Czerwieńsk", "Chęcin", "Chmielnik", "Częstochowa", "Ciechanów", "Chojnice", "Czersk", "Człuchów", "Cieszanów", "Czarne",
    "Czarna Woda", "Choszczno", "Czeladź", "Chocianów", "Czaplinek", "Cedynia", "Czchów", "Cybinka", "Chełmek", "Chrzanów", "Chełm", "Chorzele", "Ciechanowiec", "Czyżew", "Chojna", "Chociwel", "Człopa", "Ciechocinek", "Czechowice-Dziedzice",
    "Chełmno", "Choroszcz", "Chełmża", "Chodecz", "Chodzież", "Czarnków", "Chojnów", "Czerwionka-Leszczyny", "Ciężkowice", "Czerniejewo", "Czempiń", "Chocz", "Cieszyn", "Ćmielów", "Czarna Białostocka", "Dobrzyca", "Debrzno", "Dynów", "Dubiecko",
    "Dobrodzień", "Dronin", "Dęblin", "Drawno", "Działoszyce", "Drawsko Pomorskie", "Daleszyce", "Dziwnów", "Dobra", "Dąbrowa Białostocka", "Dąbrowa Tarnowska", "Dukla", "Działoszyn", "Dębno", "Dzierżoniów", "Drohiczyn", "Darłowo",
    "Dobrzany", "Działdowo", "Dusznik Zdrój", "Dobre Miasto", "Dobrzyń nad Wisłą", "Dobczyce", "Drzewica", "Dębica", "Dobiegniew", "Drezdenko", "Dąbie", "Dolsk", "Dobra", "Elbląg", "Ełk", "Frombork", "Frampol", "Fredropol", "Głogów Małopolski",
    "Gniew", "Goleniów", "Gryfice", "Gubin", "Gryfino", "Golczewo", "Gościno", "Górowo Iławeckie", "Giżycko", "Gołdap", "Górzno", "Gorlice", "Głuszyca", "Golub-Dobrzyń", "Grudziądz", "Gniewkowo", "Gniezno", "Głuchołazy", "Gostyń",
    "Grodzisk Wielkopolski", "Głogówek", "Głogów", "Golina", "Grybów", "Głubczyce", "Góra", "Grabów nad Prosną", "Gołańcz", "Glinojeck", "Gryfów Śląski", "Goniądz", "Gąbin", "Gorzów Śląski", "Garwolin", "Gostynin",
    "Góra Kalwaria", "Grodzisk Mazowiecki", "Grójec", "Grajewo", "Głowno", "Gliwice", "Gogolin", "Gozdnica", "Grodków", "Gorzów Wielkopolski", "Hel", "Hajnówka", "Halinów", "Hrubieszów", "Ińsko", "Iłża", "Iława", "Iwonicz-Zdrój", "Inowrocław",
    "Imielin", "Iłowa", "Izbica Kujawska", "Jedlicze", "Jastarnia", "Jasło", "Jasień", "Jedwabne", "Jaworzyna Śląska", "Jeziorany", "Jelenia Góra", "Jelcz-Laskowice", "Józefów", "Józefów nad Wisłą", "Janów Lubelski", "Jarosław", "Jabłonowo Pomorskie",
    "Janikowo", "Jawor", "Janowiec Wielkopolski", "Jordanów", "Jedlina-Zdrój", "Jarocin", "Jędrzejów", "Jarczewo", "Jutrosin", "Jastrowie", "Józefów", "Kozienice", "Krasiczyn", "Krzywcza", "Krasnystaw", "Koziegłowy", "Krynica-Zdrój", "Kraśnik", "Kalety",
    "Kolonowskie",  "Kołaczyce", "Kolbuszowa", "Krosno", "Kartuzy", "Kościerzyna", "Kwidzyn", "Krynica Morska", "Kłobuck", "Krzepice", "Kałuszyn", "Kazimierza Wielka", "Koniecpol", "Kąty Wrocławskie", "Kock", "Kańczuga",
    "Krzeszowice", "Kępice", "Karlino", "Kostrzyn nad Odrą", "Kęty", "Krosno Odrzańskie", "Kalisz Pomorski", "Krośniewice ", "Kutno", "Knurów", "Kamień Pomorski", "Kietrz", "Kędzierzyn-Koźle", "Konstancin-Jeziorna", "Kuźnia Raciborska", "Karpacz",
    "Krzanowice", "Kalwaria Zebrzydowska", "Kowary", "Krapkowice", "Kołobrzeg", "Koszyce", "Katowice", "Kłodzko", "Kudowa-Zdrój", "Koszalin", "Kosów Lacki", "Kisielice", "Kętrzyn", "Końskie", "Kowal", "Korsze", "Koronowo", "Korfantów",
    "Kowalewo-Pomorskie", "Kargowa", "Krasnobród", "Kluczbork", "Kruszwica", "Krynki", "Kożuchów", "Kcynia", "Kamień Krajeński", "Kolno", "Krzyż Wielkopolski", "Konstantynów Łódzki", "Kłecko", "Krobia", "Kalisz", "Kępno", "Koło", "Koprzywnica",
    "Kleszczele", "Kamienna Góra", "Kłodawa", "Kleczew", "Konin", "Kościan", "Kielce", "Krzywiń", "Kazimierz Dolny", "Kobylin", "Knyszyn", "Krotoszyn", "Kamieńsk", "Koźmin Wielkopolski", "Krajenka", "Kostrzyn",
    "Kórnik", "Karczew", "Kunów", "Koluszki", "Książ Wielkopolski", "Kobyłka", "Lesko", "Lębork", "Lubaczów", "Legnica", "Leżajsk", "Libiąż", "Limanowa", "Lądek-Zdrój", "Lipiany", "Lidzbark", "Lubawa", "Lidzbark Warmiński", "Lubawka", "Lipno",
    "Leśna", "Lubin", "Lubań", "Lubień Kujawski", "Lubomierz", "Lwówek Śląski", "Lubliniec", "Lubraniec", "Leszno", "Lwówek", "Lubniewice", "Luboń", "Lubowidz", "Legionowo", "Lipsk", "Lubartów", "Lewin Brzeski", "Lędziny", "Leśnica",
    "Lipsko", "Lubusko", "Łeba", "Łobez", "Łaszczów", "Łasin", "Łazy", "Łabiszyn", "Łochów", "Łobżenica", "Łask", "Łęczyca", "Łaziska Górne", "Łowicz", "Łomianki", "Łańcut", "Łagów", "Łosice", "Łęczna", "Łuków", "Łomża",
    "Łapy", "Łaskarzew", "Łęknica", "Miastko", "Morawica", "Mogielnica", "Malbork", "Maszewo", "Marki", "Mieszkowice", "Moryń", "Małomice", "Międzyzdroje", "Myślibórz", "Mirosławiec", "Młynary", "Mrągowo", "Mikołajki", "Miałkowy", "Mszana Dolna",
    "Miechów", "Mońki", "Milcz", "Małogoszcz", "Miasteczko Śląskie", "Miłomłyn", "Morąg", "Myszków", "Mszczonów", "Muszyna", "Międzyrzec Podlaski", "Mogilno", "Myślenice", "Mrocza", "Maków Podhalański", "Margonin", "Międzychód",
    "Mordy", "Międzylesie", "Miława", "Mikstat", "Mosina", "Międzyrzecz", "Murowana Goślina", "Miejska Górka", "Mirosław", "Medyka", "Milanówek", "Myszyniec", "Maków Mazowiecki", "Mińsk Mazowiecki", "Międzybórz", "Mikołów", "Mielec", "Mirsk", "Michałowo",
    "Nowy Dwór Gdański", "Nekla", "Nysa", "Nisko", "Nowy Staw", "Nowa Słupia", "Nowogrodziec", "Nowogard", "Nowe Warpno", "Nidzica", "Nowa Dęba", "Niemodlin", "Nowe Miasto Lubawskie", "Nowy Sącz", "Niemcza", "Nowogród Bobrzański", "Nieszawa",
    "Nakło nad Notecią", "Narol", "Nowe", "Nowy Tomyśl", "Nowa Sarzyna", "Nowe Skalmierzyce", "Nowe Miasto nad Pilicą", "Nowogród", "Nowa Ruda", "Niepołomice", "Nasielsk", "Namysłów", "Nowy Dwór Mazowiecki", "Nowa Sól", "Nowy Targ", "Nałęczów",
    "Nowe Miasteczko", "Nowy Wiśnicz", "Nowy Korczyn", "Nowe Brzesko", "Ostrów Mazowiecka", "Otwock", "Orneta", "Olecko", "Opole Lubelskie", "Olsztyn", "Otmuchów", "Oleśnica", "Olkusz", "Osiek", "Olsztynek", "Ostróda", "Oleszyce",
    "Ozimek", "Opoczno", "Olesno", "Orzysz", "Opatówek", "Ostrowiec Świętokrzyski", "Osieczna", "Opalenica", "Ozorków", "Opatów", "Oświęcim", "Ożarów", "Oborniki", "Ostrów Wielkopolski", "Odolanów", "Oława", "Opatowiec",
    "Orzesze", "Ostrów Wielkopolski", "Oleśnica", "Ożarów Mazowiecki", "Ostrzeszów", "Ogrodzieniec", "Olszyna", "Ostrów Lubelski", "Obrzycko", "Ostroróg", "Otyń", "Oborniki Śląskie", "Okonek", "Opole", "Ostrołęka",
    "Orły", "Ośno Lubuskie", "Pruszcz Gdański", "Prabuty", "Puck", "Pelplin", "Pełczyce", "Pacanów", "Polanica-Zdrój", "Płoty", "Pszczyna", "Polanów", "Police", "Pyrzyce", "Pionki", "Polkowice", "Przemków", "Poniatowa", "Parczew",
    "Połczyn Zdrój", "Pieniężno", "Przedbórz", "Pasłęk", "Pilzno", "Pilica", "Poręba", "Piaski", "Przeworsk", "Pisz", "Pieszyce", "Pasym", "Przemyśl", "Pakość", "Piwniczna-Zdrój", "Piotrków Kujawski", "Pogorzela",
    "Pyzdry", "Poniec", "Pruchnik", "Prudnik", "Przedecz", "Piła", "Połaniec", "Pleszew", "Prochowice", "Pińczów", "Pyskowice", "Piastów", "Prószków" ,"Piechowice", "Pruszków", "Paczków", "Praszka", "Przysucha", "Pajęczno", "Proszowice",
    "Pierzchnica", "Pieńsk", "Piotrków Trybunalski", "Przecław", "Pułtusk", "Prusice", "Radlin", "Przasnysz", "Pobiedziska", "Puszczykowo", "Pniewy", "Płońsk", "Puławy", "Pilawa", "Podkowa Leśna", "Piaseczno", "Płock", "Poddębice", "Piława Górna",
    "Pabianice", "Rajgród", "Reda", "Radzionków", "Radzyń Podlaski", "Rybnik", "Rymanów", "Ryki", "Rumia", "Recz", "Raciąż", "Rudnik nad Sanem", "Resko", "Radków", "Radom", "Racibórz", "Ryn", "Rabka-Zdrój", "Reszel", "Radłów",
    "Ropczyce", "Rzeszów", "Ryglice", "Rydułtowy", "Ruciane-Nida", "Radzyń Chełmiński", "Rzgów", "Radziejów", "Rypin", "Rakoniewice", "Rychwał", "Rydzyna", "Rogoźno", "Radymno", "Rejowiec Fabryczny", "Różan", "Radomsko", "Raszków",
    "Rzepin", "Rawa Mazowiecka", "Rawicz", "Radoszyce", "Rzeczniów", "Radzymin", "Radomyśl Wielki", "Starogard Gdański", "Słupsk", "Skórcz", "Sztum", "Stepnica", "Stubno", "Sianów", "Sławno", "Stargard", "Sienno", "Stronie Śląskie",
    "Sośnicowice", "Siewierz", "Sanok", "Sławków", "Solec nad Wisłą", "Sierpc", "Sędziszów Małopolski", "Sulęcin", "Stryków", "Sandomierz", "Szczekociny", "Słubice", "Sochaczew", "Strzelin", "Sokołów Podlaski", "Stopnica", "Skaryszew",
    "Stary Sącz", "Sucha Beskidzka", "Strzelce Krajeńskie", "Siemiatycze", "Siedlce", "Suchań", "Syców", "Skwierzyna", "Szczecinek", "Sulejów", "Stoczek Łukowski",  "Suraż", "Skalbmierz", "Siechnice", "Szczawnica", "Sobótka", "Skoczów", "Strumień",
    "Sępopol", "Skała", "Skawina", "Słomniki", "Świątniki Górne", "Susz", "Stawski", "Sopot", "Sokółka", "Sulechów", "Sokołów Małopolski", "Szczytno", "Solec Kujawski", "Szepietowo", "Suchowola", "Skępe", "Strzelno", "Szczuczyn", "Szklarska Poręba",
    "Sułkowice", "Sieradz", "Szubin", "Sejny", "Sieniawa", "Sulejówek", "Sępólno Krajeńskie", "Szczawno-Zdrój", "Strzelce Opolskie", "Szczytna", "Szamocin", "Stawiszyn", "Skierniewice", "Sompolno", "Strzegom", "Supraśl", "Skarżysko-Kamienna", "Sulmierzyce",
    "Szprotawa", "Skoki", "Stęszew", "Swarzędz", "Sława", "Sędziszów", "Szlichtyngowa", "Stąporków", "Suchedniów", "Starachowice", "Słupca", "Szamotuły", "Staszów", "Szydłów", "Sanniki", "Szadek", "Szczebrzeszyn", "Serock", "Suwałki",
    "Szydłowiec", "Szczyrk", "Szczucin", "Stalowa Wola", "Strzyżów", "Świdwin", "Świecie", "Ślesin", "Śmigiel", "Środa-Śląska", "Sieraków", "Świeradów-Zdrój", "Środa Wielkopolska", "Śrem", "Świerzawa", "Świdnica", "Świebodzice", "Ścinawa",
    "Świdnik", "Świebodzin", "Tczew", "Toszek", "Tychowo", "Trzebnica", "Trzebiatów", "Trzcińsko Zdrój", "Tułowice", "Tuczno", "Tolkmicko", "Toruń", "Tuchola", "Tykocin", "Trzcianka", "Trzemeszno", "Tarnogród", "Tomaszów Lubelski", "Tyszowce",
    "Tłuszcz", "Tuliszków", "Tarnobrzeg", "Turek", "Tarczyn", "Twardogóra", "Trzebinia", "Tuchów", "Tarnów", "Trzciel", "Terespol", "Torzym", "Tuszyn", "Tomaszów Mazowiecki", "Tarnowskie Góry", "Tyczyn", "Ustka", "Uniejów", "Ujście", "Ulanów",
    "Ujazd", "Ustroń", "Ustrzyki Dolne", "Władysławowo", "Wejherowo", "Wolin", "Wyrzysk", "Wysoka", "Węgorzyno", "Wałcz", "Wodzisław Śląski", "Wolbrom", "Wieluń", "Wąsosz", "Wojkowice", "Wleń", "Wieruszów", "Węgliniec", "Wielbark", "Węgorzewo",
    "Więcbork", "Wiązów", "Wolbórz", "Wołów", "Wadowice", "Wieliczka", "Wyszogród", "Wąbrzeźno", "Włocławek", "Wołczyn", "Wieleń", "Witkowo", "Warta", "Wielichowo", "Wysokie Mazowieckie", "Wojcieszów", "Wiślica",
    "Wronki", "Wągrowiec", "Wolsztyn", "Woźniki", "Wąchock", "Węgrów", "Wisła", "Wołomin", "Września", "Wasilków", "Wałbrzych", "Wyśmierzyce", "Witnica", "Wyszków", "Wojnicz", "Wschowa", "Wilamowice", "Włoszczowa", "Włodawa",
    "Zamość", "Zwierzyniec", "Żukowo", "Zawidów", "Zgorzelec", "Złotoryja", "Złocieniec", "Zdzieszowice", "Zawichost", "Zakroczym", "Zalewo", "Zduny", "Zbąszyń", "Złoczew", "Zator", "Zgierz", "Zbąszynek", "Zawiercie", "Żywiec",
    "Zagórów", "Złotów", "Ząbkowice Śląskie", "Zębice", "Złoty Stok", "Zwoleń", "Zduńska Wola", "Zagórz", "Zaklików", "Ząbki", "Zambrów", "Zabłudów", "Żary", "Zawadzkie", "Zielonka", "Zelów", "Zakliczyn",
    "Zakopane", "Żabno", "Żuromin", "Żnin", "Żerków", "Żelechów", "Żyrardów", "Żagań", "Żychlin", "Żarów", "Żmigród", "Żarki", "Żurawica", "Zielona Góra",
  ]

  

  myCity(city){
    this.emiter.emit(city)
  }
  
  @Output("selectedCity")
  emiter = new EventEmitter();
  
  constructor() { }

  ngOnInit() {
  }

}
