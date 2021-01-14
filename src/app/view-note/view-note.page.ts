import { Component, OnInit } from '@angular/core';
import { Note } from 'src/models/note.model';
import { NoteService } from '../providers/note-service.service';
import { Params, RouteConfigLoadStart, Router } from '@angular/router'
import { ActivatedRoute, RoutesRecognized } from '@angular/router';
import { Storage } from '@ionic/storage';


@Component({
  selector: 'app-view-note',
  templateUrl: './view-note.page.html',
  styleUrls: ['./view-note.page.scss'],
})
export class ViewNotePage implements OnInit{
  note: Note;


  constructor(
    private NoteService: NoteService,
    public router: Router,
    private route:ActivatedRoute,
    public storage: Storage,
    
    ) { 

      
      
    }

    async ngOnInit() {
      await this.storage.get('current').then(parameter => {
        this.note = parameter;
      })
    }


  async deleteNote(createDate: number) {
    this.NoteService.deleteNote(createDate);
    this.storage.remove('current')
    await this.router.navigate(['/tabs'])
    this.router.navigate(['/tabs/tabs/mynotes'])
  }

  async go() {
    await this.router.navigate(['/tabs'])
    this.router.navigate(['/tabs/tabs/mynotes'])
  }
}
