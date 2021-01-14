import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router'
import { create } from 'domain';
import { Note } from 'src/models/note.model';
import { NoteService } from '../providers/note-service.service'
import { NavController } from '@ionic/angular';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-mynotes',
  templateUrl: './mynotes.page.html',
  styleUrls: ['./mynotes.page.scss'],
})
export class MynotesPage{

  
  private notes: Promise<Note[]>;
  private note: Note;

  constructor(public router: Router,
    private noteService: NoteService,
    public navCtrl: NavController,
    public storage: Storage,
  ) { }

  ionViewDidEnter() {
    this.notes = this.getAllNotes();

  }

  addNote() {
    this.router.navigate(['/add-note'])
  }

  async getNote(createDate: number) {
    await this.noteService.getNote(createDate).then(n => {
      this.note = n;
    })
    await this.storage.set('current', this.note)
    await this.router.navigate(['/view-note']);
    //this.router.navigate(['/view-note', {data: createDate}])
    console.log(this.note)
  }

  getAllNotes() {
    return this.noteService.getAllNotes()
  }

}
