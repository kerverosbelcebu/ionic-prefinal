import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-action-sheet',
  templateUrl: './action-sheet.page.html',
  styleUrls: ['./action-sheet.page.scss'],
})
export class ActionSheetPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  public actionSheetButtons = [
    {
      text: 'Borrar',
      role: 'destructive',
      icon: 'trash-outline',
      cssClass:'rojo',
      data: {
        action: 'delete',
      },
    },
    {
      text: 'compartir',
      icon: 'share-outline',
      data: {
        action: 'share',
      },
    },
    {
      text: 'Cancelar',
      icon: 'close-outline',
      role: 'cancel',
      data: {
        action: 'cancel',
      },
    },
  ];
  

}
