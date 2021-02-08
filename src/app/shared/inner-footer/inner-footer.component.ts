import { MetricsComponent } from './../../modals/metrics/metrics.component';
import { AiBotComponent } from './../../modals/ai-bot/ai-bot.component';
import { MatDialogModule, MatDialogConfig, MatDialog } from '@angular/material/dialog';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inner-footer',
  templateUrl: './inner-footer.component.html',
  styleUrls: ['./inner-footer.component.scss']
})
export class InnerFooterComponent implements OnInit {

  constructor(public openDialog: MatDialog) { }

  ngOnInit(): void {
  }

  openAiBot(): void {
    const modalRef = new MatDialogConfig();
    modalRef.disableClose = true;
    modalRef.id = 'aiBotComponent';
    modalRef.panelClass = 'ai-bot-dialog';
    modalRef.height = '650px';
    modalRef.width = '1150px';
    const modalDialog = this.openDialog.open(AiBotComponent, modalRef);
  }

  openEndMetrics(): void {
    const metricsModal = new MatDialogConfig();
    metricsModal.disableClose = true;
    metricsModal.id = 'endMetrics';
    metricsModal.height = 'auto';
    metricsModal.width = '50%';
    const modalDialog = this.openDialog.open(MetricsComponent, metricsModal);
  }

}
