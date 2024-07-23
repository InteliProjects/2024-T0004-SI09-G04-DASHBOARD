import { Component, OnInit } from '@angular/core';
import { TitlePageComponent } from '../../title-page/title-page.component';
import { TitleSectionComponent } from '../../title-section/title-section.component';
import { HeaderComponent } from '../../header/header.component';
import { TableComponent } from '../../table/table.component';
import { SectionTwoComponent } from '../../section-two/section-two.component';
import { SectionOneComponent } from '../../section-one/section-one.component';
import { SectionThreeComponent } from '../../section-three/section-three.component';
import { SectionFourComponent } from '../../section-four/section-four.component';
import { BarChartComponent } from '../../charts/bar-chart/bar-chart.component';
import { ColumnChartComponent } from '../../charts/column-chart/column-chart.component';
import { LineChartComponent } from '../../charts/line-chart/line-chart.component';
import { KpiCultureComponent } from '../../kpi-culture/kpi-culture.component';
import { KpiNoteComponent } from '../../kpi-note/kpi-note.component';
import { EnpsScoreComponent } from '../../enps-score/enps-score.component';
import { KpiResponseComponent } from '../../kpi-response/kpi-response.component';
import { CidfComponent } from "../../filters/cidf/cidf.component";
import { FiltersAspectComponent } from "../../filters/filters-aspect/filters-aspect.component";
import { SaudeService } from '../../../services/saude.service';
import { GptwService } from '../../../services/gptw.service';
import { StibaService } from '../../../services/stiba.service';
import { ZoomControlsComponent } from '../../zoom-controls/zoom-controls.component';

interface ScoreGPTW {
  averageScoreGeneral: number
}

@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrl: './home.component.scss',
    imports: [TitlePageComponent, TitleSectionComponent, HeaderComponent, SectionOneComponent, SectionTwoComponent, SectionThreeComponent, SectionFourComponent, TableComponent, ColumnChartComponent, LineChartComponent, KpiCultureComponent, KpiNoteComponent, EnpsScoreComponent, KpiResponseComponent, CidfComponent, FiltersAspectComponent, ZoomControlsComponent]
})
export class HomeComponent implements OnInit{

    //Componente: Respondentes
    respondentPercentage: number | null = null;

    //Componente: Nota média das dimensões
    scoreGPTW: number = 0;
    changePercentMonth: number = 0;

    //Componente: Nota média das práticas culturais
    //Componente: Employer Net Promoter (eNPS)
    //Tabela: 5 questões com notas mais altas - Stiba
    topFiveQuestions: any[] = [];

    //Tabela: 5 questões com notas mais baixas - Stiba
    bottomFiveQuestions: any[] = [];

    //Gráfico: Quantidade de atestados por mês
    categoriesAggregateDdays: number[] = [];
    seriesDataAggregateDdays: number[] = [];

    //Gráfico: Média de dias abonados por mês
    categoriesMonthlyAveragesDays: string[] = [];
    seriesMonthlyAveragesDays: number[] = [];

    //Tabela: 5 principais doenças e problemas da área
    diseaseTop: any[] = [];

    //Tabela: 5 principais causas das doenças e problemas
    diseasesCauses: any[] = [];

    //Gráfico: 5 principais cargos afetados
    categories: string[] = [];
    seriesData: number[] = [];
    
    constructor(private saudeService: SaudeService, private gptwService: GptwService, private stibaService: StibaService) {}
  
    ngOnInit(): void {
        //Componente: Respondentes
        this.gptwService.getRespondentPercentage().subscribe(percentage => {
          this.respondentPercentage = percentage;
        });

        //Componente: Nota média das dimensões
        this.gptwService.getScoreGPTW().subscribe((data: ScoreGPTW) => {
          this.scoreGPTW = Number(data.averageScoreGeneral.toFixed(1));
        });

        //Componente: Nota média das práticas culturais
        
        //Componente: Employer Net Promoter (eNPS)

        //Tabela: 5 questões com notas mais altas - Stiba
        this.stibaService.getTopFiveQuestionsStiba().subscribe(data => {
          this.topFiveQuestions = data.map((item, index) => ({
            position: index + 1,
            name: item.question || 'Não Informado',
            weight: item.averageScore
          }));
        });

        //Tabela: 5 questões com notas mais baixas - Stiba
        this.stibaService.getBottomFiveQuestionsStiba().subscribe(data => {
          this.bottomFiveQuestions = data.map((item, index) => ({
            position: index + 1,
            name: item.question || 'Não Informado',
            weight: item.averageScore
          }));
        });

        //Gráfico: Quantidade de atestados por mês
        this.saudeService.getAggregateDdays().subscribe(data => {
          this.categoriesAggregateDdays = data.map(item => item.month);
          this.seriesDataAggregateDdays = data.map(item => item.totalAtestados);
        });

        //Gráfico: Média de dias abonados por mês
        this.saudeService.getMonthlyAveragesDays().subscribe(data => {
          this.categoriesMonthlyAveragesDays = data.map(item => item.month);
          this.seriesMonthlyAveragesDays = data.map(item => item.averageDaysOff);
        });

        //Tabela: 5 principais doenças e problemas da área
        this.saudeService.getTopDiseases().subscribe(data => {
          this.diseaseTop = data.map((item, index) => ({
            position: index + 1, 
            name: item.disease || 'Não Informado',
            weight: item.quantity
          }));
        });

        //Tabela: 5 principais causas das doenças e problemas
        this.saudeService.getDiseasesCauses().subscribe(data => {
          this.diseasesCauses = data.map((item, index) => ({
            position: index + 1,
            name: item.cause || 'Não Informado',
            weight: item.disease || 'Não Informado',
            weight2: item.quantity
          }));
        });

        //Gráfico: 5 principais cargos afetados
        this.saudeService.getRolesAffected().subscribe(data => {
          const top5 = data.sort((a, b) => b.atestados2023 - a.atestados2023).slice(0, 5);      
          this.categories = top5.map(item => item.role);
          this.seriesData = top5.map(item => item.atestados2023);
        });   
    }
}
