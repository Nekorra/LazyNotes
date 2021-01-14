import { Component, OnInit } from '@angular/core';
import { NoteService } from '../providers/note-service.service';
import { Router } from '@angular/router'
import { Note } from 'src/models/note.model';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-add-note',
  templateUrl: './add-note.page.html',
  styleUrls: ['./add-note.page.scss'],
})
export class AddNotePage{

  formGroup: FormGroup;
  note: Note;
  date: Date = new Date();
  title: string = '';
  content: string = '';

  constructor(
    private NoteService: NoteService,
    public router: Router,
    private datePipe: DatePipe
  ) { 
    this.formGroup = new FormGroup({
      title: new FormControl(),
      content: new FormControl(),
      date: new FormControl(),
    })
  }

  async saveNote(note: Note) {
    this.NoteService.saveNote(note);
    await this.router.navigate(['/tabs'])
    this.router.navigate(['/tabs/tabs/mynotes'])

  }

  async go() {
    await this.router.navigate(['/tabs'])
    this.router.navigate(['/tabs/tabs/mynotes'])
  }

}
