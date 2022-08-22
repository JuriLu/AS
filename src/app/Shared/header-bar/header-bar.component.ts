import {Component, OnInit} from '@angular/core';
import {News} from "../../Models/news.model";

@Component({
  selector: 'app-header-bar',
  templateUrl: './header-bar.component.html',
  styleUrls: ['./header-bar.component.scss']
})
export class HeaderBarComponent implements OnInit {

  loggedUser = true
  toggleUser(){
    this.loggedUser = !this.loggedUser
  }


  News: News[] = [
    {
      header: 'BMW sees volatile 2022 with chips and energy squeeze in focus',
      content: 'BERLIN, Aug 3 (Reuters) - BMW (BMWG.DE) lowered its output forecast and warned of a highly volatile second half on Wednesday, pinpointing supplies of energy in Europe and chips worldwide as the two crucial factors to the carmaker hitting full-year earnings targets.New incoming orders were beginning to fall but order books remained filled for the next few months, chief executive Oliver Zipse said.'
    },
    {
      header: 'BMW warns of slowing sales as inflation and rate rises bite',
      content: 'BMW has warned that sales of its luxury models are already slowing as consumers battle inflation and higher interest rates, becoming the first large carmaker to predict economic turmoil will damp demand this year.' +
        'The Munich-based group’s shares fell 6 per cent to €76.26 by early afternoon as worries about the global economy outweighed the posting of earnings that beat market expectations in the last quarter.',
    },
    {
      header: 'BMW sees full-year drop in output amid volatile second half',
      content: 'BERLIN -- BMW lowered its output forecast and warned of a highly volatile second half, pinpointing supplies of energy in Europe and microchips worldwide as the two crucial factors to the automaker hitting full-year earnings targets.\n' +
        '\n' +
        'The company expects a solid sales increase in the second half, but said full-year deliveries will fall short of last year\'s record high of 2.52 million',
    },
    {
      header: 'BMW introduces lower-spec i4 eDrive35, starting under $53,000… but why?',
      content: 'BMW announced a third variant to its all-electric i4 range today – the eDrive35. As a lower-performance, single motor EV, the eDrive35 will arrive as the most affordable option of one of BMW’s lowest-priced EVs. At just a few thousand dollars less than its eDrive40 sibling, we can’t help but wonder if this vehicle is necessary? You can learn more below and decide for yourself.',
    },
    {
      header: 'How Do Car Seats Fit in a 2023 BMW iX?',
      content: 'The verdict: BMW’s new all-electric iX is an SUV with seats for five and a very spacious backseat. We tested the M60 trim, which is good for a maximum EPA-estimated 288 miles of range. Ample legroom and easy-access Latch anchors helped make car seat installation easy, but the SUV’s fixed head restraints caused some fit issues. ',
    },
    {
      header: 'First BMW Neue Klasse Models To Be Sedan And SUV',
      content: 'With the i4 and iX, BMW currently has two of the hottest products on the EV market. These will be joined by a new generation of zero-emissions vehicles towards the middle of the decade, underpinned by what the Bavarian company calls Neue Klasse. It is a new architecture that is currently under development and we will first see it under the skin of an electric sedan and an electric SUV.',
    },
    {
      header: 'Next stop Japan: BMW Motorrad World Endurance Team to debut at the Suzuka 8 Hours',
      content: 'The third round of the FIM Endurance World Championship 2022 (FIM EWC) takes the BMW Motorrad World Endurance Team to Japan. The Suzuka 8 Hours is coming up next weekend (5th to 7th August), another classic event on the schedule. Having celebrated victory at the home race in early June, the 24H SPA EWC Motos (BEL), the team is aiming to claim a strong result also in Japan.',
    },
    {
      header: 'De Oliveira wary of BMW M4\'s "serious speed" in SUPER GT',
      content: 'Studie duo Seiji Ara and Tsubasa Kondo - standing in for an absent Augusto Farfus - converted pole into the team’s first GT300 win as an independent team, catapulting themselves to second in the drivers’ standings in the process.\n' +
        '\n' +
        'The pair are 12 points adrift of de Oliveira and Kiyoto Fujinami, who won the opening race of the season at Okayama in their Nissan GT-R NISMO GT3 and finished third at Suzuka.',
    },

  ]

  constructor() {}

  ngOnInit(): void {}

  //Ready for Future Implementation
  logout(){}

  //Ready for Future Implementation
  login(){}

}
