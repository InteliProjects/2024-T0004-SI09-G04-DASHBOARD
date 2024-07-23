import { Component } from '@angular/core';
import { HeaderComponent } from '../../header/header.component';
import { TitlePageComponent } from '../../title-page/title-page.component';
import { TitleSectionComponent } from '../../title-section/title-section.component';
import { SectionTwoComponent } from '../../section-two/section-two.component';
import { TableComponent } from '../../table/table.component';
import { SectionOneComponent } from '../../section-one/section-one.component';
import { SectionThreeComponent } from '../../section-three/section-three.component';
import { SectionFourComponent } from '../../section-four/section-four.component';
import { HeatmapChartComponent } from '../../charts/heatmap-chart/heatmap-chart.component';
import { ScatterChartComponent } from '../../charts/scatter-chart/scatter-chart.component';
import { KpiCultureComponent } from '../../kpi-culture/kpi-culture.component';
import { KpiNoteComponent } from '../../kpi-note/kpi-note.component';
import { BarChartComponent } from '../../charts/bar-chart/bar-chart.component';
import { EnpsScoreComponent } from '../../enps-score/enps-score.component';
import { KpiResponseComponent } from '../../kpi-response/kpi-response.component';
import { FiltersAspectComponent } from "../../filters/filters-aspect/filters-aspect.component";
import { CidfComponent } from "../../filters/cidf/cidf.component";
import { GptwService } from '../../../services/gptw.service';
import { StibaService } from '../../../services/stiba.service';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';


interface ScoreGPTW {
  averageScoreGeneral: number
}
@NgModule({
  imports: [
    HttpClientModule // Importe o HttpClientModule aqui
  ],
  providers: [GptwService]
})
export class GptwModule { }
@Component({
    selector: 'app-gptw',
    standalone: true,
    templateUrl: './gptw.component.html',
    styleUrl: './gptw.component.scss',
    imports: [HeaderComponent, TitlePageComponent, TitleSectionComponent, SectionOneComponent, SectionTwoComponent, SectionThreeComponent, SectionFourComponent, TableComponent, HeatmapChartComponent, ScatterChartComponent, KpiResponseComponent, KpiCultureComponent, KpiNoteComponent, BarChartComponent, EnpsScoreComponent, FiltersAspectComponent, CidfComponent]
})
export class GptwComponent {
    //Componente: Respondentes
    respondentPercentage: number | null = null;

    //Componente: Nota média das dimensões
    scoreGPTW: number = 0;
    changePercentMonth: number = 0;

    //Componente: Nota média das práticas culturais
    
    //Componente: Employer Net Promoter (eNPS)
    
    //Gráfico: Frequência de feedback X Índice de confiança
    
    //Gráfico: Frequência de feedback X Segurança psicológica
    
    //Tabela: 5 questões com notas mais altas - GPTW
    topFiveQuestionScores: any[] = [];

    //Tabela: 5 questões com notas mais baixas - GPTW
    bottomFiveQuestionsScores: any[] = [];

    //Tabela: Nota por pergunta
    scoreQuestionGPTW: any[] = [];

    constructor(private gptwService: GptwService, private stibaService: StibaService) {}
  
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
        
        //Gráfico: Frequência de feedback X Índice de confiança
        
        //Gráfico: Frequência de feedback X Segurança psicológica
        
        //Tabela: 5 questões com notas mais altas - GPTW
        this.gptwService.getTopFiveQuestionScores().subscribe(data => {
          this.topFiveQuestionScores = data.map((item, index) => ({
            position: index + 1,
            name: item.pergunta || 'Não Informado',
            weight: item.score
          }));
        });

        //Tabela: 5 questões com notas mais baixas - GPTW
        this.gptwService.getBottomFiveQuestionsScores().subscribe(data => {
          this.bottomFiveQuestionsScores = data.map((item, index) => ({
            position: index + 1,
            name: item.pergunta || 'Não Informado',
            weight: item.score
          }));
        });

        //Tabela: Nota por pergunta
        this.gptwService.getScoreQuestionGPTW().subscribe(data => {
            this.scoreQuestionGPTW = data.map((item, index) => ({
              position: index + 1,
              name: item.pergunta || 'Não Informado',
              weight: item.averageScore
            }));
        });

        

        
    
        
    }
}
