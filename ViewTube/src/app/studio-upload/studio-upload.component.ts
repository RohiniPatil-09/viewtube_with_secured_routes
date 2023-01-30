import { Component, OnInit } from '@angular/core';
import {COMMA, ENTER} from '@angular/cdk/keycodes';
import {FormControl} from '@angular/forms';
import {MatAutocompleteSelectedEvent} from '@angular/material/autocomplete';
import {MatChipInputEvent} from '@angular/material/chips';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';

@Component({
  selector: 'app-studio-upload',
  templateUrl: './studio-upload.component.html',
  styleUrls: ['./studio-upload.component.css']
})
export class StudioUploadComponent implements OnInit {

  
  ngOnInit(): void {
  }
  audienceType: string[] = ['Yes,its made for Kids', 'Not for kids'];
  ageRestriction = ['Yes, Restrict my videos to viewers over 18', "No, don't restrict my videos to viewers over 18"]
  separatorKeysCodes: number[] = [ENTER, COMMA];
  tagCtrl = new FormControl('');
  filtered_tags: Observable<string[]>;
  _tags: string[] = [];
  all_tags: string[] = ['All','Electronics', 'Computers', 'Mechanics', 'Aeronautics', 'Metallurgy'];

  // @ViewChild('tagInput') tagInput: ElementRef<HTMLInputElement>;

  constructor() {
    this.filtered_tags = this.tagCtrl.valueChanges.pipe(
      startWith(null),
      map((tag: string | null) => (tag ? this._filter(tag) : this.all_tags.slice())),
    );
  }
  submit(){
    alert("Your video has been uploaded successfully")
  }
  add(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();

    // Add our tag
    if (value) {
      this._tags.push(value);
    }

    // Clear the input value
    event.chipInput!.clear();

    this.tagCtrl.setValue(null);
  }

  remove(tag: string): void {
    const index = this._tags.indexOf(tag);

    if (index >= 0) {
      this._tags.splice(index, 1);
    }
  }

  selected(event: MatAutocompleteSelectedEvent): void {
    this._tags.push(event.option.viewValue);
    // this.tagInput.nativeElement.value = '';
    this.tagCtrl.setValue(null);
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.all_tags.filter(tag => tag.toLowerCase().includes(filterValue));
  }
  licenseOptions = ['Standard Viewtube License', 'Creative Common License']
  distributionOptions =['Everywhere', 'Make this video available only on monetized' ]
  videoCategories = ['Film & Animation', 
    'Autos & Vehicles', 
    'Music',
    'Pets & Animals',
    'Sports',
    'Travel & Events',
    'Gaming',
    'People & Blogs',
    'Comedy',
    'Entertainment',
    'News & Politics',
    'Howto & Style',
    'Education',
    'Science & Technology',
    'Nonprofits & Activism ']
  visibilityOptions=['private', 'public']
}
